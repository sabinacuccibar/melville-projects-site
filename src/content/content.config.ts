import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    organisation: z.string().optional(),
    role: z.string().optional(),
    field: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  projects,
  notes,
};