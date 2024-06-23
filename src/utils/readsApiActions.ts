import { ApiResponse } from '@/types/apiResponseType'
import { KeywordType, SearchListType } from '@/types/readApiDataType'

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
