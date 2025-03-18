const CACHE_NAME = 'journal-cache-v2';  // Version bump to clear old cache
const urlsToCache = [
    '/1st-app/',                         
    '/1st-app/index.html',
    '/1st-app/main.css',
    '/1st-app/script.js',
    '/1st-app/manifest.json',
    '/1st-app/icons/icon-192x192.png',
    '/1st-app/icons/icon-512x512.png'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => caches.match('/1st-app/index.html'))  // Fallback to index.html on errors
    );
});
