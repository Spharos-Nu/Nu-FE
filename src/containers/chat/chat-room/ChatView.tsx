'use client'

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'
import { SummaryDataType } from '@/types/readApiDataType'
import { getGoodsSummary } from '@/utils/readsApiActions'
import ChatViewReceiverCard from './ChatViewReceiverCard'
import ChatViewSenderCard from './ChatViewSenderCard'

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
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

export default function ChatView({
  chatRoomId,
  goodsCode,
}: {
  chatRoomId: string
  goodsCode: string
}) {
  const router = useRouter()
  const session = useSession()
  const [chatData, setChatData] = useState<ChatDataType[]>([] as ChatDataType[])
  const [data, setData] = useState<SummaryDataType>({
    goodsCode,
    thumbnail: {
      id: 0,
      url: '',
    },
    goodsName: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    tradingStatus: 0,
  })

  const ImageUrl = data.thumbnail
    ? data.thumbnail.url
    : '/icons/tempProfile.png'

  useEffect(() => {
    const getData = async () => {
      const res = await getGoodsSummary(goodsCode)
      if (res.status === 200) {
        setData(res.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chatContainerRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)

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
          // console.log('새로운 메시지 도착: ', newMessage.message)
          setChatData((prevData) => [...prevData, newMessage])
        }

        eventSource.onerror = () => {
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
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center mt-2 gap-4">
          <div className="w-12 h-12">
            <Image
              src={ImageUrl || '/icons/tempProfile.png'}
              alt={goodsCode}
              width={90}
              height={90}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="font-medium">{data.goodsName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Online
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            aria-label="close-button"
            className=""
            onClick={() => router.back()}
          >
            <CloseIcon />
          </button>
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
