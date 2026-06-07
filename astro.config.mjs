// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update this when ADS moves from the free Pages domain to a custom domain.
  site: 'https://anjanadance.pages.dev',

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
