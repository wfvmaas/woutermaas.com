import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.union([z.string(), image()]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(), // For external links or demos
    order: z.number().optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.union([z.string(), image()]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

const overviewCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    introText: z.string(),
    heroImage: z.string(),
  }),
});

export const collections = {
  'software': softwareCollection,
  'storytelling': projectCollection,
  'philosophy': projectCollection,
  'art': projectCollection,
  'hiking': projectCollection,
  'overviews': overviewCollection,
};
