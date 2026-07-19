import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: () =>
		z.object({
			listName: z.string(),
			title: z.string(),
			subtitle: z.string(),
			cover: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }),
			thumb: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }),
			openGraph: z.string(),
			category: z.string(),
			date: z.string(),
			excerpt: z.string()
		})
});

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
	schema: () =>
		z.object({
			listName: z.string(),
			websiteUrl: z.string(),
			cover: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }),
			thumb: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }),
			infoBlocks: z.array(z.object({ icon: z.string(), title: z.string(), content: z.string() })),
			images: z.array(z.object({ src: z.string(), alt: z.string(), thumb: z.string() }))
		})
});

const testimonials = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			image: image(),
			imageAlt: z.string(),
			shortCopy: z.string(),
			reviewDate: z.string(),
			order: z.number()
		})
});

const timeline = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
	schema: () =>
		z.object({
			section: z.enum(['experience', 'education']),
			institution: z.string(),
			institutionUrl: z.string().optional(),
			position: z.string(),
			period: z.string(),
			order: z.number()
		})
});

const site = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
	schema: () => z.object({})
});

export const collections = { blog, portfolio, testimonials, timeline, site };
