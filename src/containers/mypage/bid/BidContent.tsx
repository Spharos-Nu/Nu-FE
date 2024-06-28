'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BidType } from '@/types/goodsApiDataType'

export default function BidContent({ goods }: { goods: BidType }) {
  return (
    <Link href={`/goods/${goods.goodsCode}`}>
      <Image
        src={goods.thumbnail}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl border border-t-0 border-slate-500 flex justify-between relative">
        <div className="py-4 px-3 w-full">
          <p className="truncate w-full mb-3">{goods.name}</p>
          <div className="bg-sky-600 text-white flex justify-center items-center rounded-full px-[10px] py-3 text-sm">
            내 입찰가:{' '}
            {goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
        </div>
      </div>
    </Link>
  )
}
