if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[c]) return
    let t = {}
    const o = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: o }
    s[c] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (n(...e), t))
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
          revision: 'e498f1778d02951275f320aa5caa763d',
        },
        {
          url: '/_next/static/3T6p0jTOPCHPZWLoEVzEC/_buildManifest.js',
          revision: '655d57313567e1d64901c1e6e84fb319',
        },
        {
          url: '/_next/static/3T6p0jTOPCHPZWLoEVzEC/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/14b82aa5-1290bfad276ece94.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/15be5694-18dee7084f42ecd6.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/2596-1b857c7a70700001.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/2618-68b2b8eaa5e4c6b4.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/2719-a923d2a25d79689e.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/281f4f84-d70051805a6e530f.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/39515de1-2c34a93cab43b7ee.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/412c10f0-29fad4f9c091a8c0.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/4236-532dc9b0e5937a8e.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/5089-c3f741c8eea66c5e.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/6362-f762326405c715c6.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/7325-178dda27a2837986.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/760ccd9a-1afb8fb61720f815.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/7736-8571a2f563b2bcd5.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/8711-4d39c1e884c24431.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/8960-c9b4a8bdf0460b58.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/a20c2d1d-020d794b30d2cb63.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/a4938abf-f3bd889776795a43.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-1373b9acca0f6285.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-439655e227730097.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-2e12f6e55ae9293c.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-1a39d318b90715dd.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-f1d2cf8251994fa6.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-326d3a427ad45575.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-fd3b031251ba58b9.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/complain/page-b70c9085039a4346.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-f0af0730b161a3aa.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-6a5352b8d6a264a0.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-de15c16874092e06.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/layout-9fc392b1e3b6dabd.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-be0f5203c25af219.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-12791b7700d022f9.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-2fe96728ee042094.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-da9cb7e1cb70d59c.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-c164ca261fbd6cd8.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-51df226636dd7c50.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-f2239092e3e0fe03.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-d9fb17cb845de8ca.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-d3a5584983400107.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-9c6dc99ab2283296.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/app/review/%5BtradeId%5D/page-413423dfcbbdd6fd.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/b81fb708-bcdcc66a549a69a6.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/d30eb90b-574e76c95cb69808.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/d8314949-e9198aa1553798f8.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/dfefeca3-fb7f3092217b904c.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/framework-acafb836d5ee2927.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/main-a9595b01887256aa.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/main-app-a9497b22cd03efc6.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/pages/_app-bdcafd7e73ac588f.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/pages/_error-eb354be77100fdaf.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-436fc1ae6394191a.js',
          revision: '3T6p0jTOPCHPZWLoEVzEC',
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
          url: '/_next/static/css/8acc1609840aef79.css',
          revision: '8acc1609840aef79',
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
              event: a,
              state: i,
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
