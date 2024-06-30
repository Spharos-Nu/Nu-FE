'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import { GoodsDetailType } from '@/types/goodsType'
import { addLike, deleteLike, getLikeWhether } from '@/utils/mainApiActions'
import Timer from './Timer'

export default function DetailInfo({
  goodsDetail,
}: {
  goodsDetail: GoodsDetailType
}) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { showToast } = useToastStore()

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

  const handleLike = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else {
      const whether = await getLikeWhether(goodsDetail.goodsCode)

      if (whether.status === 200) {
        if (isLiked) {
          const data = await deleteLike(goodsDetail.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        } else {
          const data = await addLike(goodsDetail.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        }
      } else if (whether.status === 401) {
        showToast('로그인이 필요한 서비스입니다.')
      } else {
        showToast(whether.message)
      }
    }
  }

  return (
    <div className="mt-[35px] px-[20px]">
      <div className="flex justify-between mt-[15px] items-center">
        <p className="text-[20px]">{goodsDetail.name}</p>
        <button type="button" onClick={() => handleLike()}>
          {isLiked ? (
            <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-red-500" />
          ) : (
            <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-slate-400" />
          )}
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div className="mt-[15px] leading-[30px]">
          <p className="text-[16px] text-[#989898]">입찰 시작가</p>
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
          <p className="text-[21px]">입찰 종료</p>
        )}
      </div>
    </div>
  )
}
