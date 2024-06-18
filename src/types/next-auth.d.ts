import { DefaultSession } from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      uuid: string
      accessToken: string
      refreshToken: string
      nickname: string
      favoriteCategory: string
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    status: number
    result: {
      accessToken: string
      refreshToken: string
    }
    message: string
  }
}
