if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let t = {}
    const r = (e) => c(e, n),
      d = { module: { uri: n }, exports: t, require: r }
    s[n] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (i(...e), t))
  }
}
define(['./workbox-dae32412'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '3203b5ae799ebdc4f1ecc0f1934b5c59',
        },
        {
          url: '/_next/static/Gc4gPDZgp8XWryItdXA22/_buildManifest.js',
          revision: '64c0e1293a66bfa7bee73628f8da8390',
        },
        {
          url: '/_next/static/Gc4gPDZgp8XWryItdXA22/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/14b82aa5-049661512ccacc4e.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/15be5694-73b05333bb0bf0c3.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/2719-328f72940d0ebc86.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/281f4f84-4308ee0bd31437e0.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/39515de1-7f7859eca4704029.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/3975-dcd24ce453694965.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/412c10f0-e1fd39eb1bb7910d.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/4492-98331af8e344497a.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/5408-61d8e2de3a403143.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/5422-0e169dfaf3f28472.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/552c1bf5-d89b221b621bd5ce.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/5778-613fd4e8ef562831.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/5823-45aab69ba3280438.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/6362-ad48caba2e3e401a.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/672-b5df3641def51ec2.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/7325-6cc13f0ec973fefc.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/760ccd9a-d1b3551f96e64969.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/8292-ffee96060d33bf60.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/8341-d95309a5386f2d85.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/8960-8de684f4b8423923.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/92a6efbd-c39bb2bc2b667a04.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/9391-59f75c6082372574.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/a20c2d1d-303912be6c98b839.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/a4938abf-96f5b7d50a64711c.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-9941ebddb00589c5.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-babf1c47e1a502c5.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-69de5ae6a958ea12.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-892365b0f900c06f.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-7f48ce2459f165d1.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-20646be0e0f0b41c.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-1fb45349f0fa08fe.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/complain/page-6bff880a493b7725.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-0d6d8d468440dde7.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-2c3cca7358885bad.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-94e970e6568ca942.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/layout-3c5c8e8c49a2f7cf.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-72e70adc403ca1b5.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-516966481e0515b5.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-fd9d329deb089b43.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-a2ed8daa6d099348.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-5c94665fe4660cc0.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-76356fc20b9a5f5b.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-474dce684d1c81f4.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-2713d7bf881d6d48.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-f79ae6a273f51bab.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-191a94b9b39f14d0.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/app/review/%5BtradeId%5D/page-45a8dbdce76c363b.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/b81fb708-ff660351f6394f60.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/d30eb90b-5249302fa9d60c61.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/d8314949-cc43085acf52f80a.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/dfefeca3-520394af60ccf8cd.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/framework-da6a81dd5b579b67.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/main-57e6fbc26779ed10.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/main-app-392da0852cd1955e.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/pages/_app-b26e549256c7f3c1.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/pages/_error-3c136c7e51d8bb7e.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-436fc1ae6394191a.js',
          revision: 'Gc4gPDZgp8XWryItdXA22',
        },
        {
          url: '/_next/static/css/126acce611cc7b99.css',
          revision: '126acce611cc7b99',
        },
        {
          url: '/_next/static/css/2ebb2afbe58660e0.css',
          revision: '2ebb2afbe58660e0',
        },
        {
          url: '/_next/static/css/decc0242dc16d7ba.css',
          revision: 'decc0242dc16d7ba',
        },
        {
          url: '/_next/static/media/30cd8f99d32fa6e8-s.woff2',
          revision: 'e5c1b944d9e3380a062bf911e26728a3',
        },
        {
          url: '/_next/static/media/36afab82570d46f2-s.p.woff2',
          revision: '89e9fd21dd55cebd3f5ee1dfcb5fdee0',
        },
        {
          url: '/_next/static/media/6b5949cea416cbec-s.woff2',
          revision: '49ae8484eae36f970a54ea3f90bfef3d',
        },
        {
          url: '/_next/static/media/830087706657ee0c-s.woff2',
          revision: '2ac088578e0e51e2fb14bc66a702b901',
        },
        {
          url: '/_next/static/media/8888a3826f4a3af4-s.p.woff2',
          revision: '792477d09826b11d1e5a611162c9797a',
        },
        {
          url: '/_next/static/media/b957ea75a84b6ea7-s.p.woff2',
          revision: '0bd523f6049956faaf43c254a719d06a',
        },
        {
          url: '/_next/static/media/banner1.db720661.png',
          revision: '430c09f2dd9ca02e43e816f515d369aa',
        },
        {
          url: '/_next/static/media/banner2.3d0a24ea.png',
          revision: '8973b1f7757dc6bb527818175f9c2da4',
        },
        {
          url: '/_next/static/media/c4f6d62acfbd94a2-s.woff2',
          revision: 'fbaccf16b5420fbc46534b4bcab47719',
        },
        {
          url: '/_next/static/media/c89e2f129f61ebdb-s.woff2',
          revision: '52b9b67fb64ff755e0fbb360c2933042',
        },
        {
          url: '/_next/static/media/f5767adec246cdc1-s.woff2',
          revision: '7a1c6501aa2b3327c1cf556362a851cb',
        },
        {
          url: '/_next/static/media/profile.c296fd4c.png',
          revision: '9a00dfb6f7aa161041e9b4447c1ecd8c',
        },
        {
          url: '/fonts/Dovemayo_gothic.ttf',
          revision: 'ae2fcd5356e023ffa2edab25d2cdbe5e',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '540c61504afa7b5c3ca2a0ef645c397b',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: '4d4322e1b4a25bf30324286e58d787d9',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: '617d8bd990f88fb485fd51fdf47e9df6',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: 'fdaf66fd440fae1ae17d888faa45ef63',
        },
        {
          url: '/images/appleLoginBtn.png',
          revision: '4dc526a7755cd41d3c63cbb887ae5b7b',
        },
        {
          url: '/images/googleLoginBtn.png',
          revision: '004c126129038e7c8308b62e04927b5b',
        },
        {
          url: '/images/kakaoLoginBtn.png',
          revision: '6945794b1e2006420e38ee44870732e4',
        },
        {
          url: '/images/naverLoginBtn.png',
          revision: 'b28219c051ab9f96a5d26d3910c0051f',
        },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        {
          url: '/svgs/category/animation.svg',
          revision: 'd196e707c58b5f3b4eaa1ea357ff6c05',
        },
        {
          url: '/svgs/category/animationColor.svg',
          revision: '3a5b38e0526ae43d4109d9b4f91f73fa',
        },
        {
          url: '/svgs/category/animationGo.svg',
          revision: '39655a0c73b3e6c04d20e9bf5ae4cbe7',
        },
        {
          url: '/svgs/category/baseball.svg',
          revision: '77d22eb8c090b046b9d34d15c96404c9',
        },
        {
          url: '/svgs/category/baseballColor.svg',
          revision: '4a675f44a3b72b7d2f19c083a331189b',
        },
        {
          url: '/svgs/category/baseballGo.svg',
          revision: '39655a0c73b3e6c04d20e9bf5ae4cbe7',
        },
        {
          url: '/svgs/category/kpop.svg',
          revision: '67bd6980359405d2b4cd77b63a47d783',
        },
        {
          url: '/svgs/category/kpopColor.svg',
          revision: '173cae603de7818469ef61bbbef54870',
        },
        {
          url: '/svgs/category/kpopGo.svg',
          revision: '6c1cb811c73e1bc82af15578daef676b',
        },
        {
          url: '/svgs/duck/basicProfileDuck.svg',
          revision: 'ae329e36e47315ed2b95c4cb3e71b9da',
        },
        {
          url: '/svgs/duck/duckOne.svg',
          revision: 'f7b18503e6e9be79ae9205bc68cec62e',
        },
        {
          url: '/svgs/duck/idol-duck.svg',
          revision: '8b8a6ee21143dcb4ea9a35ff2e5ffcff',
        },
        {
          url: '/svgs/duck/mainDuckPoint.svg',
          revision: 'a13da7286ed2ea3586d656c80d89fc98',
        },
        {
          url: '/svgs/duck/nonProfileDuck.svg',
          revision: '0dc4b02b42063333978871032e8dd544',
        },
        {
          url: '/svgs/duck/prostrateDuck.svg',
          revision: '2a1abc02a0eb724859d1b8e44bd4876b',
        },
        {
          url: '/svgs/duck/sampleDuck.svg',
          revision: '0c7f46f0618381f9738f2775291e24c3',
        },
        {
          url: '/svgs/header/below_arrow.svg',
          revision: '55403349689124071b6fab02150cbf23',
        },
        {
          url: '/svgs/header/logo.svg',
          revision: '5c5fe31577aaa1f2728c436aa9defaa4',
        },
        {
          url: '/svgs/header/notification.svg',
          revision: '0f61ec67e9e3d065a79d89d3f2c02c1f',
        },
        {
          url: '/svgs/header/search.svg',
          revision: '1ae46a78234101d43bbe6ca09f3622a8',
        },
        {
          url: '/svgs/icon/backBtn.svg',
          revision: 'd1996754fa7b7d2e9f73ff900c3a9c20',
        },
        {
          url: '/svgs/icon/likeFalse.svg',
          revision: 'd9c5283ee2039de2b6bb072831634432',
        },
        {
          url: '/svgs/icon/likeTrue.svg',
          revision: '15160f62f33edf67d50b454a97e24292',
        },
        {
          url: '/svgs/icon/profileImgBtn.svg',
          revision: '2b237a4743ce9e2744a62cdcb6b703ce',
        },
        {
          url: '/svgs/icon/remove.svg',
          revision: '89188ba23c2befa084042da91ba426ad',
        },
        {
          url: '/svgs/icon/verificationTime.svg',
          revision: '25d9ae27a83fdebc3daa34e0214eeaec',
        },
        {
          url: '/svgs/intro/introDuck.svg',
          revision: '09b29698a74e6419bc62e5286931406b',
        },
        {
          url: '/svgs/intro/title.svg',
          revision: '328dd9f1f89b2bfcb95585f8ae4ef91d',
        },
        {
          url: '/svgs/loginContour.svg',
          revision: 'c432350a4ef66d3e98fbba096a2b42c0',
        },
        {
          url: '/svgs/loginDuck.svg',
          revision: '7813d75c5cb6d10707fabb273c18d5c1',
        },
        {
          url: '/svgs/nav/chat.svg',
          revision: 'd16a6aba731e85de6654e6b293e878c8',
        },
        {
          url: '/svgs/nav/fullinquiry.svg',
          revision: 'cd0942eab725096ee5d2fd6be673463b',
        },
        {
          url: '/svgs/nav/home.svg',
          revision: 'ce4c35e44044f917574181fae0e6f768',
        },
        {
          url: '/svgs/nav/like.svg',
          revision: '7408b690587bad1b0e72da5998972867',
        },
        {
          url: '/svgs/nav/mypage.svg',
          revision: 'e4d7f5db16b42798aa128779a88db87c',
        },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})
