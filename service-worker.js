self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("offline-gps-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});
