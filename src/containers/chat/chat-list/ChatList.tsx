'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/Chat/Loading'
import NickName from '@/components/Chat/NickName'
import { useTransition, animated } from '@react-spring/web'
import ChatRoomImage from './ChatRoomImage'
import LastChat from './LastChat'

interface ChatRoomItem {
  chatRoomId: string
  updatedAt: string
  goodsCode: string
  members: {
    userUuid: string
    unreadCount: number
  }[]
}

export default function ChatList() {
  const [data, setData] = useState([])
  const [statusCode, setStatusCode] = useState<number>(200)
  const [action, setAction] = useState<boolean>(false)
  const session = useSession()
  const token = session.data?.user.accessToken
  const uuid = session.data?.user.uuid

  const fetchChatList = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v1/chat/rooms/${uuid}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        },
      )
      const newData = await response.json()
      console.log('채팅 목록 받아오기 성공', newData)
      setData(newData.result)
      setStatusCode(newData.status)
    } catch (error) {
      console.error('Error fetching chat rooms:', error)
    }
  }

  useEffect(() => {
    if (token && token !== undefined) {
      fetchChatList()
    }
  }, [action, token])

  const transitions = useTransition<ChatRoomItem, ChatRoomItem>(data, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    // leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    // eslint-disable-next-line no-unsafe-optional-chaining
    keys: (item) => item?.chatRoomId + item?.updatedAt, // 고유성을 보장하기 위해 roomId와 updatedAt을 함께 사용
    // config: { tension: animate ? 170 : 0, friction: animate ? 26 : 0 }, // 애니메이션 활성화/비활성화
  })

  if (token === undefined) {
    return (
      <div className="flex flex-col justify-center items-center mt-40">
        <div>어떤 Duck이신가요? 로그인이 필요해요!</div>
        <Link href="/login">
          <span className="text-gray-500 underline">로그인 바로가기</span>
        </Link>
      </div>
    )
  }

  if (statusCode !== 200) {
    return (
      <div className="flex flex-col justify-center items-center mt-40 gap-2">
        <div>No token. 다시 로그인해주세요</div>
        <Link href="/login">
          <span className="text-blue-500 underline">로그인 바로가기</span>
        </Link>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center mt-40">
        <Loading message="Loading..." />
      </div>
    )
  }

  return (
    <ul className="w-full px-5 py-10 text-black">
      {transitions((style, item) => (
        <>
          <animated.li
            key={item.chatRoomId}
            className={`${style} flex flex-row justify-between relative`}
          >
            <Link
              href={`/chat-room/${item.chatRoomId}`}
              className="flex justify-start gap-4"
            >
              <div className="w-12 h-12">
                <ChatRoomImage goodsCode={item?.goodsCode} />
              </div>
              <div className="">
                {/* <div className="text-xs">{item?.members[1]?.userUuid}</div> */}
                <NickName
                  // className="text-xs"
                  userUuid={
                    item?.members[0]?.userUuid === uuid
                      ? item?.members[1]?.userUuid
                      : item?.members[0]?.userUuid
                  }
                />
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <LastChat
                    roomId={item?.chatRoomId}
                    action={action}
                    setAction={setAction}
                  />
                </div>
                <div className="text-xs mb-3 mt-2">
                  {new Date(item.updatedAt).toLocaleString()}
                </div>
              </div>
            </Link>
            <div className=" absolute right-0 top-0 bg-red-500 rounded-full text-white text-xs px-3 py-2">
              <p className="text-center">
                {item?.members[0]?.userUuid === uuid
                  ? item?.members[0]?.unreadCount
                  : item?.members[1]?.unreadCount}
              </p>
            </div>
          </animated.li>
          <div className="border-t border-gray-200 dark:border-gray-800 p-4 mt-5" />
        </>
      ))}
    </ul>
  )
}
