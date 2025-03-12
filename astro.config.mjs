// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kingstom0113.github.io',
  base: '/PORTFOLIO',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_assets'
  }
});
