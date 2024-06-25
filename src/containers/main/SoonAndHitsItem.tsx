'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { SoonAndHitsType, TagType } from '@/types/mainType'
import {
  addLike,
  deleteLike,
  getGoodsImages,
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
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const [tags, setTags] = useState<TagType[]>([])
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const handleLike = async () => {
    if (!session) {
      showAlert('로그인 후 이용해주세요.')
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
      const [ImageData, TagData] = await Promise.all([
        getGoodsImages(item.goodsCode),
        getTags(item.goodsCode),
      ])
      setImage(ImageData.result)
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
          {image && (
            <Image
              src={image}
              alt={item.goodsCode}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-t-2xl max-h-[200px] w-full h-auto object-cover aspect-square"
            />
          )}
          {!image && (
            <div className="h-[200px] bg-[#F6F6F6] flex items-center justify-center">
              <p className="text-[#666666] text-[17px]">
                이미지를 불러오지 못했어요
              </p>
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
      <BasicAlert message={message} />
    </div>
  )
}
