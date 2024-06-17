// import { getServerSession } from 'next-auth'
// import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { BiddingPreviewType, GoodsDetailType } from '@/types/goodsType'

// 상세 조회 API
export const getGoodsDetail = async (
  goodsCode: string,
): Promise<ApiResponse<GoodsDetailType>> => {
  //   const session = await getServerSession(options)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/v1/goods-n/${goodsCode}`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 입찰 목록 미리보기 API
export const getBiddingPreview = async (
  goodsCode: string,
): Promise<ApiResponse<BiddingPreviewType[]>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/v1/bids-n/${goodsCode}`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}

// 입찰 유저 조회 API
export const getBiddingUser = async (bidderUuid: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/v1/user-n/${bidderUuid}`,
    {
      cache: 'no-cache',
    },
  )

  const data = await res.json()
  return data
}
