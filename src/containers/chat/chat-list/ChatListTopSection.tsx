'use client'

import Image from 'next/image'

export default function ChatListTopSection() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm mx-3 my-3 p-4">
      <div className="flex items-center space-x-4">
        <div className="w-5/10">
          <Image
            src="/icons/icon-512x512.png"
            alt="Profile Image"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="w-5/10 space-y-0">
          <p>거래가 성사되어 채팅방이 열렸어요!</p>
          <p>에티켓을 지켜 매너덕을 획득하세요</p>
        </div>
      </div>
    </div>
  )
}
