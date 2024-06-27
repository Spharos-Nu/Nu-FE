'use client'

import Image from 'next/image'

export default function ChatProfileImage({ userUuid }: { userUuid: string }) {
  return (
    <Image
      src="/icons/icon-192x192.png"
      width={90}
      height={70}
      alt={userUuid}
      className="w-full h-full object-cover rounded-full"
    />
  )
}
