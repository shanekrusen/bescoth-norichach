const LATEST_CACHE_ID = 'v8';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(LATEST_CACHE_ID).then(function(cache) {
      return cache.addAll([
        '/',
        '/assets/css/style.css',
        '/assets/img/antifa.png',
        '/assets/img/belin.png',
        '/assets/img/body-background.jpg',
        '/assets/img/carvonia.png',
        '/assets/img/favicons/browserconfig.xml',
        '/assets/img/favicons/favicon-120.png',
        '/assets/img/favicons/favicon-128.png',
        '/assets/img/favicons/favicon-144.png',
        '/assets/img/favicons/favicon-152.png',
        '/assets/img/favicons/favicon-167.png',
        '/assets/img/favicons/favicon-180.png',
        '/assets/img/favicons/favicon-192.png',
        '/assets/img/favicons/favicon-195.png',
        '/assets/img/favicons/favicon-196.png',
        '/assets/img/favicons/favicon-228.png',
        '/assets/img/favicons/favicon-32.png',
        '/assets/img/favicons/favicon-57.png',
        '/assets/img/favicons/favicon-76.png',
        '/assets/img/favicons/favicon-96.png',
        '/assets/img/header-back.jpg',
        '/assets/img/latobius.png',
        '/assets/img/noreia.png',
        '/assets/img/norici.png',
        '/assets/img/sedatos.png',
        '/assets/img/sinatis.png',
        '/assets/img/smertrios.png',
        '/assets/img/title.png',
        '/assets/img/touta.png',
        '/assets/js/jquery.js',
        '/assets/js/main.js',
        '/assets/fonts.css',
        '/index.html',
        '/articles/noreia.html',
        '/articles/norici.html',
        '/articles/belinos.html',
        '/articles/latobius.html',
        '/articles/litalus.html',
        '/articles/oinouiros.html',
        '/articles/sedati.html',
        '/articles/sedatos.html',
        '/articles/sinatis.html',
        '/articles/smertrios.html',
        '/articles/carvonia.html',
        '/reading.html',
        '/CNAME',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) { 
      Promise.all(keyList.map(key => {
        if (key !== LATEST_CACHE_ID) {
          return caches.delete(key);
        }
      }))
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
