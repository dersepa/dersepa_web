if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,i)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return n;default:return e(c)}})).then(e=>{const c=i(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DSP.png",revision:"50b8ca9f62775d3625239702a7b14c34"},{url:"/DSP_logo.png",revision:"30cccf6115969908dc6c23214b32b29d"},{url:"/_next/static/MAkgEYBE6Wq1U50up5w1w/_buildManifest.js",revision:"4eefe8141387c631fb528499ddcda7c6"},{url:"/_next/static/MAkgEYBE6Wq1U50up5w1w/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/10.1254fdb03de6ef76e6d2.js",revision:"a199bef24bdf18dc4d7b0aaac71ec585"},{url:"/_next/static/chunks/23.60b48fd7d24328c4a825.js",revision:"624eaae44fe00faad3130c725d1a3403"},{url:"/_next/static/chunks/38112be4f4c59a99acb124a6907a0e4da96462a0.2be24798cb7771b95393.js",revision:"3e17cd8fdc2b2d58951e179c70aca260"},{url:"/_next/static/chunks/3bd44c644eec68cc3e17c5af768f0dbbb8f766aa.611c834f9f52e0e892ae.js",revision:"3151875fb0b6cc20ef574ec0e1fee1d8"},{url:"/_next/static/chunks/6f556dbf5570644d38a1eb3e627f260f5c2a27b1.7907cd4757f80e0b9ae4.js",revision:"ecab192b3915dd023a6248a92f395a87"},{url:"/_next/static/chunks/860355349b88a303dfa1a8dcfaf0666cfabd7998.7f0124d8210b994379c8.js",revision:"70dba3edfeb20687ca12beb6d675ab94"},{url:"/_next/static/chunks/af92a350f225f7f135aa73f04f0c596c3c574fc6.957ca87344ab52c5e957.js",revision:"78a5cfe214d5209c3c26a6ca8e95954a"},{url:"/_next/static/chunks/b1c32743a15358ebde001130a8fecb4a98608a29.556a43dfad9838442aaa.js",revision:"561cab53a8b1279bcf06dd031275c4d9"},{url:"/_next/static/chunks/commons.bb4e35065e9a72e3d6b4.js",revision:"a890b848f4c61eb2aa789fe2b754f5d3"},{url:"/_next/static/chunks/framework.08403fa7de596a960234.js",revision:"d296ae6b2d3e0ddc144949b47afc383b"},{url:"/_next/static/chunks/main-963b03581ee9dba6a23d.js",revision:"bd941bb06209dccd3e0979be1ae12141"},{url:"/_next/static/chunks/pages/_app-09cec37492ab25c94848.js",revision:"a15a5de4b88dc4eadfb883f7cc47e7bf"},{url:"/_next/static/chunks/pages/_error-c01019df02c1b076e08c.js",revision:"121973b82cd183f26c6ed72825c62d6a"},{url:"/_next/static/chunks/pages/ad-hoc-3e1124d3afecadc7a7b4.js",revision:"dc83b8f7508a0a68baa0167a7002bc92"},{url:"/_next/static/chunks/pages/ad-hoc/%5Bid%5D-b7b6ba63aece77a9a0b3.js",revision:"8926de787e3eba458ca8e80e5d98e5ef"},{url:"/_next/static/chunks/pages/contact-f991db3bacbdf070ceb7.js",revision:"6496eb9012ed1980d2a94f96d6836b39"},{url:"/_next/static/chunks/pages/index-1e48bc709bd76fb92fbb.js",revision:"c27fbdf1126a1986b84ccc269583979a"},{url:"/_next/static/chunks/pages/projects-7cf7dd1b15d83cf39e15.js",revision:"02328427d6bcafa3f207ead19d6f80cb"},{url:"/_next/static/chunks/pages/projects/%5Bid%5D-a4dd99c14ba6eb3f7908.js",revision:"512f3edc634acfecc4153d471311a60e"},{url:"/_next/static/chunks/pages/sitemaps.xml-a5e80858ab3d9c27ae1f.js",revision:"13be027faea3301f4b67c8caf4bf722d"},{url:"/_next/static/chunks/pages/studio-381ac30cd4350f1432e0.js",revision:"df4feae07e5cd807a97ac4245caaeb77"},{url:"/_next/static/chunks/polyfills-e60ce7399b5224051296.js",revision:"873cd89822e3d4ecf1d51481267c4144"},{url:"/_next/static/chunks/styles.ad1f9a0d10d5889e1e00.js",revision:"61064eb9404906c7a565db41a5750520"},{url:"/_next/static/chunks/webpack-42836c3abe1f20fdb184.js",revision:"8266ec0c2b983726465d0053cf2a8f0c"},{url:"/_next/static/css/styles.bbec2faa.chunk.css",revision:"b7bd62a0a09d0259f64ffed1a07f17b0"},{url:"/_next/static/images/page_vito_05@2x-09f72caa8597809042fa4108b906c81e.png",revision:"4870408c48f3b832d765b22933c45e67"},{url:"/_next/static/images/project cover image-d17ff97e80176c3a965a934ae2c4402a.png",revision:"948e4fb4ecdd0291e5835b138920c1b0"},{url:"/apple-touch-icon.png",revision:"007bbd1ae35d442b98d83cc568309911"},{url:"/dersepa-icon_web_hi_res_114.png",revision:"d5ebf7eb06b4410db669780000bfac07"},{url:"/dersepa-icon_web_hi_res_120.png",revision:"89d3f55bfffbc5375211110d5538bdcc"},{url:"/dersepa-icon_web_hi_res_152.png",revision:"b348cfc92f50f1544531ef91ddba7af5"},{url:"/dersepa-icon_web_hi_res_180.png",revision:"4d3ed747a78bf887deb54b3b82477eff"},{url:"/dersepa-icon_web_hi_res_512.png",revision:"0fac4b8d084f5d779bb8510b14b81100"},{url:"/dersepa-icon_web_hi_res_57.png",revision:"82f84ccdfde693460a3a5e1c41e739dd"},{url:"/dersepa-icon_web_hi_res_60.png",revision:"342c453641b1640cf496f79ac289939b"},{url:"/dersepa-icon_web_hi_res_76.png",revision:"b7f552a843e56db952b02cd2df85820d"},{url:"/favicon.ico",revision:"96b656dc36873c96e03b7422a1e95cc1"},{url:"/favicon.jpeg",revision:"3ff9fbdfbb518c2593d07cac378f4d57"},{url:"/ic_launcher.png",revision:"5985bb33f40b3a89dc485fd0569154b7"},{url:"/manifest.json",revision:"1387d3c263ef14087eefb477c8bf49a9"},{url:"/mipmap-hdpi/dersepa-icon_ic_launcher.png",revision:"f4787506bb55a43dbf0d34c2bb09c75e"},{url:"/mipmap-mdpi/dersepa-icon_ic_launcher.png",revision:"68909c1c71b5109e21005696d5eb176d"},{url:"/mipmap-xhdpi/dersepa-icon_ic_launcher.png",revision:"1a249843c7ad7e8406dfd53ab00b0448"},{url:"/mipmap-xxhdpi/dersepa-icon_ic_launcher.png",revision:"121313a3f1e839d06524282b9ce71aa0"},{url:"/mipmap-xxxhdpi/dersepa-icon_ic_launcher.png",revision:"a6131ea687591799e8c2a9a967d29336"},{url:"/robots.txt",revision:"ea264dcb612d811dc5f5e6c662415ef0"},{url:"/service-worker.js",revision:"356ce8d6ae918160dbb208ba8888f4c0"},{url:"/sitemap.xml",revision:"fc7d11fcac62f5b7e3e60070abb3a693"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
