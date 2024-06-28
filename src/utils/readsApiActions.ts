import { ApiResponse } from '@/types/apiResponseType'
import { GoodsAllListType } from '@/types/goodsType'
import { KeywordType } from '@/types/readApiDataType'

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
