'use client'

import Image from 'next/image'
import { useState } from 'react'
import banner from '@/dummydata/banner1.png'
import banner2 from '@/dummydata/banner2.png'
import banner3 from '@/dummydata/banner3.png'

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
  ]

  const dummy = [banner, banner2, banner3]

  const [selectedImage, setSelectedImage] = useState<GoodsImage>(imageList[0])

  const onClickImage = (item: GoodsImage) => {
    setSelectedImage(item)
  }

  return (
    <div className="">
      <Image
        src={dummy[selectedImage.index]}
        alt="굿즈 이미지"
        width={0}
        height={0}
        className="my-[10px] w-[calc(100%-30px)] m-auto rounded-3xl h-auto"
      />
      {imageList.map((item) => (
        <Image
          src={banner}
          alt="굿즈 이미지"
          onClick={() => onClickImage(item)}
        />
      ))}
    </div>
  )
}
