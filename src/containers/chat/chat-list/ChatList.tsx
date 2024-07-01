'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
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
  const router = useRouter()

  const fetchChatList = async () => {
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
    setData(newData.result)
    setStatusCode(newData.status)
  }

  useEffect(() => {
    if (token && token !== undefined) {
      fetchChatList()
    }
    if (token === undefined) {
      router.push(`/login?callbackUrl=${window?.location.href}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, token])

  const transitions = useTransition<ChatRoomItem, ChatRoomItem>(data, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    // eslint-disable-next-line no-unsafe-optional-chaining
    keys: (item) => item?.chatRoomId + item?.updatedAt, // 고유성을 보장하기 위해 roomId와 updatedAt을 함께 사용
    // config: { tension: animate ? 170 : 0, friction: animate ? 26 : 0 }, // 애니메이션 활성화/비활성화
  })

  if (statusCode !== 200) {
    signOut()
    return (
      <div className="flex flex-col justify-center items-center mt-40 gap-2">
        <Image
          src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel2.png`}
          alt="매너덕2"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50%', height: 'auto' }}
        />
        <div>토큰이 만료되었어요</div>
        <button
          type="button"
          onClick={() => {
            router.push(`/login?callbackUrl=${window.location.href}`)
          }}
        >
          <span className="hover:bg-gray-200 text-blue-500 underline">
            로그인이 필요해요!
          </span>
        </button>
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
              href={`/chat-room/${item.chatRoomId}?goodsCode=${item?.goodsCode}&receiverUuid=${
                item?.members[0]?.userUuid === uuid
                  ? item?.members[1]?.userUuid
                  : item?.members[0]?.userUuid
              }`}
              className="flex justify-center items-start gap-4"
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
                <div className="text-[11px] text-gray-400">
                  {item.updatedAt
                    ? new Date(item.updatedAt).toLocaleString()
                    : '거래를 시작해보세요'}
                </div>
              </div>
            </Link>
            <div className=" absolute right-0 top-3 bg-red-500 rounded-full text-white text-xs px-3 py-2">
              <p className="text-center">
                {item?.members[0]?.userUuid === uuid
                  ? item?.members[0]?.unreadCount
                  : item?.members[1]?.unreadCount}
              </p>
            </div>
          </animated.li>
          <div className="border-t border-gray-200 p-4 mt-5" />
        </>
      ))}
    </ul>
  )
}
