'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SellType } from '@/types/readApiDataType'

export default function SellContent({ goods }: { goods: SellType }) {
  return (
    <Link href={`/goods/goodsCode=${goods.goodsCode}`} className="relative">
      <Image
        src={goods.thumbnail.url}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl">
        <p className="truncate">{goods.goodsName}</p>
        <div className="grid grid-cols-3 gap-1">
          <div>
            <span className="rounded-2xl bg-sky-600 text-center">
              {goods.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
