// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/mypage',
    '/mypage/:path*',
    '/registration',
    '/goods-complain',
    '/user-complain',
  ],
}
