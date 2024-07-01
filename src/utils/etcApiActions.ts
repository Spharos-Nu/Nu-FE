'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { ReviewListType } from '@/types/etcApiDataType'

export const registerComplainGoods = async (
  goodsCode: string,
  complainReason: string,
  complainContent: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc/reports/goods/${goodsCode}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        complainReason,
        complainContent,
      }),
    },
  )

  const data = await res.json()
  return data
}

export const registerComplainUsers = async (
  reportedUuid: string,
  complainReason: string,
  complainContent: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc/reports/users/${reportedUuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        complainReason,
        complainContent,
      }),
    },
  )

  const data = await res.json()
  return data
}

// 리뷰 등록 API
export const postReview = async (
  bidderUuid: string,
  sellerUuid: string,
  goodsCode: string,
  score: number,
  content: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/etc/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify({
      bidderUuid,
      sellerUuid,
      goodsCode,
      score,
      content,
    }),
  })

  const data = await res.json()
  return data
}

// 리뷰 리스트 조회 API
export const getReviewList = async (
  currentPage: number,
): Promise<ApiResponse<ReviewListType>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc-n/reviews/${session?.user.uuid}?page=${currentPage}&size=10&sort=`,
  )

  const data = await res.json()
  return data
}
