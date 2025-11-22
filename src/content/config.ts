import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    abstract: z.string().optional(), // Optional for backward compatibility
    publishDate: z.date().optional(),
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
    abstract: z.string().optional(), // Optional for backward compatibility
    publishDate: z.date().optional(),
    heroImage: z.union([z.string(), image()]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

const overviewOnlyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    heroImage: z.string().optional(),
    order: z.number().optional(),
    link: z.string().url().optional(),
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
  'software-overview-only': overviewOnlyCollection,
  'storytelling-overview-only': overviewOnlyCollection,
  'philosophy-overview-only': overviewOnlyCollection,
  'art-overview-only': overviewOnlyCollection,
  'hiking-overview-only': overviewOnlyCollection,
  'overviews': overviewCollection,
};
