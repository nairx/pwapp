const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = ['/', '/index.html', '/style.css', '/app.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// self.addEventListener('push', event => {
//   const data = event.data?.json() || { title: "Default Title", body: "No content" };

//   event.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.body,
//       icon: '/icon-192.png'
//     })
//   );
// });