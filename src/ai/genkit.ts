import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {devLocalVectorstore} from '@genkit-ai/dev-local-vectorstore';

export const ai = genkit({
  plugins: [
    googleAI(),
    devLocalVectorstore([
      {
        indexName: 'knowledge-base',
        embedder: 'googleai/embedding-004',
      },
    ]),
  ],
  model: 'googleai/gemini-2.5-flash',
});
