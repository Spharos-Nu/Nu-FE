'use client'

import Image from 'next/image'
import { useState } from 'react'
import NoImageDuck from '@/public/svgs/duck/noImageDuck.svg'
import Next from '@/public/svgs/icon/nextBtn.svg'
import Prev from '@/public/svgs/icon/prevBtn.svg'
import { ImageUrlType } from '@/types/goodsType'

export default function DetailImageArea({
  images,
}: {
  images: ImageUrlType[]
}) {
  const [selectedImage, setSelectedImage] = useState<ImageUrlType>(images[0])

  const onClickImage = (item: ImageUrlType) => {
    setSelectedImage(item)
  }

  const onNext = () => {
    const index = selectedImage.id + 1
    if (index >= images.length) {
      setSelectedImage(images[0])
    } else {
      setSelectedImage(images[index])
    }
  }

  const onPrev = () => {
    const index = selectedImage.id - 1
    if (index < 0) {
      setSelectedImage(images[images.length - 1])
    } else {
      setSelectedImage(images[index])
    }
  }

  return (
    <>
      <div className="relative">
        {images.length === 0 && (
          <div className="h-[250px] text-center content-center">
            <div className="inline-block">
              <NoImageDuck />
            </div>
            <p className="text-zinc-400">이미지를 불러오지 못했어요</p>
          </div>
        )}
        {images.length > 0 && (
          <>
            <Image
              src={selectedImage.url}
              alt="굿즈 이미지"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-[calc(100%-30px)] max-w-[600px] aspect-square object-cover object-center overflow-hidden m-auto rounded-3xl"
            />
            {images.length > 1 && (
              <>
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
              </>
            )}
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex whitespace-nowrap overflow-x-auto gap-[10px] pt-[10px] px-[15px]">
          {images.map((item) => (
            <Image
              key={item.id}
              src={item.url}
              alt="굿즈 이미지"
              onClick={() => onClickImage(item)}
              width={0}
              height={0}
              sizes="100vw"
              className={`h-[30%] w-[30%] aspect-square object-cover object-center rounded-2xl ${item.id === selectedImage.id ? '' : 'brightness-75'}`}
            />
          ))}
        </div>
      )}
    </>
  )
}
