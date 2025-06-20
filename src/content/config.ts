
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const cardPost = defineCollection ({
  loader: glob({ pattern: "**/*.mdoc", base: "src/content/cards" }),
  schema: ({ image }) => z.object({
    title: z.string() ,  
    // description: z.string(),
    //heroImage: image().optional(),
    // coverAlt: z.string().optional()
    heroImage: image().optional(), // `image()` ist ein spezieller Zod-Typ von Astro, der das Bild verarbeitet
    heroImageAlt: z.string().optional(), // Für den Alt-Text
    content: z.string(),
  })
})



export const collections = { cardPost }


