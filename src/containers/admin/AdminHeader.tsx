'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

export default function AdminHeader() {
  const router = useRouter()

  return (
    <div className="w-full h-[50px] flex">
      <span
        className="w-[15%] flex items-center justify-center"
        aria-label="뒤로가기"
      >
        <FaArrowLeft
          className="hover:bg-gray-200 w-5 h-5"
          id="뒤로가기"
          onClick={() => router.back()}
        />
      </span>
      <span className="flex-[8] flex items-center justify-center text-lg">
        관리자
      </span>
    </div>
  )
}
