import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const palvelut = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/palvelut" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    summary: z.string(),
    includes: z.array(z.string()),
    faqs: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      }),
    ),
  }),
});

const referenssit = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/referenssit" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number().default(0),
      location: z.string().optional(),
      imageAlt: z.string().optional(),
      placeholder: z.boolean().default(false),
      image: image().optional(),
    }),
});

export const collections = { palvelut, referenssit };
