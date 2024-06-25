if (!self.define) {
  let e,
    n = {}
  const s = (s, a) => (
    (s = new URL(s + '.js', a).href),
    n[s] ||
      new Promise((n) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = s), (e.onload = n), document.head.appendChild(e)
        } else (e = s), importScripts(s), n()
      }).then(() => {
        let e = n[s]
        if (!e) throw new Error(`Module ${s} didn’t register its module`)
        return e
      })
  )
  self.define = (a, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (n[c]) return
    let r = {}
    const t = (e) => s(e, c),
      o = { module: { uri: c }, exports: r, require: t }
    n[c] = Promise.all(a.map((e) => o[e] || t(e))).then((e) => (i(...e), r))
  }
}
define(['./workbox-b1b34251'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'd85655ed605aca38f9ae0d8d836c16c0',
        },
        {
          url: '/_next/static/DnUnL4fT0jedUhRbo_rnD/_buildManifest.js',
          revision: '6fbad686f1d634bff4a437ec93afbf9f',
        },
        {
          url: '/_next/static/DnUnL4fT0jedUhRbo_rnD/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0069da5d-3e36eb04482cf870.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/03102c3f-a8997eec6442a165.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/06ff0236-ed52a58dd4745465.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/0ab17c2b-237abbdd19c47364.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/1279-20c0e93b6cc50c7e.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/2195-cf9056c46889018c.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/2586-d7b0d0a65a0793b6.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/263bbe58-bc36c9ea26b30d40.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/2c5441ed-49bbc05794884747.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/3489197a-3f05c9f45309a610.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/3f4e57d2-8af750c674c316f1.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/416218ec-9b82ec063826676e.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/5464-2a065097caa99a00.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/5541-300b0da9cdc2b111.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/5941-e7039e2e01d508cd.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/63dc9855-e53eac1c4107fc45.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/6594-b4088ede091b20bb.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/6a7b169c-8732057961bf03ab.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/7071-eda37e0ae59e9e39.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/7518-7938e69ad1d3786e.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/7686-59202c2abc5e7f9a.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/8042fdf4-40be255204f2015c.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/8804-0bc6eb88dfd6d323.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/8871-d238db759cc0b052.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/8981-6dd9201da53480b8.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/9730-2321541cac439ba9.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/ab3ca5da-ed2b8b63a8fe628f.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(complain)/goods-complain/page-f26666ebc11ee2f2.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(complain)/layout-5fb3426ef2e618f8.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(complain)/user-complain/page-73f62f6574825c2b.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/layout-0821366d99229ade.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/page-29c4ebc736c4dbba.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/layout-4497ec8e7eebd725.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/page-13f3646dd7b69929.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-a47cbeb01ac31443.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-2ab0d5f6acdd4a8f.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/page-cdd7545c351dcc65.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/page-d51b45992f2d7543.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/page-404efce4ad95380e.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(main)/layout-a272b90a23629b5e.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-a8ca6ac09db87f5a.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(member)/find-info/page-a28c1d7e11e041eb.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-1acd105e0f848f95.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-0c2111a925572a7c.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-129b921200b09f2c.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-534023f115e2d0df.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-24b7a66e319f82f1.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-b8af449226d47a9c.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-35ea8faf8fd565ba.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/layout-2344e6be91955fd1.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-b9b4f83b2ded48e6.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-a981b60c9ac6ce35.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-423e88bb585ccb28.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-b34fba26f13a5983.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-5d51b2fcd6134253.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-f7136557804e1afe.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-7d2e761d0610a4db.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-4a2499bee12ba762.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-5cad618c2c1cdc6d.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-e62175bb9a69fb7b.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/app/review/%5BtradeId%5D/page-9426bbdb93e3fc31.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/c516f14e-5b9f4e16b5d11302.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/de2bcb84-3352e3874a98c0f0.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/framework-9c75c43ff7b67089.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/main-a2a99fb87ab691e8.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/main-app-09fd68f819717e65.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/pages/_app-b31c2f3949fee873.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/pages/_error-a4a054c7bd637474.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-da8ce416a3e69bf4.js',
          revision: 'DnUnL4fT0jedUhRbo_rnD',
        },
        {
          url: '/_next/static/css/1fe708b509ccb449.css',
          revision: '1fe708b509ccb449',
        },
        {
          url: '/_next/static/css/2ebb2afbe58660e0.css',
          revision: '2ebb2afbe58660e0',
        },
        {
          url: '/_next/static/css/cf493a8e9dde5eae.css',
          revision: 'cf493a8e9dde5eae',
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
          url: '/svgs/duck/biddingConfirmDuck.svg',
          revision: '795042a2cf64d3b08e8b92e6ea486b5e',
        },
        {
          url: '/svgs/duck/biddingDuck.svg',
          revision: 'ebe6675333e64223acbecc0100e6eda9',
        },
        {
          url: '/svgs/duck/descriptionDuck.svg',
          revision: '3966eec70598559a4263fbf30d9d3400',
        },
        {
          url: '/svgs/duck/duckOne.svg',
          revision: 'f7b18503e6e9be79ae9205bc68cec62e',
        },
        {
          url: '/svgs/duck/etcDuck.svg',
          revision: '6a67409cfc2621221a9b8a28a4adace5',
        },
        {
          url: '/svgs/duck/mainDuckPoint.svg',
          revision: 'a13da7286ed2ea3586d656c80d89fc98',
        },
        {
          url: '/svgs/duck/noImageDuck.svg',
          revision: '487a9012cbc18035f3e03d325ce1a8e1',
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
          url: '/svgs/icon/checkFalse.svg',
          revision: '4426c2d47ecd31d067e75808bebeb86f',
        },
        {
          url: '/svgs/icon/checkTrue.svg',
          revision: '4bc0d59e2e99348f81fca1b026266065',
        },
        {
          url: '/svgs/icon/homeColor.svg',
          revision: '05417db0a4655a628fb4ad536db4248a',
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
          url: '/svgs/icon/nextBtn.svg',
          revision: '619ff433cd68515ead49c921ff3546d3',
        },
        {
          url: '/svgs/icon/prevBtn.svg',
          revision: '4111bd796f770a0464b43d4ffb678f07',
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
              response: n,
              event: s,
              state: a,
            }) =>
              n && 'opaqueredirect' === n.type
                ? new Response(n.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: n.headers,
                  })
                : n,
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
        const n = e.pathname
        return !n.startsWith('/api/auth/') && !!n.startsWith('/api/')
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
