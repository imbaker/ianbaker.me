import { defineCollection, z } from 'astro:content';

import { file } from 'astro/loaders';

const concerts = defineCollection({
  loader: file("src/content/concerts.json"),
  schema:
    z.object({
      id: z.string(),
      date: z.string().transform((date) => new Date(date)),
      venue: z.object({
        name: z.string(),
        city: z.string(),
        country: z.string()
      }),
      songs: z.array(z.object({ order: z.number(), title: z.string() })),
    }),
});

export const collections = { concerts };

