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

const overviewCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Fields for page overviews (e.g., software.md)
    introText: z.string().optional(),
    
    // Fields for project entries
    abstract: z.string().optional(),
    categories: z.array(z.string()).optional(),
    link: z.string().url().optional().or(z.literal("")),
    
    // Shared fields
    title: z.string(),
    heroImage: z.string().optional().or(z.literal("")),
    order: z.number().optional(),
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
