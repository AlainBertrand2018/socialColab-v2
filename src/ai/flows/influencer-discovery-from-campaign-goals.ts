'use server';

/**
 * @fileOverview A flow for suggesting influencers based on campaign goals and target audience.
 *
 * - discoverInfluencers - A function that suggests influencers based on campaign goals and target audience.
 * - InfluencerDiscoveryInput - The input type for the discoverInfluencers function.
 * - InfluencerDiscoveryOutput - The return type for the discoverInfluencers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InfluencerDiscoveryInputSchema = z.object({
  campaignGoals: z
    .string()
    .describe('The goals of the marketing campaign, e.g., increase brand awareness, drive sales, etc.'),
  targetAudience: z
    .string()
    .describe('The target audience for the campaign, including demographics, interests, etc.'),
});
export type InfluencerDiscoveryInput = z.infer<typeof InfluencerDiscoveryInputSchema>;

const InfluencerDiscoveryOutputSchema = z.object({
  influencerSuggestions: z
    .array(z.string())
    .describe('A list of suggested influencers who would be a good fit for the campaign.'),
});
export type InfluencerDiscoveryOutput = z.infer<typeof InfluencerDiscoveryOutputSchema>;

export async function discoverInfluencers(input: InfluencerDiscoveryInput): Promise<InfluencerDiscoveryOutput> {
  return discoverInfluencersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'influencerDiscoveryPrompt',
  input: {schema: InfluencerDiscoveryInputSchema},
  output: {schema: InfluencerDiscoveryOutputSchema},
  prompt: `You are an expert marketing assistant. Based on the campaign goals and target audience provided, suggest a list of influencers who would be a good fit for the campaign.

Campaign Goals: {{{campaignGoals}}}
Target Audience: {{{targetAudience}}}

Influencer Suggestions:`,
});

const discoverInfluencersFlow = ai.defineFlow(
  {
    name: 'discoverInfluencersFlow',
    inputSchema: InfluencerDiscoveryInputSchema,
    outputSchema: InfluencerDiscoveryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
