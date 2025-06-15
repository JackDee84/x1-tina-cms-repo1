// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), keystatic(), markdoc()],
  output: 'static',
});