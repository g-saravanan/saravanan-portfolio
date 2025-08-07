// src/ai/flows/generate-resume.ts
'use server';
/**
 * @fileOverview A flow that tailors Saravanan's resume to user's interests and current needs, generating a downloadable PDF.
 *
 * - generateTailoredResume - A function that handles the resume tailoring process.
 * - GenerateTailoredResumeInput - The input type for the generateTailoredResume function.
 * - GenerateTailoredResumeOutput - The return type for the generateTailoredResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTailoredResumeInputSchema = z.object({
  interests: z.string().describe('The user\'s interests and current needs.'),
  originalResume: z.string().describe('The original resume content as a string.'),
});
export type GenerateTailoredResumeInput = z.infer<typeof GenerateTailoredResumeInputSchema>;

const GenerateTailoredResumeOutputSchema = z.object({
  tailoredResume: z.string().describe('The tailored resume content.'),
});
export type GenerateTailoredResumeOutput = z.infer<typeof GenerateTailoredResumeOutputSchema>;

export async function generateTailoredResume(input: GenerateTailoredResumeInput): Promise<GenerateTailoredResumeOutput> {
  return generateTailoredResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTailoredResumePrompt',
  input: {schema: GenerateTailoredResumeInputSchema},
  output: {schema: GenerateTailoredResumeOutputSchema},
  prompt: `You are a resume tailoring expert. Tailor the following resume to match the user's interests and current needs.

Original Resume:
{{{originalResume}}}

User Interests and Needs: {{{interests}}}

Tailored Resume:`, // No Handlebars logic - straight output
});

const generateTailoredResumeFlow = ai.defineFlow(
  {
    name: 'generateTailoredResumeFlow',
    inputSchema: GenerateTailoredResumeInputSchema,
    outputSchema: GenerateTailoredResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
