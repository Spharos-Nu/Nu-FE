'use client'

import Image from 'next/image'
import Link from 'next/link'
import LikeBtn from '@/components/Btn/LikeBtn'
import { LiveAndHotType } from '@/types/mainType'
import LiveAndHotTimer from './LiveAndHotTimer'

export default function LiveAndHotItem({ item }: { item: LiveAndHotType }) {
  return (
    <div className="relative border rounded-xl inline-block mr-[10px] last:mr-0">
      <div className="relative">
        <LikeBtn goodsCode={item.goodsCode} />
        <Link href={`/goods/${item.goodsCode}`} className="bg-clip-content">
          {item.thumbnail && (
            <Image
              src={item.thumbnail.url}
              alt={item.goodsName}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-t-lg h-auto w-full max-h-[200px] object-cover object-center aspect-square"
            />
          )}
          {!item.thumbnail && (
            <div className="h-[200px] bg-[#F9B23C] rounded-t-lg items-center pb-[17px]">
              <Image
                src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`}
                alt={item.goodsName}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-t-lg h-auto w-full max-h-[200px] object-scale-down object-center aspect-square"
              />
            </div>
          )}
        </Link>
      </div>
      <Link href={`/goods/${item.goodsCode}`} className="bg-clip-content">
        <div className="py-[20px] px-[20px]">
          <p className="text-[#666666] text-[17px] truncate">
            {item.goodsName}
          </p>
          <div className="flex justify-between gap-[10px] pt-[20px]">
            {item.tradingStatus === 0 && (
              <LiveAndHotTimer
                time={item.openedAt}
                status={item.tradingStatus}
              />
            )}
            {item.tradingStatus === 1 && (
              <LiveAndHotTimer
                time={item.closedAt}
                status={item.tradingStatus}
              />
            )}
            {item.tradingStatus >= 2 && (
              <p className="w-[185px] bg-[#5D5FEF] bg-opacity-15 px-[22px] py-[8px] text-[#5D5FEF] text-center rounded-full text-[17px] font-bold">
                경매 마감
              </p>
            )}
            <div className="bg-[#2B74B9] text-white rounded-full px-[20px] py-[8px] truncate">
              {item.minPrice.toLocaleString()}원
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
