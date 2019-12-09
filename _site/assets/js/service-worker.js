const LATEST_CACHE_ID = 'v31';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(LATEST_CACHE_ID).then(function(cache) {
      return cache.addAll([
         '/assets',
         '/assets/css',
         '/assets/css/style.css',
         '/assets/fonts',
         '/assets/fonts/NotoSansOldItalic-Regular.eot',
         '/assets/fonts/NotoSansOldItalic-Regular.otf',
         '/assets/fonts/NotoSansOldItalic-Regular.svg',
         '/assets/fonts/NotoSansOldItalic-Regular.ttf',
         '/assets/fonts/NotoSansOldItalic-Regular.woff',
         '/assets/img',
         '/assets/img/favicons',
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
         '/assets/img/aesos.png',
         '/assets/img/antifa.png',
         '/assets/img/badetus-1.png',
         '/assets/img/badetus-2.png',
         '/assets/img/belin.png',
         '/assets/img/body-background.jpg',
         '/assets/img/brogdos.png',
         '/assets/img/carvonia.png',
         '/assets/img/header-back.jpg',
         '/assets/img/latobius.png',
         '/assets/img/minima-social-icons.svg',
         '/assets/img/noreia.png',
         '/assets/img/norici-wolf.png',
         '/assets/img/norici.png',
         '/assets/img/noricum.png',
         '/assets/img/savos.png',
         '/assets/img/saxanus.png',
         '/assets/img/sedatos.png',
         '/assets/img/sinatis.png',
         '/assets/img/smertrios.png',
         '/assets/img/title.png',
         '/assets/img/touta.png',
         '/assets/img/veica.png',
         '/assets/js',
         '/assets/js/jquery.js',
         '/assets/js/main.js',
         '/assets/js/service-worker.js',
         '/assets/docs',
         '/assets/docs/die-in-noricum-belegten.pdf',
         '/assets/fonts.css',
         '/index.html',
         '/articles',
         '/articles/noreia.html',
         '/articles/belinos.html',
         '/articles/latobius.html',
         '/articles/litalus.html',
         '/articles/oinouiros.html',
         '/articles/sedati.html',
         '/articles/sedatos.html',
         '/articles/sinatis.html',
         '/articles/smertrios.html',
         '/articles/carvonia.html',
         '/articles/norici.html',
         '/articles/comtegisom.html',
         '/articles/aesos.html',
         '/articles/acaunos_saxanus.html',
         '/articles/brogdos.html',
         '/articles/veica.html',
         '/articles/savos.html',
         '/articles/badetus.html',
         '/reading.html',
         '/CNAME',
         '/favicon.ico',
         '/generate-worker.rb',
         '/manifest.json',
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