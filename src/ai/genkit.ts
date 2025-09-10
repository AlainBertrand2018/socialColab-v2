// src/ai/genkit.ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { devLocalVectorstore } from '@genkit-ai/dev-local-vectorstore';

export const ai = genkit({
  plugins: [
    googleAI(), // reads GEMINI_API_KEY / GOOGLE_API_KEY
    devLocalVectorstore([
      {
        indexName: 'knowledge-base',
        // Pass a typed embedder ref from the plugin (avoids typos)
        embedder: googleAI.embedder('text-embedding-004'),
      },
    ]),
  ],
  // Also use the typed model ref:
  model: googleAI.model('gemini-2.5-flash'),
});
