// Name your cache — bump the version when you want to invalidate old caches
const CACHE_NAME = "ianbaker-cache-v1";

// Which files to pre-cache (optional for Astro, but useful for offline)
const PRECACHE_URLS = [
  "/", // your only page
];

// Install: pre-cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }),
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
  self.clients.claim();
});

// Fetch: network-first for HTML, cache-first for everything else
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle http(s) requests. Requests from browser extensions
  // (chrome-extension://, moz-extension://, etc.) can't be stored in
  // the Cache API and aren't ours to intercept anyway.
  if (!request.url.startsWith("http")) {
    return;
  }

  // HTML pages → network-first (ensures fresh content)
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/")));
    return;
  }

  // Everything else → cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      return (
        cached ||
        fetch(request).then((response) => {
          // Only cache GET requests
          if (request.method === "GET") {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, cloned);
            });
          }
          return response;
        })
      );
    }),
  );
});
