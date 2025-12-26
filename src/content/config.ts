import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    introText: z.string().optional(), // Added for 0.[category].md
    abstract: z.string().optional(),
    publishDate: z.date().optional(),
    heroImage: z.union([
      z.string().startsWith('/'), // Public folder assets
      z.string().url(),           // Remote images
      image()                     // Relative local assets
    ]).optional(),
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
    heroImage: z.union([
      z.string().startsWith('/'), // Public folder assets
      z.string().url(),           // Remote images
      image()                     // Relative local assets
    ]).optional(),
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
    categories: z.array(z.object({
      name: z.string(),
      order: z.number(),
    })),
    heroImage: z.union([
      z.string().startsWith('/'), // Public folder assets
      z.string().url(),           // Remote images
      image()                     // Relative local assets
    ]).optional(),
    link: z.union([
      z.string().url(),
      z.string().refine((val) => val.startsWith('/'), {
        message: "Link must be a valid URL or start with '/' for relative paths",
      }),
      z.literal(''),
    ]).optional(),
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
