'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import exImg from '@/dummydata/banner1.png'
import { SoonAndHitsType, Tag } from '@/types/mainType'
import TagItem from './TagItem'

export default function SoonAndHitsItem({
  item,
  sort,
}: {
  item: SoonAndHitsType
  sort?: string
}) {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="border rounded-2xl w-[48%] sm:w-[30%] lg:w-[23%] xl:w-[18%] min-w-[140px]">
      <div className="relative">
        <button
          type="button"
          onClick={() => handleLike()}
          className="absolute bottom-2 right-2 z-10"
        >
          {isLiked ? (
            <LiaHeart className="w-[30px] h-[32px] text-[#b3b3b3]" />
          ) : (
            <LiaHeartSolid className="w-[30px] h-[32px]  text-[#F84545]" />
          )}
        </button>
        <Link
          href={`/goods-detail?goodsCode=${item.goodsCode}`}
          className="relative"
        >
          <Image
            src={exImg}
            alt={item.goodsCode}
            width={0}
            height={0}
            className="rounded-t-2xl h-auto object-cover"
          />
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
      <Link href={`/goods-detail?goodsCode=${item.goodsCode}`}>
        <div className="px-[20px] py-[20px]">
          <p className="text-[21px] truncate">{item.goodsName}</p>
          <div className="whitespace-nowrap overflow-x-auto flex">
            {item.tag.map((list: Tag) => (
              <TagItem key={list.tagId} tag={list} />
            ))}
          </div>
          <p className="mt-[10px] text-[22px]">
            {item.minPrice.toLocaleString()}원
          </p>
        </div>
      </Link>
    </div>
  )
}
