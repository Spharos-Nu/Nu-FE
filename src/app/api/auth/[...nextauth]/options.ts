/* eslint-disable no-param-reassign */
import { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

export const options: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     accountId: { type: 'text' },
    //     password: { type: 'password' },
    //   },

    //   async authorize(credentials) {
    //     const res = await fetch(
    //       `${process.env.NEXT_PUBLIC_API}/members/auth/login`,
    //       {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //           accountId: credentials?.accountId,
    //           password: credentials?.password,
    //         }),
    //       },
    //     )

    //     if (res.ok) {
    //       const user = await res.json()
    //       return user
    //     }

    //     return null
    //   },
    // }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // 회원인지 아닌지 확인
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.accessToken
      return { ...session, ...token }
    },
  },
  pages: {
    // signIn: '/login',
    error: '/auth_error',
  },
}
