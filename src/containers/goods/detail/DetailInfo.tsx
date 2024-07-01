'use client'

import LikeBtn from '@/components/Btn/LikeBtn'
import { GoodsDetailType } from '@/types/goodsType'
import Timer from './Timer'

export default function DetailInfo({
  goodsDetail,
}: {
  goodsDetail: GoodsDetailType
}) {
  const wishTrade = [
    {
      id: 0,
      name: '직거래 원해요!',
    },
    {
      id: 1,
      name: '택배 원해요!',
    },
    {
      id: 2,
      name: '직거래, 택배 둘 다 좋아요!',
    },
  ]

  return (
    <div className="mt-[35px] px-[20px]">
      <div className="relative flex justify-between mt-[15px] items-center">
        <p className="text-[20px]">{goodsDetail.name}</p>
        <LikeBtn goodsCode={goodsDetail.goodsCode} />
      </div>
      <div className="flex justify-between items-end">
        <div className="mt-[15px] leading-[30px]">
          <p className="text-[16px] text-[#989898]">경매 시작가</p>
          <p className="pt-[2px] text-[34px] font-semibold">
            {goodsDetail.minPrice.toLocaleString()}{' '}
            <span className="text-[20px] font-normal">원</span>
          </p>
        </div>
        <div className="flex flex-col mb-2">
          <p className="pr-[15px] text-[#989898]">거래는</p>
          {goodsDetail.wishTradeType === 0 && (
            <p className="text-[17px]">{wishTrade[0].name}</p>
          )}
          {goodsDetail.wishTradeType === 1 && (
            <p className="text-[17px]">{wishTrade[1].name}</p>
          )}
          {goodsDetail.wishTradeType === 2 && (
            <p className="text-[17px]">{wishTrade[2].name}</p>
          )}
        </div>
      </div>
      <div className="mt-[15px] px-[10px] py-[10px] rounded-2xl bg-yellow-100 ">
        {goodsDetail.tradingStatus === 0 && (
          <Timer
            time={goodsDetail.openedAt}
            status={goodsDetail.tradingStatus}
          />
        )}
        {goodsDetail.tradingStatus === 1 && (
          <Timer
            time={goodsDetail.closedAt}
            status={goodsDetail.tradingStatus}
          />
        )}
        {goodsDetail.tradingStatus >= 2 && (
          <p className="text-[21px]">경매 종료</p>
        )}
      </div>
    </div>
  )
}
