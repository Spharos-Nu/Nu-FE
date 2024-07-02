'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BidType } from '@/types/goodsApiDataType'

export default function WinningContent({ goods }: { goods: BidType }) {
  return (
    <Link href={`/goods/${goods.goodsCode}`} className="relative">
      <Image
        src={goods.thumbnail}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl border border-t-0 border-gray-300 flex justify-between relative">
        <div className="py-4 px-3 w-full">
          <p className="truncate w-full mb-3">{goods.name}</p>
          <div className="text-[12px] bg-yellow-400 text-white flex justify-center items-end rounded-full px-[10px] py-3 text-sm truncate">
            <span className="text-[12px] text-gray-600">
              {goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>{' '}
            에 낙찰되었어요
          </div>
        </div>
      </div>
    </Link>
  )
}
