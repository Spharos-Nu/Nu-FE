import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import {
  BiddingPreviewType,
  GoodsDetailType,
  ImageUrlType,
  TagType,
} from '@/types/goodsType'

// 상세 조회 API
export const getGoodsDetail = async (
  goodsCode: string,
): Promise<ApiResponse<GoodsDetailType>> => {
  //   const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/${goodsCode}/detail`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 태그 조회 API
export const getGoodsTags = async (
  goodsCode: string,
): Promise<ApiResponse<TagType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods-n/${goodsCode}/tags`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 이미지 조회 API
export const getGoodsImages = async (
  goodsCode: string,
): Promise<ApiResponse<ImageUrlType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods-n/${goodsCode}/images`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 입찰 목록 API
export const getBiddingPreview = async (
  goodsCode: string,
): Promise<ApiResponse<BiddingPreviewType[]>> => {
  const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}/bids`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// // 입찰 유저 조회 API
// export const getBiddingUser = async (bidderUuid: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API}/v1/users-n/${bidderUuid}`,
//     {
//       cache: 'no-cache',
//     },
//   )

//   const data = await res.json()
//   return data
// }

// 좋아요 수 조회 API
export const getLikeCount = async (goodsCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/${goodsCode}/wish-count`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 조회수 API
export const getViews = async (goodsCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/${goodsCode}/views-count`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 입찰 수 조회 API
export const getBiddingCount = async (goodsCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/${goodsCode}/bid-count`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 조회수 올리는 API
export const postIncreaseViews = async (goodsCode: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation-n/views/${goodsCode}`,
    {
      method: 'POST',
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// // 삭제 API
// export const hardDeleteGoods = async (goodsCode: string) => {
//   const session = await getServerSession(options)
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}`,
//     {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: session?.user.accessToken,
//       },
//       cache: 'no-cache',
//     },
//   )

//   const data = await res.json()
//   return data
// }
