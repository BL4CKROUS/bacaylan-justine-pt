const cacheName = 'random-joke-app-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(assets))
    );
});

// Fetch the assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
