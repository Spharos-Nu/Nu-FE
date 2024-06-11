'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Chat from '@/public/svgs/nav/chat.svg'
import FullInquiry from '@/public/svgs/nav/fullinquiry.svg'
import Home from '@/public/svgs/nav/home.svg'
import Like from '@/public/svgs/nav/like.svg'
import Mypage from '@/public/svgs/nav/mypage.svg'

export default function Nav() {
  const pathname = usePathname()

  return (
    <div className="w-11/12 m-auto left-0 right-0 z-10 px-[15px] fixed grid grid-cols-5 bottom-5 bg-[#0083FF] h-[66px] tracking-[-0.05rem] text-[13px] rounded-full content-center opacity-80 shadow-[0px_5px_5px_2px_rgba(0,0,0,0.3)]">
      <div className="text-center">
        <Link href="/">
          <div
            className={`inline-block ${pathname === '/' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Home />
          </div>
          <div
            className={`text-white ${pathname === '/' ? ' opacity-100' : 'opacity-50'}`}
          >
            홈
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/goods">
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
        <Link href="/">
          <div
            className={`inline-block ${pathname === '/like' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Like />
          </div>
          <div
            className={`text-white ${pathname === '/like' ? ' opacity-100' : 'opacity-50'}`}
          >
            관심
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/">
          <div
            className={`inline-block ${pathname === '/chat' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Chat />
          </div>
          <div
            className={`text-white ${pathname === '/chat' ? ' opacity-100' : 'opacity-50'}`}
          >
            채팅
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link href="/mypage">
          <div
            className={`inline-block ${pathname === '/mypage' ? ' opacity-100' : 'opacity-50'}`}
          >
            <Mypage />
          </div>
          <div
            className={`text-white ${pathname === '/mypage' ? ' opacity-100' : 'opacity-50'}`}
          >
            내정보
          </div>
        </Link>
      </div>
    </div>
  )
}
