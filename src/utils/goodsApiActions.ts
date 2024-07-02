'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { GoodsData, SummaryData } from '@/types/goodsApiDataType'
import { GoodsAllListType } from '@/types/goodsType'

interface TagItem {
  id: number
  name: string
}

interface ImageItem {
  id: number
  url: string
}

export const postGoods = async (
  goodsName: string,
  categoryId: number,
  description: string,
  minPrice: number,
  openedAt: string,
  closedAt: string,
  wishTradeType: string,
  tags: TagItem[],
  images: ImageItem[],
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const inputData = {
    goodsName,
    categoryId,
    description,
    minPrice,
    openedAt,
    closedAt,
    wishTradeType,
    tags,
    images,
  }
  console.log(inputData)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/goods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify(inputData),
  })

  const data = await res.json()
  return data
}

/**
 * 입찰한 상품 코드 조회
 * @param page 현재 페이지
 * @param status 0: 경매전 / 1: 경매중 / 2: 경매종료 / 3: 거래완료 / 4: 거래취소
 * @returns
 * "result": {
  "totalCount": "총 개수",
  "nowPage": "현재 페이지",
  "maxPage": "최대 페이지",
  "isLast": "마지막 페이지 여부"
  "goodsList":[
    {
      "goodsCode": "상품코드"
      },
  ],
}
*/
export const getBidGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/bids?page=${page}&size=20&sort=&${status === null ? '' : `status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

/**
 * 내가 낙찰받은 상품 코드 조회
 * @param page 현재 페이지
 * @param status 0: 경매전 / 1: 경매중 / 2: 경매종료 / 3: 거래완료 / 4: 거래취소
 * @returns
 * "result": {
    "totalCount": "총 개수",
    "nowPage": "현재 페이지",
    "maxPage": "최대 페이지",
    "isLast": "마지막 페이지 여부"
    "goodsList":[
      {
        "goodsCode": "상품코드"
        },
    ],
  }
  */
export const getWinningGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/winning-bid?page=${page}&size=20&sort=&${status === null ? '' : `status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

export const getLikeGoods = async (
  page: number,
): Promise<ApiResponse<GoodsAllListType>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/users/wish?page=${page}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data = await res.json()
  return data
}

export const getGoodsSummary = async (
  goodsCode: string,
): Promise<ApiResponse<SummaryData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}/summary`,
    {
      headers: session?.user.accessToken,
    },
  )

  const data = await res.json()
  return data
}

export const getLike = async (
  goodsCode: string,
): Promise<ApiResponse<boolean>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/aggregation/${goodsCode}/is-wish`,
    {
      headers: session?.user.accessToken,
    },
  )

  const data = await res.json()
  return data
}
