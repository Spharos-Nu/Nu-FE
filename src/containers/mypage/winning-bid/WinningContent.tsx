'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BidType } from '@/types/goodsApiDataType'

export default function WinningContent({ goods }: { goods: BidType }) {
  return (
    <Link href={`/goods/goodsCode=${goods.goodsCode}`} className="relative">
      <Image
        src={goods.thumbnail}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl">
        <p className="truncate">{goods.name}</p>
        <div className="grid grid-cols-3 gap-1">
          <div>
            <span className="rounded-2xl bg-sky-600 text-center">
              {goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
