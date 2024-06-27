'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import {
  ProfileData,
  MannerDuckData,
  DuckPointDetailData,
} from '@/types/memberApiDataType'

/**
 * 프로필 조회
 * @returns
 * "result": {
    "profileImg": "프로필이미지",
    "nickname": "닉네임",
    "favCategory": "선호카테고리"
    },
 */
export const getProfile = async (): Promise<ApiResponse<ProfileData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/${session?.user.uuid}`,
  )

  const data: ApiResponse<ProfileData> = await res.json()
  return data
}

/**
 * 매너덕 조회
 * @returns
 * "result":{
    "level": 3
    "leftPoint": 12 (다음 매너덕까지 남은 점수)
  },
 */
export const getMannerDuck = async (): Promise<ApiResponse<MannerDuckData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/${session?.user.uuid}/manner-duck`,
  )

  const data: ApiResponse<MannerDuckData> = await res.json()
  return data
}

/**
 * 덕페이 충전 금액 조회
 * @returns 현재 보유 포인트
 */
export const getDuckPoint = async (): Promise<ApiResponse<number>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duck-point`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<number> = await res.json()
  return data
}

// Todo: 토큰이 있는 경우에도 비밀번호 재설정 가능
// export const updatePassword = async (): Promise<ApiResponse<null>> => {}

// Todo: Api 개발되면 낙찰받은 데이터도
// export const getWinningGoods = async () => {}

// Todo: 거래후기 목록 조회
// export const getReviews = async () => {}

/**
 * 덕포인트 상세(내역) 조회
 * @param page 페이지 번호
 * @returns
 * "result": {
    "nowPage": "현재 페이지",
    "maxPage": "최대 페이지",
    "isLast": "마지막 페이지 여부"
    "historyList": [
      {
       "changeAmount": "변동금액",
       "leftPoint": "잔여포인트",
       "changeStatus": "입출금여부",  // true: 입금, false: 출금
       "historyDetail": "내역상세",
       "createdAt": "생성날짜"
       },
      ...
    ],
  }
 */
export const getDuckPointDetail = async (page: number) => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duck-point/detail?page=${page}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<DuckPointDetailData> = await res.json()
  return data
}

/** 프로필 수정 */
export const updateUserProfile = async (
  profileImage: string,
  nickname: string,
  favoriteCategory: string,
): Promise<ApiResponse<ProfileData>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify({
      profileImage,
      nickname,
      favoriteCategory,
    }),
  })

  const data: ApiResponse<ProfileData> = await res.json()
  return data
}

export const chargeDuckPoint = async (totalAmount: number) => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/pay/ready`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemName: '충전',
        totalAmount,
        uuid: session?.user.uuid,
      }),
    },
  )

  const data = await res.json()
  return data
}
