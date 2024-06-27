'use client'

import Image from 'next/image'

export default function ChatRoomPreview() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm mx-3 my-3 p-4">
      <div className="flex items-center">
        <div className="w-3/10">
          <Image
            src="/profile-image.jpg"
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="w-7/10 space-y-1">
          <p>채팅방 이름</p>
          <p>마지막 메시지 내용</p>
          <p>메시지 보낸 시간</p>
        </div>
      </div>
    </div>
  )
}
