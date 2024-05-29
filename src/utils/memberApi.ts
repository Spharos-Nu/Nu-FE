import { ApiResponse } from '@/types/apiResponseType'

export const join = async (
  profileImage: string,
  favoriteCategory: string,
  nickname: string,
  userId: string,
  password: string,
  phoneNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users-n`, {
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

export const duplicationCheckNick = async (
  nickname: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/duplication-check/nick?inputParams=${nickname}`,
  )

  const data = await res.json()
  return data
}

export const duplicationCheckId = async (
  id: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/duplication-check/id?inputParams=${id}`,
  )

  const data = await res.json()
  return data
}

export const verification = async (
  phoneNumber: string,
  verificationNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/verification`,
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

export const verificationConfirm = async (
  phoneNumber: string,
  verificationNumber: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/verification/confirm`,
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
