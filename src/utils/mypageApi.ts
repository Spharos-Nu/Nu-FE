import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import {
  ProfileData,
  MannerDuckData,
  GoodsCodeData,
} from '@/types/mypageDataType'

export const getProfile = async (): Promise<ApiResponse<ProfileData>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
    headers: { Authorization: session?.user.accessToken },
  })

  const data: ApiResponse<ProfileData> = await res.json()
  return data
}

export const getMannerDuck = async (): Promise<ApiResponse<MannerDuckData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/manner-duck`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<MannerDuckData> = await res.json()
  return data
}

export const getDuckPoint = async (): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duck-point`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<null> = await res.json()
  return data
}

export const updateProfile = async (): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
    method: 'PATCH',
    headers: { Authorization: session?.user.accessToken },
  })

  const data: ApiResponse<null> = await res.json()
  return data
}

// Todo: 토큰이 있는 경우에도 비밀번호 재설정 가능
// export const updatePassword = async (): Promise<ApiResponse<null>> => {}

export const getBidGoods = async (
  page: number,
  status: number,
): Promise<ApiResponse<GoodsCodeData[]>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/bid?page=${page}?status=${status}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsCodeData[]> = await res.json()
  return data
}

export const getSellGoods = async (
  page: number,
  status: number,
): Promise<ApiResponse<GoodsCodeData[]>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/sell?page=${page}?status=${status}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsCodeData[]> = await res.json()
  return data
}

// Todo: Api 개발되면 낙찰받은 데이터도
// export const getWinningGoods = async () {}

// Todo: 거래후기 목록 조회
// export const getReviews = async () {}
