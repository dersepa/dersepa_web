if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,i)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return n;default:return e(c)}})).then(e=>{const c=i(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DSP.png",revision:"50b8ca9f62775d3625239702a7b14c34"},{url:"/DSP_logo.png",revision:"30cccf6115969908dc6c23214b32b29d"},{url:"/_next/static/chunks/11.fa28fb19fc37e8802f17.js",revision:"24a00346f01742f8e0c2aeb4a8241b06"},{url:"/_next/static/chunks/24.3a7afff6d67424097469.js",revision:"43661a6429fa99e982b999bd2635929b"},{url:"/_next/static/chunks/38112be4f4c59a99acb124a6907a0e4da96462a0.2be24798cb7771b95393.js",revision:"3e17cd8fdc2b2d58951e179c70aca260"},{url:"/_next/static/chunks/3bd44c644eec68cc3e17c5af768f0dbbb8f766aa.0c2b7e51665f41e91fd2.js",revision:"74352ca0561155badb1508fbd816688a"},{url:"/_next/static/chunks/6f556dbf5570644d38a1eb3e627f260f5c2a27b1.7907cd4757f80e0b9ae4.js",revision:"ecab192b3915dd023a6248a92f395a87"},{url:"/_next/static/chunks/860355349b88a303dfa1a8dcfaf0666cfabd7998.052df6c2e110ddd5eebd.js",revision:"e75e62d5f5a29f3eca0c7006b2246050"},{url:"/_next/static/chunks/af92a350f225f7f135aa73f04f0c596c3c574fc6.6c2427f5d322d134d5f0.js",revision:"0482c9a654d7422d24ef92cf0b5e3751"},{url:"/_next/static/chunks/b1c32743a15358ebde001130a8fecb4a98608a29.1422018994e07d84784d.js",revision:"990712ffdbd63b5a5c6fc4dfa936ab1f"},{url:"/_next/static/chunks/commons.b79e2ce50984a9714e56.js",revision:"cab6650ea37913d052865037df0f8553"},{url:"/_next/static/chunks/fab3363c02544f07bc694933a88b09fcfa2e4835.e6d5af604ec3fdca600a.js",revision:"ef0f981c833308ee2d592cdde5579507"},{url:"/_next/static/chunks/framework.08403fa7de596a960234.js",revision:"d296ae6b2d3e0ddc144949b47afc383b"},{url:"/_next/static/chunks/main-a688f6f81d2cde886156.js",revision:"f6ace28a8723ed8269c810351ebfb539"},{url:"/_next/static/chunks/pages/_app-fd9060dfb8b3ed75dde5.js",revision:"84e79c1cdf8435d601a4fa4a76ef9b9d"},{url:"/_next/static/chunks/pages/_error-8137b123bc48d6df44d2.js",revision:"34f36e6cfa2ae22dd3d8b1ea310d51cd"},{url:"/_next/static/chunks/pages/ad-hoc-d640b241cd8ec73c69ac.js",revision:"8ec2578c0ee1847b0d46cedc7fbb8a1e"},{url:"/_next/static/chunks/pages/ad-hoc/%5Bid%5D-4c378209f2803775ff8b.js",revision:"6f8189945a268802334bf5af36e7229b"},{url:"/_next/static/chunks/pages/contact-35bad23faa6487c998f7.js",revision:"ab860c1add4fbdc16eaced0316e3b11d"},{url:"/_next/static/chunks/pages/index-94516b1409412a90d9a9.js",revision:"bda2d8f7afd72c4cc583fbacac1c4692"},{url:"/_next/static/chunks/pages/projects-bafa2b019ddb18d842d2.js",revision:"55ebf9c1c82d698554af987618884130"},{url:"/_next/static/chunks/pages/projects/%5Bid%5D-aeeea4ccc940cd4e6a6e.js",revision:"55159a311d3ab37cbac411cf1faa4af0"},{url:"/_next/static/chunks/pages/sitemaps.xml-2df3ebca43f72d6085e4.js",revision:"dba79c264ad7cb5fbf663b9509e32d66"},{url:"/_next/static/chunks/pages/studio-7c99c877eed7e0f337e2.js",revision:"f0c9ad8b08cad49a9cf2ae8841c8bb5c"},{url:"/_next/static/chunks/polyfills-6684bc2cd23ec84a57e1.js",revision:"d4fec43d1b3ba0be62ca0df6e8b71e8d"},{url:"/_next/static/chunks/styles.4a3871c0f17a24f05486.js",revision:"81f8f1a73c825f16bb1fb89d251ddb45"},{url:"/_next/static/chunks/webpack-9424512913522e49e235.js",revision:"001e63862009c12cf7770faceaabac9d"},{url:"/_next/static/css/styles.7b08438e.chunk.css",revision:"8368d8f65ea5c93f7bd25791a453d815"},{url:"/_next/static/images/page_vito_05@2x-09f72caa8597809042fa4108b906c81e.png",revision:"4870408c48f3b832d765b22933c45e67"},{url:"/_next/static/images/project cover image-d17ff97e80176c3a965a934ae2c4402a.png",revision:"948e4fb4ecdd0291e5835b138920c1b0"},{url:"/_next/static/wJb9eW7E5eeQTZdIFF-nN/_buildManifest.js",revision:"615473acc22ab308a88a4fd20e339173"},{url:"/_next/static/wJb9eW7E5eeQTZdIFF-nN/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/apple-touch-icon.png",revision:"007bbd1ae35d442b98d83cc568309911"},{url:"/dersepa-icon_web_hi_res_114.png",revision:"d5ebf7eb06b4410db669780000bfac07"},{url:"/dersepa-icon_web_hi_res_120.png",revision:"89d3f55bfffbc5375211110d5538bdcc"},{url:"/dersepa-icon_web_hi_res_152.png",revision:"b348cfc92f50f1544531ef91ddba7af5"},{url:"/dersepa-icon_web_hi_res_180.png",revision:"4d3ed747a78bf887deb54b3b82477eff"},{url:"/dersepa-icon_web_hi_res_512.png",revision:"0fac4b8d084f5d779bb8510b14b81100"},{url:"/dersepa-icon_web_hi_res_57.png",revision:"82f84ccdfde693460a3a5e1c41e739dd"},{url:"/dersepa-icon_web_hi_res_60.png",revision:"342c453641b1640cf496f79ac289939b"},{url:"/dersepa-icon_web_hi_res_76.png",revision:"b7f552a843e56db952b02cd2df85820d"},{url:"/favicon.ico",revision:"96b656dc36873c96e03b7422a1e95cc1"},{url:"/favicon.jpeg",revision:"3ff9fbdfbb518c2593d07cac378f4d57"},{url:"/ic_launcher.png",revision:"5985bb33f40b3a89dc485fd0569154b7"},{url:"/manifest.json",revision:"1387d3c263ef14087eefb477c8bf49a9"},{url:"/mipmap-hdpi/dersepa-icon_ic_launcher.png",revision:"f4787506bb55a43dbf0d34c2bb09c75e"},{url:"/mipmap-mdpi/dersepa-icon_ic_launcher.png",revision:"68909c1c71b5109e21005696d5eb176d"},{url:"/mipmap-xhdpi/dersepa-icon_ic_launcher.png",revision:"1a249843c7ad7e8406dfd53ab00b0448"},{url:"/mipmap-xxhdpi/dersepa-icon_ic_launcher.png",revision:"121313a3f1e839d06524282b9ce71aa0"},{url:"/mipmap-xxxhdpi/dersepa-icon_ic_launcher.png",revision:"a6131ea687591799e8c2a9a967d29336"},{url:"/robots.txt",revision:"ea264dcb612d811dc5f5e6c662415ef0"},{url:"/service-worker.js",revision:"356ce8d6ae918160dbb208ba8888f4c0"},{url:"/sitemap.xml",revision:"fc7d11fcac62f5b7e3e60070abb3a693"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
