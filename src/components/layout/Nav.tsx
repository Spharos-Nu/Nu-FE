'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Chat from '@/public/svgs/nav/chat.svg'
import FullInquiry from '@/public/svgs/nav/fullinquiry.svg'
import Home from '@/public/svgs/nav/home.svg'
import Like from '@/public/svgs/nav/like.svg'
import Mypage from '@/public/svgs/nav/mypage.svg'
import { useNavStore } from './store'

export default function Nav() {
  const pathname = usePathname()
  const startPath = usePathname().split('/')[1]
  const { currentPage, setCurrentPage } = useNavStore()
  const isActive = pathname.startsWith('/mypage') && pathname !== '/mypage/like'

  useEffect(() => {
    if (
      startPath === 'animation' ||
      startPath === 'idol' ||
      startPath === 'baseball'
    ) {
      setCurrentPage(startPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPath, pathname])

  if (startPath === 'goods' || pathname === '/') return null

  return (
    <nav className="w-11/12 m-auto left-0 right-0 z-20 px-[15px] fixed grid grid-cols-5 bottom-5 bg-[#0083FF] h-[66px] tracking-[-0.05rem] text-[13px] rounded-full content-center opacity-80 shadow-[0px_5px_5px_2px_rgba(0,0,0,0.3)]">
      <div className="text-center">
        <Link href={`/${currentPage}`}>
          <div
            className={`inline-block ${pathname === '/animation' || pathname === '/idol' || pathname === '/baseball' ? 'opacity-100' : 'opacity-50'}`}
          >
            <Home />
          </div>
          <div
            className={`text-white ${pathname === '/animation' || pathname === '/idol' || pathname === '/baseball' ? 'opacity-100' : 'opacity-50'}`}
          >
            홈
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href={`/${currentPage}/goods`}>
          <div
            className={`inline-block ${pathname === '/goods' ? ' opacity-100' : 'opacity-50'}`}
          >
            <FullInquiry />
          </div>
          <div
            className={`text-white ${pathname === '/goods' ? ' opacity-100' : 'opacity-50'}`}
          >
            전체
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/mypage/like">
          <div
            className={`inline-block ${pathname === '/mypage/like' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Like />
          </div>
          <div
            className={`text-white ${pathname === '/mypage/like' ? ' opacity-100' : 'opacity-50'}`}
          >
            관심
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/chat-list">
          <div
            className={`inline-block ${pathname === '/chat-list' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Chat />
          </div>
          <div
            className={`text-white ${pathname === '/chat-list' ? ' opacity-100' : 'opacity-50'}`}
          >
            채팅
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/mypage">
          <div
            className={`inline-block ${isActive ? ' opacity-100' : 'opacity-50'}`}
          >
            <Mypage />
          </div>
          <div
            className={`text-white ${isActive ? ' opacity-100' : 'opacity-50'}`}
          >
            내정보
          </div>
        </Link>
      </div>
    </nav>
  )
}
