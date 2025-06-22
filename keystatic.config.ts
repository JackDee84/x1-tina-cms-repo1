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

      label: 'Posts ', //definiert den Namen der Sammlung
      slugField: 'title' ,
      path: 'src/content/cards/*',
      format: { contentField: 'content' },
      
      schema: {
        title: fields.slug({ 
          name: { 
            label: 'Title' } 
          }),

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
          label: 'Content', 
        }),
 

        // NEU: Feld zum Sortieren
        order: fields.number({
          label: 'Sortierreihenfolge',
          description: 'Eine Zahl zur Sortierung der Posts (niedrigere Zahl = früher angezeigt).',
          validation: {
            isRequired: false, // Optional, kann leer bleiben
            min: 0, // Optionale Mindestzahl
          },
        }),
      },
    }),


    posts2: collection({

      label: 'Posts2 ', //definiert den Namen der Sammlung
      slugField: 'title' ,
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      
      schema: {
        title: fields.slug({ 
          name: { 
            label: 'Title' } 
          }),

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
          label: 'Content', 
        }),


        // NEU: Feld zum Sortieren
        order: fields.number({
          label: 'Sortierreihenfolge',
          description: 'Eine Zahl zur Sortierung der Posts (niedrigere Zahl = früher angezeigt).',
          validation: {
            isRequired: false, // Optional, kann leer bleiben
            min: 0, // Optionale Mindestzahl
          },
        }),
      },
    }),
  },


});





