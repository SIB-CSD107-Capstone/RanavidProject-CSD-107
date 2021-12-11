/* eslint-disable no-restricted-globals */
import { registerRoute } from 'workbox-routing';
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// This clientsClaim() should be at the top level
// of your service worker, not inside of, e.g.,
// an event handler.
clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://apicovid19indonesia-v2.vercel.app'
                  || url.pathname === '/api/indonesia',
  new StaleWhileRevalidate({
    cacheName: 'staticCovid-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === '/api/get-provinces',
  new StaleWhileRevalidate({
    cacheName: 'RSBedProv-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === `/api/get-cities?provinceid=${provId}`,
  new StaleWhileRevalidate({
    cacheName: 'RSBedCity-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === `/api/get-hospitals?provinceid=${provId}&cityid=${cityId}&type=${type}`,
  new StaleWhileRevalidate({
    cacheName: 'RSIDHosp-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === `/api/get-bed-detail?hospitalid=${hospitalId}&type=${type}`,
  new StaleWhileRevalidate({
    cacheName: 'RSBedType-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === `/api/get-bed-detail?hospitalid=${hospitalId}&type=${type}`,
  new StaleWhileRevalidate({
    cacheName: 'RSBedType-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://rs-bed-covid-api.vercel.app'
                  || url.pathname === `/api/get-hospital-map?hospitalid=${hospitalId}`,
  new StaleWhileRevalidate({
    cacheName: 'RSBedMap-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://61b090523c954f001722a461.mockapi.io'
                  || url.pathname === '/blogs',
  new StaleWhileRevalidate({
    cacheName: 'blogs-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://61b090523c954f001722a461.mockapi.io'
                  || url.pathname === '/vlog',
  new StaleWhileRevalidate({
    cacheName: 'vlogs-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://61b090523c954f001722a461.mockapi.io'
                  || url.pathname === `/blogs/${id}`,
  new StaleWhileRevalidate({
    cacheName: 'detailBlog-api-response',
    plugin: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 3,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'script'
                  || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);
