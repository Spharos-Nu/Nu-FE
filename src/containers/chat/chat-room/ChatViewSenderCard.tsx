'use client'

import React from 'react'

interface ChatDataProps {
  message: string
  createdAt: string
}

export default function ChatViewSenderCard({
  chatData,
}: {
  chatData: ChatDataProps
}) {
  const date = new Date(chatData.createdAt)
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  // const seconds = date.getSeconds()

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-end gap-2">
        <div className="text-xs text-gray-400">{`${hours}:${minutes}`}</div>
        <div className="bg-blue-100 text-sm px-4 py-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[80%] break-words">
          {chatData.message}
        </div>
      </div>
    </div>
  )
}
