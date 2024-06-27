'use client'

import Image from 'next/image'

export default function ChatRoomImage({ goodsCode }: { goodsCode: string }) {
  return (
    <Image
      src="/icons/tempProfile.png"
      alt={goodsCode}
      width={70}
      height={70}
      className="w-full h-full object-cover rounded-full"
    />
  )
}
