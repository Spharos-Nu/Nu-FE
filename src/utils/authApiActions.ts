'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'

export const join = async (
  profileImage: string,
  favoriteCategory: string,
  nickname: string,
  userId: string,
  password: string,
  phoneNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth-n`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profileImage,
      favoriteCategory,
      nickname,
      userId,
      password,
      phoneNumber,
    }),
  })

  const data = await res.json()
  return data
}

export const socialMapping = async (
  phoneNumber: string,
  memberCode: string,
  provider: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/auth-n/social-mapping`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        memberCode,
        provider,
      }),
    },
  )

  const data = await res.json()
  return data
}

export const verification = async (
  phoneNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/auth-n/verification`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        verificationNumber: '',
      }),
    },
  )

  const data = await res.json()
  return data
}

export const verificationConfirm = async (
  phoneNumber: string,
  verificationNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/auth-n/verification/confirm`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        verificationNumber,
      }),
    },
  )

  const data = await res.json()
  return data
}

export const updatePassword = async (
  currentPassword: string,
  newPassword: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth/pwd`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify({
      currentPassword,
      newPassword,
    }),
  })

  const data = await res.json()
  return data
}
