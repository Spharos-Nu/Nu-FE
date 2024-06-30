'use client'

import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Animation from '@/public/svgs/category/animation.svg'
import AnimationColor from '@/public/svgs/category/animationColor.svg'
import AnimationGo from '@/public/svgs/category/animationGo.svg'
import Baseball from '@/public/svgs/category/baseball.svg'
import BaseballColor from '@/public/svgs/category/baseballColor.svg'
import BaseballGo from '@/public/svgs/category/baseballGo.svg'
import Kpop from '@/public/svgs/category/kpop.svg'
import KpopColor from '@/public/svgs/category/kpopColor.svg'
import KpopGo from '@/public/svgs/category/kpopGo.svg'
import { useLocalCategoryStore } from './store'

export default function MainCategory() {
  const { data: session } = useSession()
  const { categoryName, setCategory } = useLocalCategoryStore()
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

  const handleCategory = (item: string) => {
    localStorage.setItem('category', item)
    setCategory(item)
  }

  useEffect(() => {
    const categoryFromStorage = localStorage.getItem('category')
    console.log('categoryFromStorage', categoryFromStorage)
    if (categoryFromStorage !== null) {
      setCategory(categoryFromStorage)

      router.push(`/${categoryName}`)
    } else if (session) {
      const category = session.user.favoriteCategory
      if (category === '아이돌') redirect('/idol')
      else if (category === '야구') redirect('/baseball')
      else if (category === '애니메이션') redirect('/animation')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName])

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 overflow-scroll bg-white">
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
            {itemPosition[1].pos ? <BaseballColor /> : <Baseball />}
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
            {itemPosition[2].pos ? <AnimationColor /> : <Animation />}
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
  )
}
