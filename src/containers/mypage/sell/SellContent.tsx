'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SummaryDataType } from '@/types/readApiDataType'

export default function SellContent({ goods }: { goods: SummaryDataType }) {
  const ImageUrl = goods.thumbnail
    ? goods.thumbnail.url
    : `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`

  return (
    <Link
      href={`/goods/${goods.goodsCode}`}
      className="relative bg-clip-content"
    >
      <Image
        src={ImageUrl}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl border border-t-0 border-gray-300 flex justify-between relative">
        <div className="py-4 px-3 w-full">
          <p className="truncate w-full mb-3">{goods.goodsName}</p>
          <div className="bg-yellow-400 text-white flex justify-center items-center rounded-full px-[10px] py-3 text-sm truncate">
            최저입찰가:{' '}
            {goods.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
        </div>
      </div>
    </Link>
  )
}
