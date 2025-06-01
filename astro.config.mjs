import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    fonts: [
      {
        name: 'Lato',
        provider: fontProviders.google(),
        weights: ['400', '700'],
        cssVariable: '--font-lato',
        display: 'swap',
      }
    ]
  }
});