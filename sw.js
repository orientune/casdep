// Depo Tarama - minimal service worker
// Bu dosya, tarayıcının uygulamayı tam ekran/bağımsız modda açabilmesi için gereklidir.

const CACHE_NAME = 'depo-tarama-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // basit gec-gec: ag varsa agdan, yoksa hata versin (cevrimdisi destegi gerekmiyor)
  event.respondWith(
    fetch(event.request).catch(() => new Response('Çevrimdışısınız', { status: 503 }))
  );
});
