self.addEventListener( "install", oninstall );
self.addEventListener( "fetch", onfetch );

function oninstall( e ) {
  caches.open( "timeroffline" ).then(function( cache ) {
    return cache.addAll([
      "./",
      "./index.html",
      "./src/style.css",
      "./build/bundle.js"
    ]);
  });
}

function onfetch( e ) {
  e.respondWith(
    caches.open("timeroffline").then(function( cache ) {
      return cache.match( e.request ).then(function( response ) {
        return response || fetch( e.request );
      });
    })
  );
}
