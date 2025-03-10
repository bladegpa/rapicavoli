const CACHE_NAME = 'gatto-clicker-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/icon-192x192.png',
  '/icon-512x512.png',
  'https://i.postimg.cc/xdv7cSKF/gato-felice.png',
  'https://i.postimg.cc/pTPSj1CV/gatto-triste.png',
  'https://cdn.pixabay.com/download/audio/2021/10/30/audio_16ca07053c.mp3?filename=cat-meow-14536.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});