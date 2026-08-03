import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Stamps a unique cache version into public/service-worker.js on every
// build, so the service worker's cache is busted automatically on each
// deploy without needing to hand-edit a version string.
function injectServiceWorkerVersion() {
  return {
    name: "inject-sw-version",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const cacheVersion =
          process.env.COMMIT_REF?.slice(0, 7) ||
          new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "");

        const swPath = fileURLToPath(new URL("service-worker.js", dir));
        const content = readFileSync(swPath, "utf-8").replaceAll(
          "__CACHE_VERSION__",
          cacheVersion,
        );
        writeFileSync(swPath, content);

        console.log(`service-worker.js cache version → ${cacheVersion}`);
      },
    },
  };
}

export default defineConfig({
  site: "https://ianbaker.me",

  output: "static",

  integrations: [
    sitemap({
      filter: (page) => page !== "https://ianbaker.me/alive/", // Exclude healthcheck page from sitemap
    }),
    injectServiceWorkerVersion(),
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
    build: { assetsInlineLimit: 0 }, // Disable inlining of assets to avoid caching issues with service worker
    plugins: [tailwindcss()],
  },
});
