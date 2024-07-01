'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { GoodsAllListType } from '@/types/goodsType'
import {
  KeywordType,
  ReadsGoodsData,
  SummaryDataType,
} from '@/types/readApiDataType'

export const getSearchResult = async (
  keyword: string,
  categoryId: number,
  page: number,
): Promise<ApiResponse<GoodsAllListType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/search?keyword=${keyword}&categoryId=${categoryId}&isTradingOnly=false&page=${page}&size=20`,
  )

  const data: ApiResponse<GoodsAllListType> = await res.json()
  return data
}

export const getRelatedKeywordList = async (
  keyword: string,
  categoryId: number,
): Promise<ApiResponse<KeywordType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/search-list?keyword=${keyword}&categoryId=${categoryId}`,
  )

  const data: ApiResponse<KeywordType[]> = await res.json()
  return data
}

/**

 * 내가 등록한 상품 내역 조회
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
export const getSellGoods = async (
  page: number,
  status: number | null,
): Promise<ApiResponse<ReadsGoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read/sell?page=${page}&size=20&sort=&${status === null ? '' : `status=${status}`}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<ReadsGoodsData> = await res.json()
  return data
}

export const getGoodsSummary = async (
  goodsCode: string,
): Promise<ApiResponse<SummaryDataType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/${goodsCode}/summary`,
  )

  const data: ApiResponse<SummaryDataType> = await res.json()
  return data
}
