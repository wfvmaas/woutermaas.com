import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    introText: z.string().optional(), // Added for 0.[category].md
    abstracts: z.array(z.string()).optional(), // References to abstract slugs for overview pages
    hero_text: z.string().optional(), // Hero text for detail pages
    abstract: z.string().optional(), // Deprecated, use hero_text for detail pages
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
    abstracts: z.array(z.string()).optional(), // References to abstract slugs for overview pages
    hero_text: z.string().optional(), // Hero text for detail pages
    abstract: z.string().optional(), // Deprecated, use hero_text for detail pages
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
