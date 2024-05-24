'use client'

import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

interface NameType {
  id: number
  title: string
  url: string
}

export default function MyPageHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const [title, setTitle] = useState<string>('마이페이지')

  const headerName: NameType[] = [
    {
      id: 1,
      title: '마이페이지',
      url: '/mypage',
    },
    {
      id: 2,
      title: '입찰한 상품',
      url: '/mypage/bid',
    },
    {
      id: 3,
      title: '등록한 상품',
      url: '/mypage/sell',
    },
    {
      id: 4,
      title: '낙찰된 상품',
      url: '/mypage/winning-bid',
    },
  ]

  useEffect(() => {
    headerName.forEach((element) => {
      if (element.url === pathname) {
        setTitle(element.title)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-[50px] flex">
      <span
        className="w-[15%] flex items-center justify-center"
        aria-label="뒤로가기"
      >
        <FaArrowLeft
          className="w-5 h-5"
          id="뒤로가기"
          onClick={() => router.back()}
        />
      </span>
      <span className="flex-[8] flex items-center justify-center text-lg">
        {title}
      </span>
      <span
        className="flex-[2] flex items-center justify-center"
        aria-label="홈"
      >
        <IoHome className="w-5 h-5" id="홈" onClick={() => signOut} />
      </span>
    </div>
  )
}
