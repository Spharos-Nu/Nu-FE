/* eslint-disable react/jsx-no-bind */
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import ChatView from '@/containers/chat/chat-room/ChatView'
import GoToReviewBtn from '@/containers/chat/chat-room/GoToReviewBtn'
import ChatSender from '@/containers/chat/chat-room/_ChatSender'

export default async function ChatRoomDetailPage({
  params,
  searchParams,
}: {
  params: { chatRoomId: string }
  searchParams: { [key: string]: string }
}) {
  const session = await getServerSession(options)
  const { chatRoomId } = params
  const goodsCode = searchParams.goodsCode ? String(searchParams.goodsCode) : ''
  const receiverUuid = searchParams.receiverUuid
    ? String(searchParams.receiverUuid)
    : ''

  async function newChat(formData: FormData) {
    'use server'

    const rawFormData = {
      chatRoomId,
      receiverUuid,
      message: formData.get('message') as string,
      isImage: formData.get('isImage'),
      imageUrl: formData.get('image'),
      inOut: formData.get('inOut'),
    }
    if (!rawFormData.message && rawFormData.inOut === '') {
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
      throw new Error(data.message || '메시지 포스트 API 실패')
    }
    revalidatePath(`/chat/${params.chatRoomId}`)
  }

  return (
    <main className="flex flex-col h-[100vh] w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <ChatView chatRoomId={params.chatRoomId} goodsCode={goodsCode} />
      <div className="border-t border-gray-100" />
      <GoToReviewBtn goodsCode={goodsCode} receiverUuid={receiverUuid} />
      <ChatSender newChat={newChat} receiverUuid={receiverUuid} />
    </main>
  )
}
