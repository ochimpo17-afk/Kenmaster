const CACHE_NAME = 'ai-assistant-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json'
];

// Installation : on met les fichiers en mémoire (cache)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Récupération : si on est hors ligne, on sert les fichiers mémorisés
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retourne le fichier en cache s'il existe, sinon tente internet
        return response || fetch(event.request);
      })
  );
});
