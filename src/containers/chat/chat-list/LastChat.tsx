'use client'

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface Chat {
  message: string
}

function LastChat({
  roomId,
  action,
  setAction,
}: {
  roomId: string
  action: boolean
  setAction: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [lastChat, setLastChat] = useState<Chat | null>(null)
  const [newChat, setNewChat] = useState<Chat | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    async function getLastChat() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v1/chat/${roomId}/last`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: session?.user.accessToken,
          },
        },
      )
      const data = await response.json()
      setLastChat(data.result)
    }
    getLastChat()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId])

  useEffect(() => {
    const EventSource = EventSourcePolyfill || NativeEventSource
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API}/v1/chat/${roomId}/new`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: session?.user.accessToken,
        },
        withCredentials: true,
      },
    )

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setNewChat(data.result)
      setAction(!action)
    }
    return () => {
      eventSource.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, action, setAction])

  return (
    <p
      className="text-sm text-blue-600"
      style={{
        width: '80%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {newChat?.message || lastChat?.message || '대화 하러가기'}
    </p>
  )
}

export default LastChat
