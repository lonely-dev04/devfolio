'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7a4b26b080e7d9364d778423d58ee311",
".git/config": "d09f93640c3326ba91ab54ef451c6886",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5de41077086da78240f25107d7e57476",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b9a32312e2bbc3fab1329abacd6dad0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2884f52d1ef47a2450659b5fb6485d1",
".git/logs/refs/heads/gh-pages": "4b3ecfd12f0b7b2f2a2c18f3929ac1e3",
".git/logs/refs/heads/master": "012b5f73211caf50dd2cc04fbc91f495",
".git/logs/refs/remotes/origin/gh-pages": "aaf1390b21340576e917e7cc65d42094",
".git/objects/06/a6f00aebf50fcfc3978406a3f6a393c3c188c9": "52776254a54c81f79664807d63128463",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/d84153c1a74510717bce50f94feda2392f6377": "740c48da52ebf8f94417c278a13681d7",
".git/objects/0e/1c25418ee39d3a25dac75f1565dbcf12148d3c": "f0e8c4287a21f9bb5f3ad7cb8f19ec5d",
".git/objects/11/de23e06de0c917ff9c44b086fd4012856eb482": "9e53b7e57b0c52dfffe7b685cab12e85",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/4c68c5ec565a9c1971f19e5f6eeb11b090ef98": "6b1eac6d4bbe3e24d47728b5183824aa",
".git/objects/1d/a2e7d8f9c5504b097cd2bf11fb2e2ad63060a6": "26a18bb3ca242cb26a48a75c053bcb44",
".git/objects/1d/b20613df0a4664a7dd575dba6f0dd6abd05019": "df6cde92a03766c2e21d6ad0c2e18a5f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/c59adeded04e334be409239d87d59508dd5961": "1400323a5757b1ef951f290f339df862",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/a1ad45099960e43e1a9865d85fe0c8a15e606c": "396c6a8f50632000e70bed40ee47f874",
".git/objects/29/753d12f1f407de9307661e93de5c244c0ec4bd": "14cb6e96ee7bfe1659ad7f51a7eb76ec",
".git/objects/2b/291a11232a58f155ab20e81b584579725c6232": "c9b1d4d13cab417614aed72a67b3ca58",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/32/596eebb90da4596808bc496f9f70aed8a3e621": "0ede417cabfb7ec41637bd6193dd7e61",
".git/objects/33/3d3a49f18894e4c940583025e1c45677bc9b03": "f600cd1bf562831eaeba31bdab2573b1",
".git/objects/33/6dbb63baa08cbb94ea868940f9c373b0be807d": "8b33aaeaf935ca76344b3e279bb4efd3",
".git/objects/35/ad9dc49b04cb4813fcb00a16354d90fb44ac86": "c00a49a8f50bc8ddf15efe3736ec8e73",
".git/objects/39/92bf884c4b5b886d563cb14e9fce48eaaf3c11": "f9e6e00abf982cdfe837d9a73370e47d",
".git/objects/39/eaefaff8aac76d1cfeb4344bff4692dde81cb3": "32efd84ff21518aa7633d7d9e283d600",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/9aed97ebf3941f60642f96a62263fcbfa5b89f": "ba22fc26fd84b34f39fa8469b043d5aa",
".git/objects/51/76dc5c3ed7923e27fca931b1dde91323db293d": "ac9535cdc4a326002ce06a0cbda7fa66",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/dcf6a206380825da1d5c34d2cd3232ce4930d6": "f344b58b0db7466118ed57bd177a6e2e",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/63/267a34cac62faadf4a82b4776cbaa61f982be4": "03177795f99e056dab0d0660684cabb9",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/6b/8c1c055f8079ea7a6357d3f4cda7aa0b291815": "8a45990d7c8b53e450d7e87f9e117640",
".git/objects/6b/e77afb0b902114989e1f8edc2fe3e0ebadeffe": "db75030a00165c021d624ec306966979",
".git/objects/6d/4b6977b9a7a4fca66cbb28c136db07222480eb": "663e1a204a780d78d4473d64f3f3893d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/4c7ce8e3e95af5b4c1b03f50c8eb107c7d1ab6": "c54e0372ba182e82641e6ae20ef7685b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/79/a5b0cb98597a4dc07ed0e510204b5f9d562534": "7e44ef4cfd000e974f8a46bcbc8babd0",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/85/9874c8f845410c09920b344647ba51a0604a1d": "d0729f135275fbf8e7a95a7d1a37ce21",
".git/objects/85/e96ca50ef24fc03ee64d634e93b29c9a0ae830": "51070d8fbd95a3e6297c39a5fdda589b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/7d409218eeaf466f24b8316dffb9170eccbf88": "2d0da03a0c6a1d057053e92f3a1aac59",
".git/objects/90/e5bb06631f4ed1faa6be651ddcb7ea9b37d008": "f21fbb822da2d1d528dff786cb79cfab",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/94/3f8fe30bffce8b7dc0f2a24377ae471f334ec3": "9f63a29bc8404f9e84ecd1d25c02b4b2",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/d2b3bc6ec9b375e06d9a0b64daa5d0f88121bd": "de4f055123f89115ca3773ef02b1d91b",
".git/objects/9f/4a262a500d3e5e519b28858d3f04d384b0c715": "50aaeeaad54714e05c0831770794bc4d",
".git/objects/9f/6501c0875134d85d5488b733a698ab9e51390d": "5d7939d94df95d0fa2baf8b86709da93",
".git/objects/a1/7b7db41b318dbfc359b9df6abfe088eef22d02": "95b7232bcff9fcb331e257ac80f52e00",
".git/objects/a6/bc147ac6da33a3ce22d85fdb127a4a4d05b84f": "ed9dd6f0cd2597ac899cd755588fb47a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/6c452a979d827aa15907355f9228e4178f7552": "4625d9ce51f76ac037d555f551123b44",
".git/objects/bf/77d2a7bb98f1b48b8691e8ab516469d4c9214f": "94315c7b0923329ed2e14863233f9eeb",
".git/objects/c0/d72394cf204623808167fb348b51bc9f54264c": "cb2c91fa3bc27918ac02d4a69d7ed3ac",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/e34b4137ca64d9c289a47bf9f6983405e0b2df": "8262caff7870af9aef4feb88589e1464",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/0224c8f41fa5e0f61623f6c66a8dbea209c174": "da4a8211fe0d031ecd0bad927b2504d9",
".git/objects/da/d7c8224b435b9618f48b6416a313902b967161": "6cb3284e25f177f1af48178a68c4bd69",
".git/objects/de/db5a41c19feda865db1cd89148cfa9a2a616cc": "b0e7eaef0cd0ef01d04e3ff2d5e8e379",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/3dd7441e7d0c40964e3c6133856638cea55b30": "28c573d127971e3475761cef88ee1193",
".git/objects/e9/5f80ec954d4cf56e8a7c640cdb17da83ee1435": "de94832f71e21a0925f322b07835d666",
".git/objects/eb/7c63c9b3326fdd7881808ae8af58bdccbf9131": "1db5e1fe52fe68c80556ec277929827d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/40e2825e40eb77ef8eb8e30286644e44a301b4": "825dea1e800a9f8ff818921d85a013fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f9/81e72f9ac4f28215737754668532e91587d54e": "888e16eee95206c49f7ac415821db338",
".git/objects/ff/42e430e121a1cbda1673e02430878253efe528": "6b26c0bc6595e1d6a14a16b5238ee98c",
".git/ORIG_HEAD": "7807d83fcf6eacb73f833a7456d09860",
".git/refs/heads/gh-pages": "d014e81bdecd15238abbaffd687646bc",
".git/refs/heads/master": "bfbfdad428219fd0090f9337201cc8bd",
".git/refs/remotes/origin/gh-pages": "d014e81bdecd15238abbaffd687646bc",
"assets/AssetManifest.bin": "71d5d6982867a159d2c865c77a0211d7",
"assets/AssetManifest.bin.json": "738da82f276470b3e03addddf78ebb4e",
"assets/AssetManifest.json": "6924a6a841e3faaaff861b0eef370908",
"assets/assets/github.png": "cdcd535edcb35537014c737658523696",
"assets/assets/google.png": "5b90c761572761b2991a1b3417582f20",
"assets/assets/hackerrank.png": "37c570b4470ce9e6571deef6dfc8337c",
"assets/assets/image.png": "a158020bd7867652a5cf808f09ff17fe",
"assets/assets/leetcode.png": "0cdfaa0e999c24eb3cf49d7eda242406",
"assets/assets/line.png": "7aa0718dc0e515ee70aa61077921280d",
"assets/assets/line_horz.png": "c4a3dffbcf7ed83e707283755215d560",
"assets/assets/linkedin.png": "18d67db2c894c430d5a8cf873284f262",
"assets/assets/map.png": "672ae93c0255e4bb000138a5c9e438b2",
"assets/assets/projects/abs.png": "855ea1fb9dccb5872b7769a48db20ec8",
"assets/assets/projects/cag.png": "e7689da3da8684f95b5c31ab1e754994",
"assets/assets/projects/lms.png": "16ff5dbacbd6786a0babae3927f66a7b",
"assets/assets/projects/studev.png": "0e4218fff32d4d0322f99e0781271e6a",
"assets/assets/projects/tamilulavan.png": "79f53d69fa295664376f308df57f01a7",
"assets/assets/qwiklabs.png": "d7e23cdc3b6c9a0f1de56449249bcaa2",
"assets/assets/wakatime.svg": "71fcc14a8f9a6bb418f49f4f59830352",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c56a0acfa051a21e5658375b3de371fe",
"assets/NOTICES": "4c82346564872889d341e24925237fd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b2a142bbaf71d4df83cb03923b2abfb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "80b3f7f6c85eadcc6d27bbdd184599c8",
"assets/packages/metaballs/lib/metaballs_shader.frag": "2db6b9a1394da174e429ce75f1ac0773",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7da60e87df3deca742b4531d6209a035",
"/": "7da60e87df3deca742b4531d6209a035",
"main.dart.js": "b5667fab017bc0ee135635967d9ac9d3",
"manifest.json": "86c469483ce506d38ad10865764a04f3",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
