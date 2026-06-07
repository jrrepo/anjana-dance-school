// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace this URL if the final production domain changes.
  site: 'https://www.anjanadanceschool.com',

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
