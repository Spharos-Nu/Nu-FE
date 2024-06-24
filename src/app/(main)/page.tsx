'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
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

export default function CategoryPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [itemPosition, setItemPosition] = useState([
    { id: 1, pos: false },
    { id: 2, pos: false },
    { id: 3, pos: true },
  ])
  const text = '어떤 굿즈를\n찾아 오셨나요?'

  if (session) {
    const category = session.user.favoriteCategory
    if (category === '아이돌') router.push('/idol')
    else if (category === '야구') router.push('/baseball')
    else if (category === '애니메이션') router.push('/animation')
  } else if (localStorage.getItem('category') === '아이돌') router.push('/idol')
  else if (localStorage.getItem('category') === '야구') router.push('/baseball')
  else if (localStorage.getItem('category') === '애니메이션')
    router.push('/animation')

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
  }

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <h1 className="whitespace-pre-line mt-[70px] ml-[30px] text-[30px] tracking-[-0.1rem] font-semibold leading-[40px]">
        {text}
      </h1>
      <div className="mt-[30px] mx-[20px] relative">
        <div
          className={`relative w-full aspect-square overflow-hidden transition-all ease-out 0.5s ${itemPosition[0].pos ? 'h-auto' : 'h-[145px]'}`}
          role="none"
          onClick={() => handlePosition(1)}
        >
          {itemPosition[0].pos ? <KpopColor /> : <Kpop />}
          <div
            className="absolute left-[20px] top-[220px]"
            role="none"
            onClick={() => handleCategory('아이돌')}
          >
            <KpopGo />
          </div>
        </div>
        <div
          className={`relative w-full aspect-square transition-all ease-out 0.5s ${itemPosition[1].pos ? 'h-auto' : 'h-[145px]'}`}
          role="none"
          onClick={() => handlePosition(2)}
        >
          {itemPosition[1].pos ? <BaseballColor /> : <Baseball />}
          <div
            className="absolute left-[20px] top-[220px]"
            role="none"
            onClick={() => handleCategory('야구')}
          >
            <BaseballGo />
          </div>
        </div>
        <div
          className={`relative w-full aspect-square transition-all ease-out 0.5s ${itemPosition[2].pos ? 'h-auto' : 'h-[160px]'}`}
          role="none"
          onClick={() => handlePosition(3)}
        >
          {itemPosition[2].pos ? <AnimationColor /> : <Animation />}
          <div
            className="absolute left-[20px] top-[220px]"
            role="none"
            onClick={() => handleCategory('애니메이션')}
          >
            <AnimationGo />
          </div>
        </div>
      </div>
    </div>
  )
}
