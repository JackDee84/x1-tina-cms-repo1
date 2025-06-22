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
          label: 'Content', 
        }),

                // NEU: Hinzufügen des Feldes für lokale Videodateien
        localVideoFile: fields.pathReference({
          label: 'Lokale Videodatei',
          description: 'Wähle eine Videodatei aus dem `public/videos/` Ordner.',
          pattern: 'public/videos/**/*.{mp4,webm,ogg}', // Beschränkt die Auswahl auf gängige Videoformate im public/videos/ Ordner
          validation: { isRequired: false }, // Video ist optional
        }),
        // Optional: Ein Feld für den Alt-Text des lokalen Videos
        localVideoAlt: fields.text({
          label: 'Alt-Text für lokales Video',
          description: 'Alternativer Text für das lokal eingebettete Video.',
          validation: { isRequired: false },
        }),
      },
    }),
  },


});





