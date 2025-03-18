const CACHE_NAME = "journal-pwa-v1";
const urlsToCache = [
  "/1st%20app/",                     
  "/1st%20app/index.html",            
  "/1st%20app/style.css",
  "/1st%20app/script.js",
  "/1st%20app/manifest.json",
  "/1st%20app/icons/icon-192x192.png",
  "/1st%20app/icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});
