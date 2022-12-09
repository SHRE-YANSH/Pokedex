'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1280fb80f1aa7db28d1503028229dab5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/1.png": "9ba4d684e64c19af7c99148ac36af46b",
"assets/images/10.png": "799de73ed9a4d32ad6c08e7dc8fcfc50",
"assets/images/100.png": "028f6bd806ae14844a778a944c2435a8",
"assets/images/101.png": "c8abfb856da2fb4a3fd5f771018dac4c",
"assets/images/102.png": "cd4d13f4b37d9772a6f3f560cc574a5b",
"assets/images/103.png": "7b70047162d7031484cca88794d97195",
"assets/images/104.png": "799e0e87dae2c7a9985990b2424a5b82",
"assets/images/105.png": "f16f37aba434c99c46675e041e8447d0",
"assets/images/106.png": "0fabb4e0eb95aa1c9e129ef79e380e02",
"assets/images/107.png": "8fb72d6ec729d3029eddde4ed1a3b2c9",
"assets/images/108.png": "df1ee9be9e884858698fe55a297c3eb8",
"assets/images/109.png": "9773bf20bfa2d64e04b5367c4171f7fb",
"assets/images/11.png": "5bc90ea068bdd1162f0bf10a64326fe2",
"assets/images/110.png": "c30088fc328818b6888550be1f1fc36f",
"assets/images/111.png": "81dd809541ff661c5d75f928354d5382",
"assets/images/112.png": "58abe48f497dbff64dcdb39c2d42d207",
"assets/images/113.png": "e2e42b57979d1c86dd0deb9b4bf5ecd5",
"assets/images/114.png": "ce22d1c75349cc44fc8b6392f7b5d2b8",
"assets/images/115.png": "a33dca666e6aa7a1f4f3963b0097d461",
"assets/images/116.png": "a69ccfde7b7be6a0f85ae4cfb6a2af36",
"assets/images/117.png": "4e643b87406dd9264e7e0e21352abaf2",
"assets/images/118.png": "e7271a2a85d55b3e7aa46ed0a05a070f",
"assets/images/119.png": "a56ed3e40e6a592824f12b26dc844d55",
"assets/images/12.png": "eb6566a45da0d7770ac2e01025b657bd",
"assets/images/120.png": "bed11b75b421a7a4222770606a7acf1a",
"assets/images/121.png": "60bb4d45cf34b3be8b3e5f02a93720d4",
"assets/images/122.png": "ee3250d4532dbf48b84ac537a774b592",
"assets/images/123.png": "a1aca2ec6703b2dbedd4158c8d7f5931",
"assets/images/124.png": "a6b627161126139aa65b82f4d9eac8e8",
"assets/images/125.png": "c62be78fed3312f7adca8c79b0b6613f",
"assets/images/126.png": "f0509a75aa98389d22eb9011f54d9465",
"assets/images/127.png": "c93c75e1afa25fc5da06e767e7ca3720",
"assets/images/128.png": "837881a436eabbd8bdb308f825bd6df5",
"assets/images/129.png": "dbc8364834950405f52eb2cb24887023",
"assets/images/13.png": "a36e71da6ec97bf184a71883476152b0",
"assets/images/130.png": "55afe49b42cd5f780ba9cc707cde8264",
"assets/images/131.png": "f26ee6048a5f85e804cdc9c0a2e12e06",
"assets/images/132.png": "c42a37de31627293cc79ef00f34fffa5",
"assets/images/133.png": "c157545ab985be295c9566b427102231",
"assets/images/134.png": "57d04bfe5867fc0a8e2b55000e7e5ee4",
"assets/images/135.png": "e0737bed91857347aa412c9a0fde3a22",
"assets/images/136.png": "6a60d22641e7452be7bcc4461a3a6e5f",
"assets/images/137.png": "b4871fb5081babaaf682d548a7218065",
"assets/images/138.png": "bea5ba6c71117de971d9fad5a084aa7d",
"assets/images/139.png": "188ec81e1eda42517e1171f0136f9941",
"assets/images/14.png": "06d3055f204c544a79f3ce6e9103a4dc",
"assets/images/140.png": "c2fa95eb186566e2ee20c07bdf60a7a2",
"assets/images/141.png": "09084f207ff41bdfb5984fbd57752361",
"assets/images/142.png": "c647ffc193cae72d653464cf49400987",
"assets/images/143.png": "7c3efbfeea61505167b89cac5640a3c3",
"assets/images/144.png": "b02b6fb0a4e42619e6c7290d111a4cb9",
"assets/images/145.png": "39effe4839775eb7f586078a03bc2aa3",
"assets/images/146.png": "7e64338e570d1ee01674ec61d66b1663",
"assets/images/147.png": "c19cc8010f6d040d7fc4a076a9504733",
"assets/images/148.png": "bde38f317d9bd8512ef74d27629d0895",
"assets/images/149.png": "d6330a9d746c7a66f2eb27cec182ea43",
"assets/images/15.png": "7fc54db4c58e2e51f4999ce66c12448a",
"assets/images/150.png": "0c7aa137c662e4a53500eefd342f8968",
"assets/images/16.png": "15ca3e1cc06bcdbc380662f2432008ee",
"assets/images/17.png": "f1972cf117fbc7544f798e0fec399414",
"assets/images/18.png": "b33fccccc3c38657fbf66bda12a7ca90",
"assets/images/19.png": "d21d04d8488e11ee9a04a9d8b3e6573a",
"assets/images/2.png": "28cc8e884bbbf08ac3b44b4013a3d5db",
"assets/images/20.png": "5a34e7eeebc70b99bd4d5f7694edb452",
"assets/images/21.png": "f993baa8707a5cc7638c8434b3d8f9e4",
"assets/images/22.png": "2640107a291d1d0b1700a42273c467f8",
"assets/images/23.png": "bd66b4f62115f19d42302758677525b8",
"assets/images/24.png": "44ab0aecdfa80c2df6060ff82a6d067b",
"assets/images/25.png": "53dbfd304766b5858ee6e139646713c7",
"assets/images/26.png": "f3e7b764831b656de7bdb1be1445e766",
"assets/images/27.png": "2c4cebbd67505ea15634b3a81a291b1c",
"assets/images/28.png": "e4e761082a8714e94d3f077f68789712",
"assets/images/29.png": "52f72fbcca315b01a0a8ad447a45b719",
"assets/images/3.png": "8c37e2ae54a20df159b6706ef5663ff9",
"assets/images/30.png": "9445ac8fb36bd9ceea8359d9fe1f2a50",
"assets/images/31.png": "f1daccbfc13564b867137042466f8d49",
"assets/images/32.png": "f7af82c96ad43f4ea9dc0fedb945a6fd",
"assets/images/33.png": "8ed9ee720a67b8e8254662b0d6f2638a",
"assets/images/34.png": "9f683fa0a3c6bfd182cea5d44a142d20",
"assets/images/35.png": "619637a67aa9ed96927ac7f637e6da29",
"assets/images/36.png": "57be8deeb5c0ce45b69415b0a333f5aa",
"assets/images/37.png": "486cbfa6a683a20b33de46403b220d64",
"assets/images/38.png": "4e358ab74348b29e931c36756d9fe5c4",
"assets/images/39.png": "4f8fa587026cd74989c10629fdbb1cd1",
"assets/images/4.png": "9be8f2a81b006e2f8897f1889107d0f7",
"assets/images/40.png": "be829108ec350dca18453fec91f7f85f",
"assets/images/41.png": "04bad30757cc64a63f352077c1c38e98",
"assets/images/42.png": "eace8e96fc0edf4fe3f48e80b20e08e3",
"assets/images/43.png": "86123ef18e1f6c91fd15d92fe000e679",
"assets/images/44.png": "558b0d33be00f6fbd605191427d5b632",
"assets/images/45.png": "409c6f4963b8731bce34411d14595421",
"assets/images/46.png": "2a48e7e33f03146e7a4aef9884b63dcd",
"assets/images/47.png": "0874103da2816f92bdc29a4c36939b90",
"assets/images/48.png": "1ccce677bb4980ce2c3e48830120aa69",
"assets/images/49.png": "15dab15b58aa9922321379fa00bd2b3f",
"assets/images/5.png": "4e83c7dbbb912257f06b13cc1468f76f",
"assets/images/50.png": "b40049947859e633e0467c7c0cfe9f92",
"assets/images/51.png": "579886eaef7bfcfd21add70d3bd04bc2",
"assets/images/52.png": "9a42388be590ee046cc5cd0e57f9aa46",
"assets/images/53.png": "04b6fcae171eeddec445c20f30e51d05",
"assets/images/54.png": "7146ce8a6a916650e3a8b0e8d0e4b9c6",
"assets/images/55.png": "fade82558a72615ae6ff1b617fec91f5",
"assets/images/56.png": "42682daef44bc439c3464dec5eafa673",
"assets/images/57.png": "61e7ab0512af6a444c8413c20eccfc85",
"assets/images/58.png": "2b7a20d6b3d7e5688c6034e0401ead59",
"assets/images/59.png": "d0a8bc53afc614433949f7ee24f7cd00",
"assets/images/6.png": "2d32cf3c3042861de658c96052673408",
"assets/images/60.png": "aca3182e4777a94bba85e4a477dc79ad",
"assets/images/61.png": "46121bfde76640535a7ebc4b6d828815",
"assets/images/62.png": "4ca6f0c317d81a76599b884ee844a9f6",
"assets/images/63.png": "0e98362fd2b0a6bcd579b0918c160c68",
"assets/images/64.png": "fbc1ef4fed7b60445004d25f93ac5878",
"assets/images/65.png": "e1411a251f8b763c4161a924c79c026c",
"assets/images/66.png": "793aacf3d223746732373b145bb803e4",
"assets/images/67.png": "c561388bf7d7f6c4312a85edde46323b",
"assets/images/68.png": "77f1134854221805101f4caf12f81f62",
"assets/images/69.png": "953f6e72014ac744e54815991075b5e3",
"assets/images/7.png": "7b9ddf692c6df64d86bbe4e96ef46a83",
"assets/images/70.png": "8b080e5620605a08d19b3506c4121dff",
"assets/images/71.png": "3d883ce072ae49f3dcaad96ac1032fdb",
"assets/images/72.png": "ce9fd51f046cae707f95a2614f873028",
"assets/images/73.png": "5e3c3ef7382339f1e41a69513b41ba73",
"assets/images/74.png": "e29b28dba4748a0c4a448bf51bfdd91d",
"assets/images/75.png": "930d2143ea662bc6f8808fab76265d76",
"assets/images/76.png": "8663515eec70748e291f7f60a5f27fac",
"assets/images/77.png": "68f56a019e897f1514ca7ef17e191b38",
"assets/images/78.png": "333ba14a7324fe83e8db4d864f26a7c3",
"assets/images/79.png": "5bd4b88f3d184bfe81e793870f87b7a5",
"assets/images/8.png": "04cfac8634923b57a079cc4381035686",
"assets/images/80.png": "2c164a7f6efa6214e0ca2c9c06d32d6b",
"assets/images/81.png": "18e3d1efa4d60d6e853a7ccad9a6d5f5",
"assets/images/82.png": "69c97d23845bacd4df5585badf337718",
"assets/images/83.png": "092b05f340e628fad04495edd691923a",
"assets/images/84.png": "ca4490e0f73f2c5e011013ba82e5d998",
"assets/images/85.png": "102284a9735e8a04624565a6336aded1",
"assets/images/86.png": "f677130996bc20f061388f985cd72117",
"assets/images/87.png": "ed7636bcb364608428ef281aabc82f6b",
"assets/images/88.png": "07e555e711e2d26e9d55719c3b54b3a2",
"assets/images/89.png": "e5033856e70724dbda5a11303b908abd",
"assets/images/9.png": "14aba60b06ced6ea846ad63b6611f524",
"assets/images/90.png": "221c435f654b9580227ed8f1c1b89f6e",
"assets/images/91.png": "cbc8e5256e8b2205e1e8940c6c940cb1",
"assets/images/92.png": "0d5af8ce19ba2617f00148668746f6da",
"assets/images/93.png": "b93f8448e088707daaa6647976baa9c8",
"assets/images/94.png": "8a2c3ce0cfd5c38bb0ebd086f3a48741",
"assets/images/95.png": "781e3c879c64d8fcaa42254c14e90601",
"assets/images/96.png": "b0ea7aa75d764ac22d0f8d0acff33d1d",
"assets/images/97.png": "3dc48878b556cf8a1f882a4dbf4a2d26",
"assets/images/98.png": "4923be70a6a7a8a1fe0e45926e60157f",
"assets/images/99.png": "0797b23782d8c26eb1c642f2c1cdeb61",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "78a9f935cb08ad6c2e916f8a400363ea",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3906d2a5275ba2b534c4545135a40ab",
"/": "a3906d2a5275ba2b534c4545135a40ab",
"main.dart.js": "bf2d78379d2729959c97238d1ce81d9c",
"manifest.json": "b49eb4db89c2e203099fc09d30fb06f7",
"version.json": "0860c149387a12adb67531442b5eb75e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
