import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { GoodsData, SummaryData } from '@/types/goodsApiDataType'

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
  status: number,
): Promise<ApiResponse<GoodsData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/users/sell?page=${page}?status=${status}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<GoodsData> = await res.json()
  return data
}

export const getGoodsSummary = async (
  goodsCode: number,
): Promise<ApiResponse<SummaryData>> => {
  const session = await getServerSession()

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}/summary`,
    {
      headers: session?.user.accessToken,
    },
  )

  const data = await res.json()
  return data
}
