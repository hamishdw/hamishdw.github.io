// THANKS - Phil Nash https://github.com/philnash/philna.sh/blob/ba798a2d5d8364fc7c1dae1819cbd8ef103c8b67/sw.js#L50-L94

var version = "1.0.26";

var staticCacheName = "ver-"+version;
const staticAssets = [
  './',
  "./apple-icon-60x60.png",
  "./asset-manifest.json",
  "./icon.png",
  "./index.html", 
  "./manifest.json",
  "./theSW.js",
  './images/',
  './static/',
  './videos/video2.mp4',
  './videos/video3.mp4',
  './videos/video4.mp4',
  './videos/sustainability-big.mp4',
];

var pageCacheName = "index-"+version;
var offlinePages = ['./index.html'];

var currentCaches = [staticCacheName, pageCacheName];

self.addEventListener('install', function(event) {
  console.log('version',version);
  event.waitUntil(
    Promise.all([
      cacheAllIn(staticAssets, staticCacheName),
      cacheAllIn(offlinePages, pageCacheName)
    ]).then(function() {
      console.log('1',1);
      self.skipWaiting();
    }).catch(e => {
      console.log('e from cache all',e);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('version',version);
  event.waitUntil(
    deleteOldCaches(currentCaches).then(function() {
      console.log('2',2);
      self.clients.claim();
    })
  );
});



// self.addEventListener('fetch', function(event) {
  
//   headersLog = [];
//   for (var pair of event.request.headers.entries()) {
//     headersLog.push(pair[0]+ ': '+ pair[1])
//   }
  
// //  console.log('Handling fetch event for', event.request.url, JSON.stringify(headersLog));

//   if (event.request.headers.get('range')) {
//     var rangeHeader=event.request.headers.get('range');
//     var rangeMatch =rangeHeader.match(/^bytes\=(\d+)\-(\d+)?/)
//     var pos =Number(rangeMatch[1]);
//     var pos2=rangeMatch[2];
//     if (pos2) { pos2=Number(pos2); }
    
//     console.log('Range request for '+ event.request.url,'Range: '+rangeHeader, "Parsed as: "+pos+"-"+pos2);
//     event.respondWith(
//       caches.open(currentCaches.prefetch)
//       .then(function(cache) {
//         console.log('cache',cache);
//         return cache.match(event.request.url);
//       }).then(function(res) {
//         if (!res) {
//           console.log("Not found in cache - doing fetch")
//           return fetch(event.request)
//           .then(res => {
//             console.log("Fetch done - returning response ",res)
//             return res.arrayBuffer();
//           });
//         }
//         console.log("FOUND in cache - doing fetch")
//         return res.arrayBuffer();
//       }).then(function(ab) {
//         console.log("Response procssing")
//         let responseHeaders=  {
//           status: 206,
//           statusText: 'Partial Content',
//           headers: [
//             ['Content-Type', 'video/mp4'],
//             ['Content-Range', 'bytes ' + pos + '-' + 
//             (pos2||(ab.byteLength - 1)) + '/' + ab.byteLength]]
//         };
        
//         // console.log("Response: ",JSON.stringify(responseHeaders))
//         var abSliced={};
//         if (pos2>0){
//           abSliced=ab.slice(pos,pos2+1);
//         }else{
//           abSliced=ab.slice(pos);
//         }
        
//         // console.log("Response length: ",abSliced.byteLength)
//         return new Response(
//           abSliced,responseHeaders
//         );
//       }));
//   } else {
//     // console.log('Non-range request for', event.request.url);
//     event.respondWith(
//     // caches.match() will look for a cache entry in all of the caches available to the service worker.
//     // It's an alternative to first opening a specific named cache and then matching on that.
//     caches.match(event.request).then(function(response) {
//       if (response) {
//         // console.log('Found response in cache:', response);
//         return response;
//       }
//       // console.log('No response found in cache. About to fetch from network...');
//       // event.request will always have the proper mode set ('cors, 'no-cors', etc.) so we don't
//       // have to hardcode 'no-cors' like we do when fetch()ing in the install handler.
//       return fetch(event.request).then(function(response) {
//         // console.log('Response from network is:', response);

//         return response;
//       }).catch(function(error) {
//         // This catch() will handle exceptions thrown from the fetch() operation.
//         // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
//         // It will return a normal response object that has the appropriate error code set.
//         console.error('Fetching failed:', error);

//         throw error;
//       });
//     })
//     );
//   }
// });

self.addEventListener('fetch', function(event) {
  console.log('event',event);
  var url = new URL(event.request.url);

  console.log('event.request.headers.get(range)',event.request.headers.get('range'));
  console.log('url.pathname',url.pathname);
  if (url.pathname.match(/^\/((images|videos|test)\/|manifest.json$)/)) {
    console.log('ya it does');
    if (event.request.headers.get('range')) {
      event.respondWith(returnRangeRequest(event.request, staticCacheName));
    } else {
      event.respondWith(returnFromCacheOrFetch(event.request, staticCacheName));
    }
  }
  if (
    event.request.mode === 'navigate' ||
    event.request.headers.get('Accept').indexOf('text/html') !== -1
  ) {
    // cache then network
    event.respondWith(cacheThenNetwork(event.request, pageCacheName));
  }
});

function returnRangeRequest(request, cacheName) {
  console.log('request',request);
  return caches
    .open(cacheName)
    .then(function(cache) {
      return cache.match(request.url);
    })
    .then(function(res) {
      if (!res) {
        return fetch(request)
          .then(res => {
            const clonedRes = res.clone();
            return caches
              .open(cacheName)
              .then(cache => cache.put(request, clonedRes))
              .then(() => res);
          })
          .then(res => {
            return res.arrayBuffer();
          });
      }
      return res.arrayBuffer();
    })
    .then(function(arrayBuffer) {
      const bytes = /^bytes\=(\d+)\-(\d+)?$/g.exec(
        request.headers.get('range')
      );
        // console.log('request.headers.get("range")',request.headers.get("range"));

      if (bytes) {
        console.log('206',arrayBuffer);
        const start = Number(bytes[1]);
        const end = Number(bytes[2]) || arrayBuffer.byteLength - 1;
        return new Response(arrayBuffer.slice(start, end + 1), {
          status: 206,
          statusText: 'Partial Content',
          headers: [
            ['Content-Range', `bytes ${start}-${end}/${arrayBuffer.byteLength}`]
          ]
        });
      } else {
        console.log('416',arrayBuffer);
        return new Response(null, {
          status: 416,
          statusText: 'Range Not Satisfiable',
          headers: [['Content-Range', `*/${arrayBuffer.byteLength}`]]
        });
      }
    });
}

function cacheAllIn(paths, cacheName) {
  return caches.open(cacheName).then(function(cache) {
    console.log('cache',cache);
    return cache.addAll(paths);
  });
}

function deleteOldCaches(currentCaches) {
  console.log('currentCaches',currentCaches);
  return caches.keys().then(function(names) {
    console.log('names',names);
    return Promise.all(
      names
        .filter(function(name) {
          return currentCaches.indexOf(name) === -1;
        })
        .map(function(name) {
          return caches.delete(name);
        })
    );
  });
}

function openCacheAndMatchRequest(cacheName, request) {
  var cachePromise = caches.open(cacheName);
  var matchPromise = cachePromise.then(function(cache) {
    return cache.match(request);
  });
  return [cachePromise, matchPromise];
}

function cacheSuccessfulResponse(cache, request, response) {
  if (response.ok) {
    return cache.put(request, response.clone()).then(() => {
      return response;
    });
  } else {
    return response;
  }
}

function returnFromCacheOrFetch(request, cacheName) {
  console.log('4',4);
  return Promise.all(openCacheAndMatchRequest(cacheName, request)).then(
    function(responses) {
      var cache = responses[0];
      var cacheResponse = responses[1];
      // return the cached response if we have it, otherwise the result of the fetch.
      console.log('responses',responses);
      return (
        cacheResponse ||
        fetch(request).then(function(fetchResponse) {
          console.log('fetchResponse',fetchResponse);
          // Cache the updated file and then return the response
          cacheSuccessfulResponse(cache, request, fetchResponse);
          return fetchResponse;
        })
      );
    }
  );
}

function cacheThenNetwork(request, cacheName) {
  return Promise.all(openCacheAndMatchRequest(cacheName, request)).then(
    function(responses) {
      var cache = responses[0];
      var cacheResponse = responses[1];
      if (cacheResponse) {
        // If it's in the cache then start a fetch to update the cache, but
        // return the cached response
        fetch(request)
          .then(function(fetchResponse) {
            return cacheSuccessfulResponse(cache, request, fetchResponse);
          })
          .then(refresh)
          .catch(function(err) {
            console.log('err',err);
            // Offline/network failure, but nothing to worry about
          });
        return cacheResponse;
      } else {
        // If it's not in the cache then start a fetch
        return fetch(request)
          .then(function(fetchResponse) {
            cacheSuccessfulResponse(cache, request, fetchResponse);
            return fetchResponse;
          })
          .catch(e => {
            console.log('e',e);
            // Offline, so return the offline page.
            return caches.match('./index.html');
          });
      }
    }
  );
}

function refresh(response) {
  console.log('response',response);
  return self.clients.matchAll().then(function(clients) {
    console.log('clients',clients);
    clients.forEach(function(client) {
      var message = {
        type: 'refresh',
        url: response.url,
        eTag: response.headers.get('ETag')
      };
      client.postMessage(JSON.stringify(message));
    });
  });
}