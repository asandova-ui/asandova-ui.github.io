import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    pitch: z.string().optional(),
    description: z.string(),
    cardStatusLabel: z.string().optional(),
    cardStatusTone: z.enum(["live", "building", "neutral"]).optional(),
    detailStatusLabel: z.string().optional(),
    detailStatusTone: z.enum(["live", "building", "neutral"]).optional(),
    detailStatusNote: z.string().optional(),
    featured: z.boolean().default(false),
    year: z.string(),
    role: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .default([]),
    order: z.number().default(0)
  })
});

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { projects, posts };
