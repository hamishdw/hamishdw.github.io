const filesToCache = [
  '/',
  './videos/video2.mp4',
  './videos/video3.mp4',
  './videos/video4.mp4',
  './videos/sustainability-big.mp4'
];

const staticCacheName = 'pages-cache-v2';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  console.log('cacheWhitelist',cacheWhitelist);
  console.log('event',event);

  event.waitUntil(
    caches.keys().then(cacheNames => {
      console.log('cacheNames',cacheNames);

      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('cacheName',cacheName);

          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
      .then(response => {
        if (response.status === 404) {
          console.error('404');
          return;
          // return caches.match('pages/404.html');
        }
        return caches.open(staticCacheName)
        .then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });
    }).catch(error => {
      console.log('Error, ', error);
      // return caches.match('pages/offline.html');
      return;
    })
  );
});