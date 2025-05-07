import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: z.object({
    Slug: z.nullable(z.string()),
    Description: z.nullable(z.string()),
    "Mots-clés": z.nullable(z.string()),
    Name: z.string(),
    Url: z.nullable(z.string()),
  }),
});

export const collections = { pages };
