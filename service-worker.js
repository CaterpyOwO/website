self.addEventListener('install', (event) => {
    console.log('installed!', 'install', event);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('activated', 'activate', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});