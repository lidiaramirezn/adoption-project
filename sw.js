/* const staticCacheName = 'cache-v1';
const assets = [
  '/offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
  
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachesRes => {
      if(cachesRes) {
        return cachesRes;
      } else if(!navigator.onLine) {
        return caches.match('offline.html');
      } else {
        return fetch(event.request)
      }
    })
  )
}) */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { NetworkOnly } = workbox.strategies;
const { setDefaultHandler } = workbox.routing;
const  { offlineFallback, staticResourceCache, imageCache  } = workbox.recipes;
const { precacheAndRoute } = workbox.precaching;

setDefaultHandler(new NetworkOnly());
offlineFallback();
staticResourceCache();

precacheAndRoute([
  { url: '/index.html', revision: true },
  { url: '/src/assets/logo.svg', revision: true },
  { url: '/src/assets/gato.jpg', revision: true }
]);

imageCache();