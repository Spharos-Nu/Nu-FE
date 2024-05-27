'use client'

import { usePathname, useRouter } from 'next/navigation'
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
      url: '/mypage/winning',
    },
    {
      id: 5,
      title: '후기',
      url: '/mypage/review',
    },
    {
      id: 6,
      title: '후기 작성',
      url: '/review/[tradeId]',
    },
    {
      id: 7,
      title: '덕포인트 충전',
      url: '/duck-point/charge',
    },
    {
      id: 8,
      title: '덕포인트 사용내역',
      url: '/duck-point/details',
    },
    {
      id: 9,
      title: '프로필 수정',
      url: '/mypage/update-profile',
    },
    {
      id: 10,
      title: '비밀번호 변경',
      url: '/mypage/update-password',
    },
    {
      id: 11,
      title: '설정',
      url: '/mypage/settings',
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
        <IoHome className="w-5 h-5" id="홈" onClick={() => router.push('/')} />
      </span>
    </div>
  )
}
