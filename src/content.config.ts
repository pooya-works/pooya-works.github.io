import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    number: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.string(),
    category: z.string(),
    platform: z.string().optional(),
    openSource: z.boolean().default(true),
    github: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    day: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    project: z.string().optional(),
  }),
});

export const collections = { projects, notes };
