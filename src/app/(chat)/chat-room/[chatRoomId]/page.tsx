/* eslint-disable react/jsx-no-bind */
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import ChatView from '@/containers/chat/chat-room/ChatView'
import ChatSender from '@/containers/chat/chat-room/_ChatSender'

export default async function ChatRoomDetailPage({
  params,
}: {
  params: { chatRoomId: string }
}) {
  const session = await getServerSession(options)
  console.log('token ', session?.user.accessToken)

  async function newChat(formData: FormData) {
    'use server'

    const rawFormData = {
      message: formData.get('message') as string,
      chatRoomId: params.chatRoomId,
      receiverUuid: formData.get('receiverUuid'),
      isImage: formData.get('isImage'),
      imageUrl: formData.get('image'),
    }
    if (!rawFormData.message) {
      return
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify(rawFormData),
    })

    const data = await response.json()

    if (!response.ok) {
      // console.log("여기까진 나오고",response.json())
      throw new Error(data.message || '메시지 포스트 API 실패')
    }
    console.log('메시지 포스트 API 성공')
    revalidatePath(`/chat/${params.chatRoomId}`)
  }

  return (
    <main className="flex flex-col h-[100vh] w-full max-w-4xl mx-auto bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden">
      <ChatView chatRoomId={params.chatRoomId} />
      <div className="border-t border-gray-200 dark:border-gray-800 p-4" />
      <ChatSender newChat={newChat} />
    </main>
  )
}
