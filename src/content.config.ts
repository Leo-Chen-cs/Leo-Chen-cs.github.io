import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.string(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    projectUrl: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    demo: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
