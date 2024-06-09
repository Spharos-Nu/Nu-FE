import { DefaultSession } from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
      refreshToken: string
      profileImage: string
      nickname: string
      favoriteCategory: string
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    accessToken: string
    refreshToken: string
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
