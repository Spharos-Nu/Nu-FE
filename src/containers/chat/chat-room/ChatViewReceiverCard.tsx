'use client'

import React from 'react'
import ChatProfileImage from './ChatProfileImage'

interface ChatDataProps {
  message: string
  createdAt: string
}

function ChatViewReceiverCard({ chatData }: { chatData: ChatDataProps }) {
  const date = new Date(chatData.createdAt)
  const hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  // const seconds = date.getSeconds()

  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10">
        <ChatProfileImage userUuid="2222" />
      </div>
      <div className="text-sm w-full">
        {/* <div className="text-xs">{chatData.senderUuid}</div> */}
        {/* <NickName userUuid={chatData.senderUuid} /> */}
        <div className="flex items-end gap-2">
          <div className="bg-gray-100 px-4 py-3 rounded-tr-lg rounded-bl-lg rounded-br-lg break-words w-fit">
            {chatData.message}
          </div>
          <div className="text-xs mb-3 text-gray-400">{`${hours}:${minutes}`}</div>
        </div>
      </div>
    </div>
  )
}

export default ChatViewReceiverCard
