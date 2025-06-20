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

           // NEU: Hinzufügen des Bildfeldes
        heroImage: fields.image({
          label: 'Hero Image',
          description: 'Das Hauptbild für den Post.',
          directory: 'src/assets/images/posts', // <-- Speicherort für hochgeladene Bilder
          publicPath: '../../assets/images/posts/', // <-- Der öffentliche Pfad, wie Astro ihn findet
          validation: { isRequired: false }, // Optional: Bild muss nicht zwingend vorhanden sein
        }),
        heroImageAlt: fields.text({
          label: 'Hero Image Alt Text',
          description: 'Alternativer Text für das Bild (wichtig für SEO und Barrierefreiheit).',
          validation: { isRequired: false },
        }),
        
        content: fields.markdoc({ 
          label: 'Content' }),
      },
    }),
  },
  

});




