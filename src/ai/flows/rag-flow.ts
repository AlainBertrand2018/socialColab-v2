// src/ai/flows/rag-flow.ts
import 'server-only';

/**
 * Retrieval-Augmented Generation (RAG) flow over local markdown knowledge base.
 * - Indexes ./public/knowledgeBase/*.md into dev-local vectorstore on startup
 * - Retrieves top-k chunks and answers with a code-defined prompt
 */

import { ai } from '@/ai/genkit';
import { devLocalIndexerRef, devLocalRetrieverRef } from '@genkit-ai/dev-local-vectorstore';
import { Document } from 'genkit/retriever';
import { z } from 'zod';
import * as fs from 'fs/promises';
import * as path from 'path';

// ---------- Schemas ----------
export const RagInputSchema = z.object({
  query: z.string(),
});
export type RagInput = z.infer<typeof RagInputSchema>;

export const RagOutputSchema = z.object({
  answer: z.string(),
  sources: z.array(z.string()),
});
export type RagOutput = z.infer<typeof RagOutputSchema>;

// ---------- Vector store refs ----------
const indexer = devLocalIndexerRef('knowledge-base');
const retriever = devLocalRetrieverRef('knowledge-base');

// ---------- Index knowledge base (run at startup) ----------
export async function indexKnowledgeBase() {
  const knowledgeBaseDir = path.resolve(process.cwd(), 'public/knowledgeBase');

  try {
    const files = await fs.readdir(knowledgeBaseDir);
    const markdownFiles = files.filter((f) => f.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.log('[RAG] No markdown files found in knowledge base.');
      return;
    }

    console.log(`[RAG] Found ${markdownFiles.length} files to index.`);

    const documents = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(knowledgeBaseDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return Document.fromText(content, {
          source: file,
          filePath,
        });
      })
    );

    await ai.index({ indexer, documents });
    console.log('[RAG] Knowledge base indexed successfully.');
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      console.log('[RAG] Knowledge base directory not found; skipping indexing.');
    } else {
      console.error('[RAG] Error indexing knowledge base:', error);
    }
  }
}

// Run once on module load (server-only)
await indexKnowledgeBase();

// ---------- Helpers ----------
/** Genkit content is an array of parts (e.g., { text }), flatten to a single string. */
function contentToText(content: unknown): string {
  if (Array.isArray(content)) {
    return content
      .map((p: any) => (p && typeof p.text === 'string' ? p.text : ''))
      .filter(Boolean)
      .join('\n')
      .trim();
  }
  if (typeof content === 'string') return content.trim();
  return '';
}

// ---------- Prompt (code-defined) ----------
const ragPrompt = ai.definePrompt({
  name: 'ragPrompt',
  model: 'googleai/gemini-2.5-flash',
  input: {
    schema: z.object({
      query: z.string(),
      context: z.array(z.string()),
    }),
  },
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
});

// ---------- Flow ----------
export const askKnowledgeBase = ai.defineFlow(
  {
    name: 'askKnowledgeBase',
    inputSchema: RagInputSchema,
    outputSchema: RagOutputSchema,
  },
  async ({ query }) => {
    // Retrieve top-k relevant chunks
    const docs = await ai.retrieve({
      retriever,
      query,
      options: { k: 3 }, // top-k
    });

    const contextStrings = docs
      .map((d) => contentToText(d.content))
      .filter((s) => s.length > 0);

    const { output } = await ragPrompt({
      query,
      context: contextStrings,
    });

    // Unique source filenames from metadata
    const sources = Array.from(
      new Set(
        docs
          .map((d) => (d.metadata?.source as string) || '')
          .filter(Boolean)
      )
    );

    return {
      answer: output ?? '',
      sources,
    };
  }
);
