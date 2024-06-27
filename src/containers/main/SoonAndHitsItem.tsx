'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import BasicImage from '@/public/images/basicImage.png'
import { SoonAndHitsType, TagType } from '@/types/mainType'
import {
  addLike,
  deleteLike,
  getLikeWhether,
  getTags,
} from '@/utils/mainApiActions'
import TagItem from './TagItem'

export default function SoonAndHitsItem({
  item,
  sort,
}: {
  item: SoonAndHitsType
  sort?: string
}) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [tags, setTags] = useState<TagType[]>([])

  const handleLike = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else if (isLiked) {
      const data = await deleteLike(item.goodsCode)
      if (data.status === 200) {
        setIsLiked(!isLiked)
      }
    } else {
      const data = await addLike(item.goodsCode)
      if (data.status === 200) {
        setIsLiked(!isLiked)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (session) {
        const LikeData = await getLikeWhether(item.goodsCode)
        setIsLiked(LikeData.result)
      }
      const TagData = await getTags(item.goodsCode)
      const tagList = [...tags, ...TagData.result] as TagType[]
      setTags(tagList)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="border rounded-2xl">
      <div className="relative">
        <button
          type="button"
          onClick={handleLike}
          className="absolute bottom-2 right-2 z-10"
        >
          {isLiked ? (
            <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-[#F84545]" />
          ) : (
            <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-[#989898]" />
          )}
        </button>
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
            <div className="bg-yellow-500">
              <Image
                src={BasicImage}
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
            {tags.length === 0 && <p className="h-[21px] visible" />}
            {tags.map((list: TagType) => (
              <TagItem key={list.id} tag={list} />
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
