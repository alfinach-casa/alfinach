// Service Worker mínimo — necesario para que el navegador permita instalar la PWA.
// No cachea contenido de forma agresiva: deja pasar todas las peticiones a la red.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // No-op: simplemente deja pasar la petición tal cual a la red.
});
