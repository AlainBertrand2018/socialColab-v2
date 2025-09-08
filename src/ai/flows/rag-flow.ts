'use server';

/**
 * @fileOverview A flow that uses Retrieval-Augmented Generation (RAG)
 * to answer questions based on a knowledge base.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { retrieve } from 'genkit/experimental/ai';
import { unstructured } from 'genkit/experimental/unstructured';
import * as path from 'path';

export const RagInputSchema = z.object({
  query: z.string().describe('The user\'s question or topic.'),
});
export type RagInput = z.infer<typeof RagInputSchema>;

const knowledgeBaseRetriever = retrieve({
  retriever: {
    id: 'knowledge-base',
    config: {
      chunking: {
        strategy: 'PASS_THROUGH',
      },
    },
    async retrieve(req) {
      const documents = await unstructured.chunk({
        sources: () => [
          path.resolve('./public/knowledgeBase/socialMediaPlanning_Assessment'),
          path.resolve('./public/knowledgeBase/stateOfSocialmediaMarketing'),
        ],
        chunking: {
          strategy: 'AGGREGATE',
        },
      });

      return { documents };
    },
  },
});

const ragPrompt = ai.definePrompt(
  {
    name: 'ragPrompt',
    input: { schema: RagInputSchema },
    prompt: `You are an expert Social Media Marketing consultant.
    Your name is CollabBot.
    Your knowledge is strictly limited to the information provided in the context below.
    Do not answer any questions or requests that are not related to the context.
    If the context does not contain the answer, say "I'm sorry, I don't have enough information to answer that."

    Context:
    {{#each (embed "knowledge-base" query=query) as |document|}}
    [Source: {{document.metadata.filename}}]
    {{document.content}}
    ---
    {{/each}}

    User Query: {{{query}}}

    Answer:`,
  },
  {
    retrievers: [knowledgeBaseRetriever],
  }
);

export async function askKnowledgeBase(input: RagInput): Promise<string> {
  const { output } = await ragPrompt(input);
  return output!;
}
