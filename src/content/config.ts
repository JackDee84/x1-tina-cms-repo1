
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const cardPost = defineCollection ({
  loader: glob({ pattern: "**/*.mdoc", base: "src/content/cards" }),
  schema: ({ image }) => z.object({
    title: z.string() ,
    // description: z.string(),
    //heroImage: image().optional(),
    // coverAlt: z.string().optional()
  })
})



export const collections = { cardPost }


