'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

export default function MyPageHeader() {
  const router = useRouter()

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
        마이페이지
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
