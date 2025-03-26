'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9855aca43f73714932875e5540bb94cd",
"assets/AssetManifest.bin.json": "5556ff1e8c1db7b954c34f18a6194af1",
"assets/AssetManifest.json": "e28f9801d645fdc941a60d371ab6cb62",
"assets/assets/icons/10_Connection%2520Lost.png": "b8f9fa9d002fe96fa3fb8cf5b2c84e09",
"assets/assets/icons/addexcelcolumnsimage.jpg": "d63b35f44c8bbfb893dbe0b0f9025edc",
"assets/assets/icons/Androidinstructions_manual.pdf": "ba4f01a6a547771799be328aefae7cfe",
"assets/assets/icons/callwarden.png": "73c2e76e7bb79d6817f09cf5d3831dc9",
"assets/assets/icons/deletecolumnsimage.jpg": "fae99dcabe4929990de48564c81415f8",
"assets/assets/icons/deletestudentsimage.png": "976336e1abdaf63a3b7134750d11cb17",
"assets/assets/icons/guardnetwork.jpg": "983d843b3a7d49745ad2cef8c4276eff",
"assets/assets/icons/homeicon.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/icons/inboxicon.png": "310511ece70c0f061f451963e3c223f8",
"assets/assets/icons/IOS_instructions_manual.pdf": "d2a3e30903e02e30d5ce83a1abaa9eac",
"assets/assets/icons/no-video.png": "e068d34a35165f1ce4b37d560b485e2c",
"assets/assets/icons/outpassifylogo2.png": "13e7a62d77558c9a3e85077752736b6e",
"assets/assets/icons/profileicon.png": "5700c04197ee9a4372a35ef16eb78f4e",
"assets/assets/icons/settingsicon.png": "f44035663044a853be570b1e75288f6b",
"assets/assets/icons/studentinfo.png": "b91eea18814a7af6eadf9e2d9d52028a",
"assets/assets/icons/studentnodata.json": "96c55de1ad61a2c1ddb8db8692959cea",
"assets/assets/icons/sucssesnotfication.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets/icons14ae1698": "e068d34a35165f1ce4b37d560b485e2c",
"assets/assets/icons186afc9e": "d2a3e30903e02e30d5ce83a1abaa9eac",
"assets/assets/icons2f103706": "d63b35f44c8bbfb893dbe0b0f9025edc",
"assets/assets/icons3792b425": "de8a9b4c22762d90b2a5ca296f704d07",
"assets/assets/icons3e827aaa": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets/icons4df464f5": "96c55de1ad61a2c1ddb8db8692959cea",
"assets/assets/icons60a5efdb": "fae99dcabe4929990de48564c81415f8",
"assets/assets/icons9ebe3fc4": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/iconse4e5060": "0090186a21052484d88e387faf6408a7",
"assets/assets/iconsec20a99e": "ffab3ceded82fd85103bc8df71e8e649",
"assets/assets/templates/deletestudentsdata_template.xlsx": "1b619998e0585f9400540b63dce280ca",
"assets/assets/templates/Uploadstudentsdata_template.xlsx": "605719f9a92d148d3cad765559494009",
"assets/assets%255Cicons%255C10_Connection%2520Lost.png": "b8f9fa9d002fe96fa3fb8cf5b2c84e09",
"assets/assets%255Cicons%255Caddexcelcolumnsimage.jpg": "d63b35f44c8bbfb893dbe0b0f9025edc",
"assets/assets%255Cicons%255Cdeletecolumnsimage.jpg": "fae99dcabe4929990de48564c81415f8",
"assets/assets%255Cicons%255Cdeletestudentsimage.png": "976336e1abdaf63a3b7134750d11cb17",
"assets/assets%255Cicons%255Coutpassifylogo2.png": "13e7a62d77558c9a3e85077752736b6e",
"assets/assets%255Cicons%255Csucssesnotfication.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets%255Ctemplates%255Cdeletestudentsdata_template.xlsx": "1b619998e0585f9400540b63dce280ca",
"assets/assets%255Ctemplates%255CUploadstudentsdata_template.xlsx": "605719f9a92d148d3cad765559494009",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0a37651d1a979dc9ac5c34aa60ff6678",
"assets/lib/images/defaultpic.png": "f9164b07de6a7533d70fee9ad2bd039a",
"assets/lib/images/Defaultwelcomer.jpg": "0a4a2ae7347053b466d5125c4b618617",
"assets/lib/images/logo3.png": "613b3de68e0cdfdbb22951d7b0d1b9ae",
"assets/lib/images/outpassifylogo.png": "733989a3ef2daeed6a339f89b5450a37",
"assets/lib/images/outpassifylogo2.png": "13e7a62d77558c9a3e85077752736b6e",
"assets/NOTICES": "eaece730314901a6ff3c32559f44afe2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8521152765ac463fb43cc71bb7a89163",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "94581cff593d55a4a4e2098246405c49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8694f0d2d1cd27e663c73f97029af6b4",
"/": "8694f0d2d1cd27e663c73f97029af6b4",
"main.dart.js": "733be443d544709cd028dc068627b8a6",
"manifest.json": "031d8b2dd487e66c6b458852fb5d3dc4",
"outpassifylogo2.png": "13e7a62d77558c9a3e85077752736b6e",
"splash/img/dark-1x.png": "377de0a5d76c0651c1c6bc70d45d0421",
"splash/img/dark-2x.png": "d69e32c2d05fb0f395bfd8547ac7f691",
"splash/img/dark-3x.png": "8e447a5c6a051c32a08e3a1185761e96",
"splash/img/dark-4x.png": "c8ed2239951b8ac33e3ae8fb78128b2b",
"splash/img/light-1x.png": "377de0a5d76c0651c1c6bc70d45d0421",
"splash/img/light-2x.png": "d69e32c2d05fb0f395bfd8547ac7f691",
"splash/img/light-3x.png": "8e447a5c6a051c32a08e3a1185761e96",
"splash/img/light-4x.png": "c8ed2239951b8ac33e3ae8fb78128b2b",
"version.json": "3614788b2d78a6355ce365ec44fa1549"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
