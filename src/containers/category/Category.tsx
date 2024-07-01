'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLocalCategoryStore } from '@/containers/main/store'
import AnimationGo from '@/public/svgs/category/animationGo.svg'
import BaseballGo from '@/public/svgs/category/baseballGo.svg'
import KpopGo from '@/public/svgs/category/kpopGo.svg'
import BackBtn from '@/public/svgs/icon/backBtn.svg'

export default function Category({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setCategory } = useLocalCategoryStore()
  const [itemPosition, setItemPosition] = useState([
    { id: 1, pos: false },
    { id: 2, pos: false },
    { id: 3, pos: true },
  ])
  const text = '어떤 굿즈를\n찾아 오셨나요?'

  const handlePosition = (id: number) => {
    const newPosition = itemPosition.map((item) => {
      if (item.id === id) {
        return { ...item, pos: true }
      }
      return { ...item, pos: false }
    })

    setItemPosition(newPosition)
  }

  const handleCategory = (item: string) => {
    localStorage.setItem('category', item)
    setCategory(item)
    setVisible(false)
  }

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 mb-[100px] fixed bg-white">
      <div className="w-full h-full overflow-scroll">
        <button
          onClick={() => setVisible(false)}
          type="button"
          className="mt-[20px] pl-[20px]"
        >
          <span className="hidden">뒤로가기</span>
          <BackBtn />
        </button>
        <h1 className="whitespace-pre-line mt-[70px] ml-[30px] text-[30px] tracking-[-0.1rem] font-semibold leading-[40px]">
          {text}
        </h1>
        <div className="mt-[30px] mx-[20px] relative">
          <div
            className={`relative w-full aspect-square transition-all ease-out 0.5s ${itemPosition[0].pos ? 'h-auto' : 'h-[145px]'}`}
          >
            <button
              className="w-full h-full"
              type="button"
              onClick={() => handlePosition(1)}
            >
              {itemPosition[0].pos ? (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/idolColor.png`}
                  alt="idol-color"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/idol.png`}
                  alt="idol"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </button>
            {itemPosition[0].pos && (
              <Link
                href="/idol"
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('idol')}
              >
                <span className="sr-only">아이돌</span>
                <KpopGo />
              </Link>
            )}
          </div>
          <div
            className={`relative w-full aspect-square transition-all ease-out 0.5s ${itemPosition[1].pos ? 'h-auto' : 'h-[145px]'}`}
          >
            <button
              className="w-full h-full"
              type="button"
              onClick={() => handlePosition(2)}
            >
              {itemPosition[1].pos ? (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/baseballColor.png`}
                  alt="baseball-color"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/baseball.png`}
                  alt="baseball"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </button>
            {itemPosition[1].pos && (
              <Link
                href="/baseball"
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('baseball')}
              >
                <span className="sr-only">야구</span>
                <BaseballGo />
              </Link>
            )}
          </div>
          <div
            className={`relative w-full aspect-square transition-all ease-out 0.5s ${itemPosition[2].pos ? 'h-auto' : 'h-[160px]'}`}
          >
            <button
              className="w-full h-full"
              type="button"
              onClick={() => handlePosition(3)}
            >
              {itemPosition[2].pos ? (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/animationColor.png`}
                  alt="animation-color"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <Image
                  src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/animation.png`}
                  alt="animation"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </button>
            {itemPosition[2].pos && (
              <Link
                href="/animation"
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('animation')}
              >
                <span className="sr-only">애니메이션</span>
                <AnimationGo />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
