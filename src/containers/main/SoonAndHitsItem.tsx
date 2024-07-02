'use client'

import Image from 'next/image'
import Link from 'next/link'
import LikeBtn from '@/components/Btn/LikeBtn'
import { SoonAndHitsType, TagType } from '@/types/mainType'
import TagItem from './TagItem'

export default function SoonAndHitsItem({
  item,
  sort,
}: {
  item: SoonAndHitsType
  sort?: string
}) {
  return (
    <div className="border rounded-2xl">
      <div className="relative">
        <LikeBtn goodsCode={item.goodsCode} />
        <Link href={`/goods/${item.goodsCode}`} className="relative">
          {item.thumbnail && (
            <Image
              src={item.thumbnail.url}
              alt={item.goodsCode}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-t-2xl max-h-[200px] w-full h-auto object-cover aspect-square"
            />
          )}
          {!item.thumbnail && (
            <div className="bg-[#F9B23C] rounded-t-2xl">
              <Image
                src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`}
                alt={item.goodsCode}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-t-2xl max-h-[200px] w-full h-auto object-scale-down aspect-square"
              />
            </div>
          )}
          {sort === 'soon' && (
            <>
              <p className="absolute top-3 left-3 bg-[#F9B23C] rounded-full text-white px-[5px] py-[2px] text-[12px] leading-[16px]">
                New
              </p>
              <p className="absolute top-3 left-12 bg-black bg-opacity-25 text-white px-[5px] py-[2px] rounded-full text-[12px] leading-[16px]">
                coming soon
              </p>
            </>
          )}
        </Link>
      </div>
      <Link href={`/goods/${item.goodsCode}`}>
        <div className="px-[20px] py-[20px]">
          <p className="text-[21px] truncate">{item.goodsName}</p>
          <div className="whitespace-nowrap overflow-x-auto flex">
            {item.tagList.length === 0 && <p className="h-[21px] visible" />}
            {item.tagList.map((list: TagType) => (
              <TagItem key={list.id} tag={list} />
            ))}
          </div>
          <p className="mt-[10px] text-[22px] truncate">
            {item.minPrice.toLocaleString()}원
          </p>
        </div>
      </Link>
    </div>
  )
}
