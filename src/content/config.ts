import { defineCollection, z } from 'astro:content';

const clientsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      logo: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
    })
  ),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    partner: z.string(),
    partnerDescription: z.string(),
    keywords: z.array(z.string()).optional(),
    image: z.string().optional(),
    timeframe: z.string(),
    draft: z.boolean().optional().default(false),
    order: z.number().optional(),
  }),
});

export const collections = {
  'clients': clientsCollection,
  'projects': projectsCollection,
}; 