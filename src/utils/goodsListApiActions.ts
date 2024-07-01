'use server'

import { ApiResponse } from '@/types/apiResponseType'
import { GoodsAllListType } from '@/types/goodsType'

export const getGoodsList = async (
  categoryId: number,
  isTradingOnly: boolean,
  page: number,
  size: number,
  sort: string,
  sequence: string,
): Promise<ApiResponse<GoodsAllListType>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/read-n/all-list?categoryId=${categoryId}&isTradingOnly=${isTradingOnly}&page=${page}&size=${size}&sort=${sort},${sequence}`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}
