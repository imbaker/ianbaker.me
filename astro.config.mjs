import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ianbaker.me',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://ianbaker.me/alive/' // Exclude healthcheck pages
    }),
    tailwind()],
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