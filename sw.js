let cacheName = 'v1';

let cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js'
];

// Installation of the service worker (sw)
self.addEventListener('install', (event) => {
  //Perform sw install steps
  console.log('ServiceWorker installed');

  event.waitUntil(
    caches.open(cacheName)
      .then( (cache) => {
      console.log('sw caching files');
      return cache.addAll(cacheFiles);
    })
  );
});

/**
 * Determine if the sw has been updated.
 * If so, remove the old cache name and update with
 * new one from the new sw.
 */
self.addEventListener('activate', (event) => {
  console.log('ServiceWorker activated');

  event.waitUntil(
    caches.keys().then( (cacheNames) => {
      return Promise.all(cacheNames.map( (thisCacheName) => {
        if (thisCacheName !== cacheName) {
          console.log('Removing cache files from ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
})

/**
 * Determines if any of the fetch events is in the cache,
 * if it is return the cached value.  If not held in cache,
 * make a network request for it.
 */
self.addEventListener('fetch', (event) => {
  console.log('ServiceWorker fetching', event.request.url);

  event.respondWith(
    caches.match(event.request)
      .then( (response) => {
        return response || fetch (event.request);
      })
  );
});
