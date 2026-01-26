const CACHE_NAME = 'palavra-secreta-v1.1'; // Incrementado a versão do cache
const urlsToCache = [
    '/', // A raiz do seu site (index.html)
    '/index.html',
    '/style.css',
    '/script.js',
    '/logo.png', // Certifique-se de que este arquivo existe e está na raiz
    '/fundo.png', // Certifique-se de que este arquivo existe e está na raiz
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Cacheando arquivos essenciais.');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('[Service Worker] Falha ao cachear arquivos:', error);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - retorna a resposta do cache
                if (response) {
                    console.log(`[Service Worker] Servindo do cache: ${event.request.url}`);
                    return response;
                }
                // Não há nada no cache - faz a requisição à rede
                console.log(`[Service Worker] Buscando da rede: ${event.request.url}`);
                return fetch(event.request);
            })
            .catch((error) => {
                console.error('[Service Worker] Falha ao buscar recurso:', event.request.url, error);
                // Pode adicionar uma página de fallback offline aqui
                // return caches.match('/offline.html'); 
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Ativando...');
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Exclui caches antigos
                        console.log(`[Service Worker] Deletando cache antigo: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Garante que o service worker assume o controle da página imediatamente
    return self.clients.claim();
});
