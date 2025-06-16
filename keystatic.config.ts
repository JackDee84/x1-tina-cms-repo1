// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'woodys/x1-tina-cms-repo1',
  },
  ui: {
    brand: {
      name: 'Woody'
    },

  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/cards/*',
      format: { contentField: 'content' },

      schema: {
        title: fields.slug({ 
          name: { 
            label: 'Title' } }),

        content: fields.markdoc({ 
          label: 'Content' }),
      },
    }),
  },
});




