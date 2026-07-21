self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("planner-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js",
        "./manifest.json"
      ]);
    })
  );
});