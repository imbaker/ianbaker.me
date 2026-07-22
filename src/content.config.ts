import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { file } from 'astro/loaders';

const formatQuotes = (str: string) => str.replace("'", "\u2019");

const concerts = defineCollection({
  loader: file("src/content/concerts.json"),
  schema:
    z.object({
      id: z.string(),
      date: z.coerce.date(),
      venue: z.object({
        name: z.string().transform(formatQuotes),
        city: z.string(),
        country: z.string()
      }),
      songs: z.array(z.object({
        order: z.number(),
        title: z.string().transform(formatQuotes)
      })),
    }),
});

export const collections = { concerts };

