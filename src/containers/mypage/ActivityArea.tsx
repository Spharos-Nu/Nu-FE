'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaHeart, FaGear } from 'react-icons/fa6'

export default function ActivityArea() {
  const logout = () => {
    signOut()
  }

  return (
    <div className="mx-7 mt-7 mb-[100px] rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4 border-b-2">나의 활동</span>
      <div className="mt-1">
        <Link
          href="/mypage/like"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <FaHeart className="w-4 h-4 mr-3" />
          좋아요
        </Link>
        <hr className="my-2 border-gray-300" />
        <div className="hover:bg-gray-200 mx-4 my-5" aria-label="로그아웃">
          <button
            id="로그아웃"
            type="button"
            className="flex items-center"
            onClick={logout}
          >
            <FaSignOutAlt className="w-4 h-4 mr-3" />
            로그아웃
          </button>
        </div>
        <hr className="my-2 border-gray-300" />
        <Link
          href="/mypage/settings"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <FaGear className="w-4 h-4 mr-3" />
          설정
        </Link>
      </div>
    </div>
  )
}
