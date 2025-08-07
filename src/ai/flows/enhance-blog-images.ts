'use server';

/**
 * @fileOverview Automatically sources relevant images for blog posts that are missing images, to enhance the visual appeal of the blog.
 *
 * - enhanceBlogPostsWithImages - A function that enhances blog posts with images.
 * - EnhanceBlogPostsWithImagesInput - The input type for the enhanceBlogPostsWithImages function.
 * - EnhanceBlogPostsWithImagesOutput - The return type for the enhanceBlogPostsWithImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceBlogPostsWithImagesInputSchema = z.object({
  blogPostTitle: z.string().describe('The title of the blog post.'),
  blogPostContent: z.string().describe('The content of the blog post.'),
});
export type EnhanceBlogPostsWithImagesInput = z.infer<typeof EnhanceBlogPostsWithImagesInputSchema>;

const EnhanceBlogPostsWithImagesOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated image.'),
});
export type EnhanceBlogPostsWithImagesOutput = z.infer<typeof EnhanceBlogPostsWithImagesOutputSchema>;

export async function enhanceBlogPostsWithImages(
  input: EnhanceBlogPostsWithImagesInput
): Promise<EnhanceBlogPostsWithImagesOutput> {
  return enhanceBlogPostsWithImagesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceBlogPostsWithImagesPrompt',
  input: {schema: EnhanceBlogPostsWithImagesInputSchema},
  output: {schema: EnhanceBlogPostsWithImagesOutputSchema},
  prompt: `Generate an image URL that is relevant to the blog post with the title "{{blogPostTitle}}" and content "{{blogPostContent}}". The image should visually represent the blog post's main theme or message.`,
});

const enhanceBlogPostsWithImagesFlow = ai.defineFlow(
  {
    name: 'enhanceBlogPostsWithImagesFlow',
    inputSchema: EnhanceBlogPostsWithImagesInputSchema,
    outputSchema: EnhanceBlogPostsWithImagesOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an image that is relevant to the blog post with the title "${input.blogPostTitle}" and content "${input.blogPostContent}". The image should visually represent the blog post's main theme or message.`,      
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('No image URL was generated.');
    }

    return {imageUrl: media.url};
  }
);
