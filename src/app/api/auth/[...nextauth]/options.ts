/* eslint-disable no-param-reassign */
import { getToken } from 'firebase/messaging'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'
import { messaging } from '@/app/firebase.config'

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
          return true
        }
        return false
      }

      getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
        }
      })

      return true
    },
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.image = token.profileImg
      session.user.uuid = token.uuid
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.accessToken
      session.user.nickname = token.nickname
      session.user.favoriteCategory = token.favCategory
      return { ...session }
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth_error',
  },
}
