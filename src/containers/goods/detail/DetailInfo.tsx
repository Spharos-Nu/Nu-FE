'use client'

import { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'

export default function DetailInfo() {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const wishdata = 0

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

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="mt-[35px] px-[20px]">
      <div className="flex justify-between mt-[15px] items-center">
        <p className="text-[20px]">굿즈명sddddddddㄴㅇㄹㄴㅇㄹddsfd</p>
        <button type="button" onClick={() => handleLike()}>
          {isLiked ? (
            <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-[#989898]" />
          ) : (
            <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-[#F84545]" />
          )}
        </button>
      </div>
      <div className="mt-[15px] leading-[30px]">
        <p className="text-[16px] text-[#989898]">입찰 시작가</p>
        <p className="pt-[2px] text-[34px] font-semibold">
          20,000 <span className="text-[20px] font-normal">원</span>
        </p>
      </div>
      <div className="mt-[15px] px-[10px] py-[10px] rounded-2xl bg-[#f8f7f7] ">
        <p className="text-[21px]">00h:00m 마감</p>
      </div>
      <div className="flex mt-[18px]">
        <p className="pr-[15px] text-[#989898]">거래 방법</p>
        {wishdata === 0 && <p className="text-[17px]">{wishTrade[0].name}</p>}
      </div>
    </div>
  )
}
