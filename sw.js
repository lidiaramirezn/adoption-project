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
const { setDefaultHandler, registerRoute } = workbox.routing;
const  { offlineFallback, staticResourceCache, imageCache  } = workbox.recipes;
const { precacheAndRoute, cleanupOutdatedCaches } = workbox.precaching;

setDefaultHandler(new NetworkOnly());
offlineFallback();
cleanupOutdatedCaches();
staticResourceCache();

precacheAndRoute([
  { url: '/index.html', revision: '20231119'}
]);

imageCache();