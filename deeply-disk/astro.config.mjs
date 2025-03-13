// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kingstom0113.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'always'
});
