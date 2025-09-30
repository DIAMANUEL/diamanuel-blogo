const CACHE_NAME = 'diamanuel-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/manifest.json',
    '/offline.html',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Instalar SW y cachear recursos locales
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.allSettled(
                ASSETS_TO_CACHE.map(url => cache.add(url))
            )
        )
    );
    self.skipWaiting();
});

// Activar SW
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// Interceptar fetch
self.addEventListener('fetch', event => {
    // Ignorar recursos externos (como Heap)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Navegación (modo usuario)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match('/offline.html'))
        );
        return;
    }

    // Recursos estáticos locales
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});
