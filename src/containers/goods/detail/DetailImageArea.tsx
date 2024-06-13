'use client'

import Image from 'next/image'
import { useState } from 'react'
import banner from '@/dummydata/banner1.png'
import banner2 from '@/dummydata/banner2.png'
import banner3 from '@/dummydata/banner3.png'
import Next from '@/public/svgs/icon/nextBtn.svg'
import Prev from '@/public/svgs/icon/prevBtn.svg'

export interface GoodsImage {
  id: number
  url: string
  index: number
}

export default function DetailImageArea() {
  const imageList: GoodsImage[] = [
    {
      id: 1,
      url: '/images/goods/detail/1.jpg',
      index: 0,
    },
    {
      id: 2,
      url: '/images/goods/detail/2.jpg',
      index: 1,
    },
    {
      id: 3,
      url: '/images/goods/detail/3.jpg',
      index: 2,
    },
    {
      id: 4,
      url: '/images/goods/detail/1.jpg',
      index: 3,
    },
    {
      id: 5,
      url: '/images/goods/detail/2.jpg',
      index: 4,
    },
    {
      id: 6,
      url: '/images/goods/detail/3.jpg',
      index: 5,
    },
  ]

  const dummy = [banner, banner2, banner3, banner, banner2, banner3]

  const [selectedImage, setSelectedImage] = useState<GoodsImage>(imageList[0])

  const onClickImage = (item: GoodsImage) => {
    setSelectedImage(item)
  }

  const onNext = () => {
    const index = selectedImage.index + 1
    if (index >= imageList.length) {
      setSelectedImage(imageList[0])
    } else {
      setSelectedImage(imageList[index])
    }
  }

  const onPrev = () => {
    const index = selectedImage.index - 1
    if (index < 0) {
      setSelectedImage(imageList[imageList.length - 1])
    } else {
      setSelectedImage(imageList[index])
    }
  }

  return (
    <>
      <div className="relative">
        <Image
          src={dummy[selectedImage.index]}
          alt="굿즈 이미지"
          width={0}
          height={0}
          className="h-[calc(100%-30px)] w-[calc(100%-30px)] max-w-[600px] m-auto rounded-3xl"
        />
        <button
          type="button"
          className="absolute top-1/2 left-[30px] transform -translate-y-1/2"
          onClick={() => onPrev()}
        >
          <span className="hidden">이전</span>
          <Prev />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-[30px] transform -translate-y-1/2"
          onClick={() => onNext()}
        >
          <span className="hidden">다음</span>
          <Next />
        </button>
      </div>
      <div className="flex whitespace-nowrap overflow-x-auto gap-[10px] pt-[10px] px-[15px]">
        {imageList.map((item) => (
          <Image
            key={item.id}
            src={banner}
            alt="굿즈 이미지"
            onClick={() => onClickImage(item)}
            width={0}
            height={0}
            className={`h-[30%] w-[30%] rounded-2xl ${item.id === selectedImage.id ? '' : 'brightness-75'}`}
          />
        ))}
      </div>
    </>
  )
}
