/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // skip the request. if request is not made with http protocol
  if (!(event.request.url.indexOf('http') === 0)) return;
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
