import { defineCollection, z } from 'astro:content';

const softwareCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(), // For external links or demos
  }),
});

const generalCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        heroImage: image().optional(),
        publishDate: z.date().optional(),
    })
});

export const collections = {
  'software': softwareCollection,
  'storytelling': generalCollection,
  'philosophy': generalCollection,
  'art': generalCollection,
  'hiking': generalCollection,
  'cv': generalCollection,
};
