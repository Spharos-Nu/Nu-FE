'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { TagType } from '@/types/goodsType'
import {
  HitType,
  HotType,
  LiveAndHotType,
  ProfileType,
  SoonAndHitsType,
} from '@/types/mainType'

// 현재 입찰 중인 굿즈 목록 조회 API
export const getLive = async (
  categoryId: number,
): Promise<ApiResponse<LiveAndHotType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/now-trading?categoryId=${categoryId}&page=0&sort=`,
  )

  const data = await res.json()
  return data
}

// 인기 굿즈 목록 조회 API
export const getHot = async (
  categoryId: number,
): Promise<ApiResponse<HotType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/all-list?categoryId=${categoryId}&isTradingOnly=false&page=0&size=10&sort=wishCount,DESC`,
  )

  const data = await res.json()
  return data
}

// 커밍순 굿즈 목록 조회 API
export const getComingSoon = async (
  categoryId: number,
): Promise<ApiResponse<SoonAndHitsType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/coming-soon?categoryId=${categoryId}&page=0&size=10&sort=`,
  )

  const data = await res.json()
  return data
}

// 조회수 순 굿즈 목록 조회 API
export const getHits = async (
  categoryId: number,
): Promise<ApiResponse<HitType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/all-list?categoryId=${categoryId}&isTradingOnly=false&page=0&size=10&sort=viewsCount,ASC`,
  )

  const data = await res.json()
  return data
}

// 태그 조회 API
export const getTags = async (
  goodsCode: string,
): Promise<ApiResponse<TagType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods-n/${goodsCode}/tags`,
  )

  const data = await res.json()
  return data
}

// 굿즈 이미지 조회 API
export const getGoodsImages = async (
  goodsCode: string,
): Promise<ApiResponse<string>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods-n/${goodsCode}/thumbnail`,
  )

  const data = await res.json()
  return data
}

// 좋아요 여부 조회 API
export const getLikeWhether = async (
  goodsCode: string,
): Promise<ApiResponse<boolean>> => {
  const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/wish/${goodsCode}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
    },
  )

  const data: ApiResponse<boolean> = await res.json()
  return data
}

// 좋아요 추가 API
export const addLike = async (
  goodsCode: string,
): Promise<ApiResponse<boolean>> => {
  const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/wish/${goodsCode}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
    },
  )

  const data: ApiResponse<boolean> = await res.json()
  return data
}

// 좋아요 삭제 API
export const deleteLike = async (
  goodsCode: string,
): Promise<ApiResponse<boolean>> => {
  const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/wish/${goodsCode}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
    },
  )

  const data: ApiResponse<boolean> = await res.json()
  return data
}

// 프로필 조회 API
export const getProfile = async (): Promise<ApiResponse<ProfileType>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/${session?.user.uuid}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await res.json()
  return data
}

// 덕 포인트 조회 API
export const getDuckPoint = async (): Promise<ApiResponse<number>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duck-point`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
    },
  )

  const data = await res.json()
  return data
}
