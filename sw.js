const CACHE = "vintana-v6";
const ASSETS = ["./", "./index.html", "./payload-v2.js", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: "reload" }))))
    .then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = req.destination === "font" || /fonts\.(googleapis|gstatic)\.com/.test(url.hostname);
  const isDoc = !isFont && (req.mode === "navigate" || req.destination === "document"
    || url.pathname.endsWith(".html") || url.pathname.endsWith(".js"));
  if (isDoc) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(h => h || caches.match("./index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(h => h || fetch(req).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
    return res;
  })));
});
