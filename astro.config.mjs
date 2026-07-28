import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ianbaker.me",

  output: "static",

  integrations: [
    sitemap({
      filter: (page) => page !== "https://ianbaker.me/alive/", // Exclude healthcheck page from sitemap
    }),
  ],

  fonts: [
    {
      name: "Lato",
      provider: fontProviders.google(),
      weights: ["400", "700"],
      cssVariable: "--font-lato",
      display: "swap",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
