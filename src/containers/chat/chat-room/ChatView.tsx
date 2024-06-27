'use client'

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/Btn/button'
import ChatRoomImage from '../chat-list/ChatRoomImage'
import ChatViewReceiverCard from './ChatViewReceiverCard'
import ChatViewSenderCard from './ChatViewSenderCard'

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export interface ChatDataType {
  chatMessageId: string
  chatRoomId: string
  isImage: boolean
  message: string
  imageUrl: string
  senderUuid: string
  receiverUuid: string
  createdAt: string
}

export default function ChatView({ chatRoomId }: { chatRoomId: string }) {
  const router = useRouter()
  const session = useSession()
  const [chatData, setChatData] = useState<ChatDataType[]>([] as ChatDataType[])

  const chatContainerRef = useRef(null)
  const lastMessageRef = useRef(null)

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatData])

  useEffect(() => {
    if (!chatRoomId) return

    const EventSource = EventSourcePolyfill || NativeEventSource
    const token = session.data?.user.accessToken

    if (session && token !== undefined) {
      const connectToSSE = () => {
        const eventSource = new EventSource(
          `${process.env.NEXT_PUBLIC_API}/v1/chat/${chatRoomId}`,
          {
            headers: {
              Authorization: token,
            },
          },
        )

        eventSource.onmessage = (event) => {
          const newMessage = JSON.parse(event.data)
          console.log('새로운 메시지 도착: ', newMessage.message)
          setChatData((prevData) => [...prevData, newMessage])
        }

        eventSource.onerror = (err) => {
          console.error('이벤트소스 onError ', err)
          eventSource.close()

          // Reconnect after a delay
          setTimeout(() => {
            connectToSSE()
          }, 5000) // Reconnect after 5 seconds
        }

        return eventSource
      }

      const eventSource = connectToSSE()

      // Cleanup on component unmount
      // eslint-disable-next-line consistent-return
      return () => {
        eventSource.close()
      }
    }
  }, [chatRoomId, session])

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            {/* <ChatProfileImage userUuid="1111" /> */}
            <ChatRoomImage goodsCode="1111" />
          </div>
          <div>
            <div className="font-medium">Goods Duck</div>
            {/* <NickName userUuid={chatterUuid} /> */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="w-5 h-5" />
        </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => router.back()}
          >
            <CloseIcon />
          </Button>
        </div>
      </header>
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {chatData.map((chat: ChatDataType, idx: number) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            ref={idx === chatData.length - 1 ? lastMessageRef : null}
          >
            {chat?.senderUuid === session.data?.user.uuid ? (
              <ChatViewSenderCard chatData={chat} />
            ) : (
              <ChatViewReceiverCard chatData={chat} />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

// function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   )
// }
// function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }
