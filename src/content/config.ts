import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    category: z.enum(['brand', 'web', 'motion', 'development']),
    services: z.array(z.string()),
    accentColor: z.string().default('#3b82f6'),
    featured: z.boolean().default(false),
    excerpt: z.string(),
    results: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
