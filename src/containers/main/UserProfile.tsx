'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import img from '@/dummydata/profile.png'

export default function UserProfile() {
  const { data: session } = useSession()
  return (
    <div className="flex">
      <Image
        src={session?.user.image || img}
        alt="profile"
        width={55}
        height={55}
        className="rounded-full aspect-square"
      />
      <div className="pl-[20px] content-center items-center">
        <p className="text-[#919BB2] text-[15px]">Hello!</p>
        <p className="text-[18px]">{session?.user.nickname}</p>
      </div>
    </div>
  )
}
