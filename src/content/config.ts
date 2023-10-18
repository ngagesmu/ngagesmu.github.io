import { defineCollection, z } from 'astro:content';

const post = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),

        // expecting to keep this largely unused
        heroImage: z.string().optional(),
    })
});

export const collections = { post };
