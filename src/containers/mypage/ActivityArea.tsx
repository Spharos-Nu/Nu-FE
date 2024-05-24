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
    <div className="mx-7 mt-7 mb-14 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 활동</span>
      <div className="mt-1">
        <Link href="/" className="mx-4 my-5 flex items-center">
          <FaHeart className="w-4 h-4 mr-3" />
          좋아요
        </Link>
        <div className="mx-4 my-5" aria-label="로그아웃">
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
        <Link href="/" className="mx-4 my-5 flex items-center">
          <FaGear className="w-4 h-4 mr-3" />
          설정
        </Link>
      </div>
    </div>
  )
}
