'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import exImg from '@/dummydata/banner1.png'
import { LiveAndHotType } from '@/types/mainType'

export default function LiveAndHotItem({ item }: { item: LiveAndHotType }) {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="relative border rounded-xl inline-block mr-[10px] last:mr-0">
      <button
        type="button"
        onClick={() => handleLike()}
        className="absolute z-10 top-0 right-0 mt-[10px] mr-[10px] "
      >
        {isLiked ? (
          <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-[#989898]" />
        ) : (
          <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-[#F84545]" />
        )}
      </button>
      <Link
        href={`/goods-detail?goodsCode=${item.goodsCode}`}
        className=" bg-clip-content"
      >
        <Image
          src={exImg}
          alt={item.goodsName}
          width={0}
          height={0}
          className="rounded-t-lg h-auto w-full max-h-[200px] object-cover object-center aspect-square"
        />
        <div className="py-[20px] px-[20px]">
          <p className="text-[#666666] text-[17px]">{item.goodsName}</p>
          <div className="flex justify-between gap-[10px] pt-[20px]">
            <p className="bg-[#5D5FEF] bg-opacity-15 px-[22px] py-[8px] text-[#5D5FEF] rounded-full text-[17px] font-bold">
              2d 3h 12m 36s
            </p>
            <div className="bg-[#2B74B9] text-white rounded-full px-[20px] py-[8px]">
              {item.minPrice.toLocaleString()}원
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
