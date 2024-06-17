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
          `${process.env.NEXT_PUBLIC_API}/v1/users`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: loginRes.result.accessToken,
            },
          },
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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/v1/auth-n/social-login`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              socialCode: user.id,
            }),
          },
        )

        const data = await res.json()

        if (data.status === 404) {
          if ('kakao_account' in profile) {
            return `/join?id=${user.id}&provider=kakao`
          }
        }
        if (data.status === 200) {
          user.uuid = data.result.uuid
          user.accessToken = data.result.accessToken
          user.refreshToken = data.result.refreshToken
          return true
        }
        return false
      }
      return true
    },
    async jwt({ user, token }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.accessToken = token.result.accessToken
      session.user.refreshToken = token.result.accessToken
      return { ...session, ...token }
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth_error',
  },
}
