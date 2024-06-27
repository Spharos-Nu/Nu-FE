'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Animation from '@/public/svgs/category/animation.svg'
import AnimationColor from '@/public/svgs/category/animationColor.svg'
import AnimationGo from '@/public/svgs/category/animationGo.svg'
import Baseball from '@/public/svgs/category/baseball.svg'
import BaseballColor from '@/public/svgs/category/baseballColor.svg'
import BaseballGo from '@/public/svgs/category/baseballGo.svg'
import Kpop from '@/public/svgs/category/kpop.svg'
import KpopColor from '@/public/svgs/category/kpopColor.svg'
import KpopGo from '@/public/svgs/category/kpopGo.svg'
import BackBtn from '@/public/svgs/icon/backBtn.svg'

export default function Category({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()
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

  const handleCategory = (name: string) => {
    localStorage.setItem('category', name)

    if (localStorage.getItem('category') === '아이돌') router.push('/idol')
    else if (localStorage.getItem('category') === '야구')
      router.push('/baseball')
    else if (localStorage.getItem('category') === '애니메이션')
      router.push('/animation')

    setVisible(false)
  }

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <div className="overflow-scroll">
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
              {itemPosition[0].pos ? <KpopColor /> : <Kpop />}
            </button>
            {itemPosition[0].pos && (
              <button
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('아이돌')}
              >
                <span className="sr-only">아이돌</span>
                <KpopGo />
              </button>
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
              {itemPosition[1].pos ? <BaseballColor /> : <Baseball />}
            </button>
            {itemPosition[1].pos && (
              <button
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('야구')}
              >
                <span className="sr-only">야구</span>
                <BaseballGo />
              </button>
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
              {itemPosition[2].pos ? <AnimationColor /> : <Animation />}
            </button>
            {itemPosition[2].pos && (
              <button
                className="absolute left-[20px] bottom-[50px]"
                type="button"
                onClick={() => handleCategory('애니메이션')}
              >
                <span className="sr-only">애니메이션</span>
                <AnimationGo />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
