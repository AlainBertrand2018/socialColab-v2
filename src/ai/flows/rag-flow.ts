'use server';

/**
 * @fileOverview A flow that uses Retrieval-Augmented Generation (RAG)
 * to answer questions based on a knowledge base of markdown files.
 * This flow initializes a vector store with the contents of the files,
 * retrieves relevant documents based on a user's query, and then
 * uses an AI model to generate an answer from that context.
 */

import {ai} from '@/ai/genkit';
import {devLocalIndexerRef, devLocalRetrieverRef} from '@genkit-ai/dev-local-vectorstore';
import {Document, defineFlow, definePrompt} from 'genkit';
import {z} from 'zod';
import * as fs from 'fs/promises';
import * as path from 'path';

// Define the schema for the flow's input (the user's question).
export const RagInputSchema = z.object({
  query: z.string(),
});
export type RagInput = z.infer<typeof RagInputSchema>;

// Define the schema for the flow's output.
export const RagOutputSchema = z.object({
  answer: z.string(),
  sources: z.array(z.string()),
});
export type RagOutput = z.infer<typeof RagOutputSchema>;

// Get references to the local indexer and retriever configured in genkit.ts.
const indexer = devLocalIndexerRef('knowledge-base');
const retriever = devLocalRetrieverRef('knowledge-base');

/**
 * Indexes the documents from the knowledge base into the local vector store.
 * This is designed to be called once when the application starts.
 */
async function indexKnowledgeBase() {
  const knowledgeBaseDir = path.resolve('./public/knowledgeBase');
  try {
    const files = await fs.readdir(knowledgeBaseDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.log('No markdown files found in knowledge base.');
      return;
    }

    console.log(`Found ${markdownFiles.length} files to index.`);

    const documents = await Promise.all(
      markdownFiles.map(async file => {
        const filePath = path.join(knowledgeBaseDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return Document.fromText(content, {
          source: file,
          filePath: filePath,
        });
      })
    );

    await ai.index({
      indexer,
      documents,
    });

    console.log('Knowledge base indexed successfully.');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('Knowledge base directory not found. Skipping indexing.');
    } else {
      console.error('Error indexing knowledge base:', error);
    }
  }
}

// Immediately invoke the indexing function when the server starts.
// The await here ensures that indexing completes before the app proceeds.
await indexKnowledgeBase();

// Define the prompt that will be used to generate answers.
// It takes the user's query and the retrieved documents as context.
const ragPrompt = definePrompt(
  {
    name: 'ragPrompt',
    inputSchema: z.object({
      query: z.string(),
      context: z.array(z.string()),
    }),
    prompt: `You are an expert Social Media Marketing consultant.
    Your name is Tadeo.
    Your knowledge is strictly limited to the information provided in the context below.
    Do not answer any questions or requests that are not related to the context.
    If the context does not contain the answer, say "I'm sorry, I don't have enough information to answer that."

    Context:
    {{#each context}}
    {{this}}
    ---
    {{/each}}

    User Query: {{{query}}}

    Answer:`,
  }
);


// Define the main RAG flow.
export const askKnowledgeBase = defineFlow(
  {
    name: 'askKnowledgeBase',
    inputSchema: RagInputSchema,
    outputSchema: RagOutputSchema,
  },
  async ({query}) => {
    // Retrieve relevant documents from the vector store based on the user's query.
    const context = await ai.retrieve({
      retriever,
      query,
      options: {
        limit: 3, // Retrieve the top 3 most relevant document chunks.
      },
    });

    // Generate an answer using the AI model, providing the retrieved context.
    const {output} = await ragPrompt({
      query,
      context: context.map(d => d.content),
    });

    // Extract the source filenames from the retrieved documents' metadata.
    const sources = context.map(doc => doc.metadata?.source as string).filter(Boolean);
    
    // Remove duplicate source filenames.
    const uniqueSources = [...new Set(sources)];

    return {
      answer: output!,
      sources: uniqueSources,
    };
  }
);
