'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import NonProfileDuck from '@/public/svgs/duck/nonProfileDuck.svg'

export default function InfoArea() {
  const { data: profile } = useSession()

  return (
    <div className="mx-7 my-3 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 정보</span>
      <div className="flex mt-2 ml-3">
        {profile ? (
          <Image src={profile.user.profileImage} alt="프로필 이미지" />
        ) : (
          <NonProfileDuck />
        )}
        <div className="text-sm ml-10">
          <p className="font-bold md-3">{profile?.user.nickname || '닉네임'}</p>
          <p className="my-3">
            카테고리 기본 설정: {profile?.user.favoriteCategory || '카테고리'}
          </p>
        </div>
      </div>
      <div className="flex border-t border-gray-500 text-center pt-2 mx-4 my-3">
        <Link
          className="flex items-center justify-center w-1/2"
          href="/mypage/update-profile"
        >
          정보 수정
        </Link>
        <Link
          className="flex items-center justify-center w-1/2 border-l border-gray-500"
          href="/mypage/update-password"
        >
          비밀번호 재설정
        </Link>
      </div>
    </div>
  )
}
