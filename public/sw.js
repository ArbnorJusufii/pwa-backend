if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const c=e=>i(e,o),d={module:{uri:o},exports:r,require:c};a[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2c652c6786e12a26c89dcef9b9d95378"},{url:"/_next/static/chunks/146-23e901f97e7dc78d.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/23-22adf840f7312afe.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/app/_not-found/page-6efd1afb5db955c5.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/app/layout-ff694d86cc74af38.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/app/page-1b8acd7daf4b1669.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/fd9d1056-23c910a82af77574.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/main-app-0c9fec99e6da1d11.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/main-b19eb92a2b8094fc.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0cfbe6ed1abfcc84.js",revision:"qorM2je2Cekmh-do-Kb1Z"},{url:"/_next/static/css/11de82f43005734b.css",revision:"11de82f43005734b"},{url:"/_next/static/css/812975bf1659f8de.css",revision:"812975bf1659f8de"},{url:"/_next/static/css/95c0710d26eda415.css",revision:"95c0710d26eda415"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/Inter-italic.var.958a0b97.woff2",revision:"958a0b97"},{url:"/_next/static/media/Inter-roman.var.b2129c00.woff2",revision:"b2129c00"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_next/static/qorM2je2Cekmh-do-Kb1Z/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/qorM2je2Cekmh-do-Kb1Z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android/android-launchericon-144-144.png",revision:"715ed618eb5bc28401af14fb4fbb4953"},{url:"/android/android-launchericon-192-192.png",revision:"653f5682ef87312d1b92dc73cfb0b868"},{url:"/android/android-launchericon-48-48.png",revision:"2f4508ce50dde9f0784d6a35376c7d30"},{url:"/android/android-launchericon-512-512.png",revision:"3ac52d3389e741181abca2244c80c1e2"},{url:"/android/android-launchericon-72-72.png",revision:"4acb017b878ed4221012b423806f75bc"},{url:"/android/android-launchericon-96-96.png",revision:"29d3e94ef6cc93e095eaf7369ce79143"},{url:"/icon-192x192.png",revision:"337bb1f10a833e372b4f53d2c7f85434"},{url:"/icon-256x256.png",revision:"4c0bebe2dc7c260b1bdf8b748305badf"},{url:"/icon-384x384.png",revision:"c8be17123e3f6ff2bbef2f974f10fac5"},{url:"/icon-512x512.png",revision:"f2abe7806c7831eda52215dc274debd5"},{url:"/icons.json",revision:"5dbbc3fe59816e65ba28e355a58ea45c"},{url:"/images/banner.jpg",revision:"b271ed5d8fc57a3261ff0a5d5678621b"},{url:"/images/maskable_icon_x192.png",revision:"8da59bb530f3da3ab4ae57497aaebd7d"},{url:"/ios/100.png",revision:"937dc7aced54c2e2edf49e652116d207"},{url:"/ios/1024.png",revision:"d7948adf20470ffd9a2b4f70ecfcfab2"},{url:"/ios/114.png",revision:"d2ba1360688d8596d652afc690d6408f"},{url:"/ios/120.png",revision:"ef9b39198877598a699360c352b2a5b2"},{url:"/ios/128.png",revision:"bdfd6f97d1c8fb09e76203c5c0cb585e"},{url:"/ios/144.png",revision:"715ed618eb5bc28401af14fb4fbb4953"},{url:"/ios/152.png",revision:"efc7af888cfb728c490c82b5ffd95ae5"},{url:"/ios/16.png",revision:"5719bffa3b8bcb52d22f7fd7170dd67e"},{url:"/ios/167.png",revision:"4a0e5022a8987815dedbace6d29d085b"},{url:"/ios/180.png",revision:"992793f92e388dbb33b2313478673eb1"},{url:"/ios/192.png",revision:"653f5682ef87312d1b92dc73cfb0b868"},{url:"/ios/20.png",revision:"9a65b9cd01366ebd0fb3589c633aa99b"},{url:"/ios/256.png",revision:"cbd2ac389af1355cc4d65473e38204fe"},{url:"/ios/29.png",revision:"9d176ab9f9b415cc76d73f8f94c52e3d"},{url:"/ios/32.png",revision:"687abd4bb1153698341b2c777aec5ba3"},{url:"/ios/40.png",revision:"3b4dbcfca95713632892e5c415ff0b92"},{url:"/ios/50.png",revision:"7f6ce7cae92ef1f4b9c8ae0f3f7b9e25"},{url:"/ios/512.png",revision:"3ac52d3389e741181abca2244c80c1e2"},{url:"/ios/57.png",revision:"0c730e20a9dfbb86cffd772fd2be8978"},{url:"/ios/58.png",revision:"5ca590be56cd3183ba21ab7ffa8d0108"},{url:"/ios/60.png",revision:"95049e6d56b103caa43bdc0d432d7e7f"},{url:"/ios/64.png",revision:"ccc1b0d818b8ec31c0264293243df092"},{url:"/ios/72.png",revision:"4acb017b878ed4221012b423806f75bc"},{url:"/ios/76.png",revision:"b42fc1d9208ebc6eab220051b5ccf858"},{url:"/ios/80.png",revision:"deec9da59fba56343334ab46358f3d5d"},{url:"/ios/87.png",revision:"1ec26080a70ac70a345ea735a90eb6e4"},{url:"/manifest.json",revision:"0cea933c7e62be0a44e122bba69e1704"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/notification-sw.js",revision:"aaecab8b8b73da97bba66b6a10e8bb33"},{url:"/service-worker.js",revision:"92cf1f36636c08448bf1d5603774bf40"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"6ac0802aaeade1e0032cdc5b29f4121f"},{url:"/windows11/LargeTile.scale-125.png",revision:"ad258e8f4c55ce2765c8a03e526f4914"},{url:"/windows11/LargeTile.scale-150.png",revision:"84c25d7a76cf385028be8e2d17795244"},{url:"/windows11/LargeTile.scale-200.png",revision:"315b784307af69d6bab52cde27e2abf8"},{url:"/windows11/LargeTile.scale-400.png",revision:"236a5290f914f9d6feacc7e9435c5d5a"},{url:"/windows11/SmallTile.scale-100.png",revision:"a2e85cbc8270aa9c7d8eb12b8a3c6bca"},{url:"/windows11/SmallTile.scale-125.png",revision:"dcd8e2b3ca08b4724d73184120ede60c"},{url:"/windows11/SmallTile.scale-150.png",revision:"972b192e806c5779357fa85b8c7488ac"},{url:"/windows11/SmallTile.scale-200.png",revision:"5cf6d6b067e913e662d2db08cad7fc2a"},{url:"/windows11/SmallTile.scale-400.png",revision:"e967c65a6ba5662f450c34607eb79554"},{url:"/windows11/SplashScreen.scale-100.png",revision:"afa22bad184698a4092cf0f7b8096da7"},{url:"/windows11/SplashScreen.scale-125.png",revision:"a60e9e3f30542a6a8695b716a5427ea2"},{url:"/windows11/SplashScreen.scale-150.png",revision:"58b4b557a8d78b41700476074d91a8a5"},{url:"/windows11/SplashScreen.scale-200.png",revision:"e43299ee1617351f953eca681f5003c9"},{url:"/windows11/SplashScreen.scale-400.png",revision:"75c48ba96631ce214981be64ca0e3152"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"10e3103295bd557805b8306ddf76ec3a"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"a56d33106b7dd58c881439f0a5301011"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"3e48003830c2f8425e1081b60ab14ede"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"5138316af2bcc0c4985176a195c022ad"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"44ed5f0c79fd1ad3690e28add17f94ff"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"99e87237a4122e5e2a6f9ed6bdc1a2f2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"89009a9fc4405d5a336797fdf7e929c3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"b3e017e918e69db23617e60097c1466a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"7fda3afb2eb92c1a7eb2656c6c2de7cc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"f7fccc3dd9d88d08493f42db5fcda3a8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"9f2ad21a2e5089ef2eff1db5f426512b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"ef3c4a4609374b75743f46f844263ad0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"b2ceb1a16974cbe1c3e2f616a0842783"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"d3cf36f41938a2b60bccc16872125b6e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"0a9db20b9b43a3dd74e26fcedd17ae5b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"ae1a7a320686f4e5c7accca9d370c9e6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"c8d4a9f6d297aeefe02eaac2289ea225"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"8e5746af162152d7509113a60f2484dd"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e6b2cc8d5bab27dd211920c6732c5ccc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"fb7b17745e36447885e2721ec6a94cde"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"99e87237a4122e5e2a6f9ed6bdc1a2f2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"89009a9fc4405d5a336797fdf7e929c3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"b3e017e918e69db23617e60097c1466a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"7fda3afb2eb92c1a7eb2656c6c2de7cc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"f7fccc3dd9d88d08493f42db5fcda3a8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"9f2ad21a2e5089ef2eff1db5f426512b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"ef3c4a4609374b75743f46f844263ad0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"b2ceb1a16974cbe1c3e2f616a0842783"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"d3cf36f41938a2b60bccc16872125b6e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"0a9db20b9b43a3dd74e26fcedd17ae5b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"ae1a7a320686f4e5c7accca9d370c9e6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"c8d4a9f6d297aeefe02eaac2289ea225"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"8e5746af162152d7509113a60f2484dd"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e6b2cc8d5bab27dd211920c6732c5ccc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"fb7b17745e36447885e2721ec6a94cde"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"d3cf36f41938a2b60bccc16872125b6e"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"3de2c1af300c5f4ee65bd9056e27b8d4"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"daff7d61aa2394060b7139093990c442"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"368eb6996d172fddfd530fff49eca69b"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"5e58086dcf530cd051c46fdb58589ebf"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"99e87237a4122e5e2a6f9ed6bdc1a2f2"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"89009a9fc4405d5a336797fdf7e929c3"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"b3e017e918e69db23617e60097c1466a"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"7fda3afb2eb92c1a7eb2656c6c2de7cc"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"f7fccc3dd9d88d08493f42db5fcda3a8"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"9f2ad21a2e5089ef2eff1db5f426512b"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"ef3c4a4609374b75743f46f844263ad0"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"b2ceb1a16974cbe1c3e2f616a0842783"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"d3cf36f41938a2b60bccc16872125b6e"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"0a9db20b9b43a3dd74e26fcedd17ae5b"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"ae1a7a320686f4e5c7accca9d370c9e6"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"c8d4a9f6d297aeefe02eaac2289ea225"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"8e5746af162152d7509113a60f2484dd"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e6b2cc8d5bab27dd211920c6732c5ccc"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"fb7b17745e36447885e2721ec6a94cde"},{url:"/windows11/StoreLogo.scale-100.png",revision:"7f6ce7cae92ef1f4b9c8ae0f3f7b9e25"},{url:"/windows11/StoreLogo.scale-125.png",revision:"d1e568dacbf3fbde0b87fe411e297e14"},{url:"/windows11/StoreLogo.scale-150.png",revision:"c2cc49a4935d03322b9a0f1390e3945a"},{url:"/windows11/StoreLogo.scale-200.png",revision:"937dc7aced54c2e2edf49e652116d207"},{url:"/windows11/StoreLogo.scale-400.png",revision:"84efc24cd239ab92c9847420b407ad51"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"e8329d8cc5b48e04a33550dc5badc797"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"fb623341e4698b498aa321e3d744bf50"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"e46998e96fd5964dc3d3f865e5329530"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"afa22bad184698a4092cf0f7b8096da7"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"e43299ee1617351f953eca681f5003c9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
