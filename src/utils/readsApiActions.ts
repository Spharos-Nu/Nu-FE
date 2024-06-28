import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import {
  KeywordType,
  ReadsGoodsData,
  SearchListType,
} from '@/types/readApiDataType'

export const getSearchResult = async (
  keyword: string,
  page: number,
): Promise<ApiResponse<SearchListType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n?keyword=${keyword}?size=20?page=${page}`,
  )

  const data: ApiResponse<SearchListType> = await res.json()
  return data
}

export const getRelatedKeywordList = async (
  keyword: string,
): Promise<ApiResponse<KeywordType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n?keyword=${keyword}`,
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
  'use server'

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
