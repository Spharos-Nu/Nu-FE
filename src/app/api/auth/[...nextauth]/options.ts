/* eslint-disable no-param-reassign */
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userId: { type: 'text' },
        password: { type: 'password' },
      },

      async authorize(credentials) {
        const loginResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API}/v1/auth-n/login`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          },
        )

        const loginRes = await loginResponse.json()

        if (loginRes.status !== 200) {
          return null
        }

        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API}/v1/users-n/${loginRes.result.uuid}`,
        )

        const userRes = await userResponse.json()

        if (userRes.status !== 200) {
          return null
        }

        return {
          ...loginRes.result,
          ...userRes.result,
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      if (profile) {
        // 회원인지 아닌지 확인
        const loginResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API}/v1/auth-n/social-login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              memberCode: user.id,
            }),
          },
        )

        const loginRes = await loginResponse.json()

        if (loginRes.status === 404) {
          if ('kakao_account' in profile) {
            return `/join?id=${user.id}&provider=kakao`
          }
        } else if (loginRes.status !== 200) {
          return false
        }

        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API}/v1/users-n/${loginRes.result.uuid}`,
        )

        const userRes = await userResponse.json()

        if (userRes.status !== 200) {
          return false
        }

        user.uuid = loginRes.uuid
        user.accessToken = loginRes.accessToken
        user.refreshToken = loginRes.refreshToken
        user.profileImage = userRes.profileImage
        user.nickname = userRes.nickname
        user.favCategory = userRes.favCategory
        return true
      }

      return true
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update' && session !== null) {
        token.profileImage = session.image
        token.nickname = session.nickname
        token.favCategory = session.favoriteCategory
      }
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.image = token.profileImage
      session.user.uuid = token.uuid
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.nickname = token.nickname
      session.user.favoriteCategory = token.favCategory
      return { ...session }
    },
  },
  pages: {
    signIn: '/login',
  },
}
