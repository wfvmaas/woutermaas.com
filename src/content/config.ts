import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    introText: z.string().optional(), // Added for 0.[category].md
    abstract: z.string().optional(),
    publishDate: z.date().optional(),
    heroImage: z.union([z.string(), image()]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    introText: z.string().optional(), // Added for 0.[category].md
    abstract: z.string().optional(),
    publishDate: z.date().optional(),
    heroImage: z.union([z.string(), image()]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

const abstractsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    abstract: z.string(),
    categories: z.array(z.string()),
    order: z.number().optional(),
    heroImage: z.union([z.string(), image()]).optional(),
  }),
});

export const collections = {
  'software': softwareCollection,
  'storytelling': projectCollection,
  'philosophy': projectCollection,
  'art': projectCollection,
  'hiking': projectCollection,
  'abstracts': abstractsCollection,
};
