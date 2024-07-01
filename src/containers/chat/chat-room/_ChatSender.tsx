'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@/components/Btn/button'
import Sending from '@/components/Chat/Sending'
import { useToastStore } from '@/components/Toast/store'

function SendIcon() {
  return (
    <svg
      // {...props}
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function ChatSender({
  newChat,
  receiverUuid,
}: {
  newChat: (formData: FormData) => Promise<void>
  receiverUuid: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const { showToast } = useToastStore()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)

    // 이미지 존재 유무에 따라 isImage 값을 설정
    const image = formData.get('image')
    if (image) {
      formData.set('isImage', 'true')
    } else {
      formData.set('isImage', 'false')
    }

    try {
      setIsLoading(true)
      await newChat(formData)
      form.reset() // 폼 리셋
    } catch (error) {
      form.reset() // 폼 리셋
      showToast('서버가 기다리고 있어요. 잠시 후 다시 시도해주세요')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form ref={formRef} className="relative p-1" onSubmit={handleSubmit}>
      <textarea
        name="message"
        className={`
          flex min-h-[80px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
          rounded-2xl resize-none p-4 border-neutral-200 shadow-sm
        `}
      />
      <input type="hidden" name="image" value="" className="mt-4" />
      <input type="hidden" name="isImage" value="" />
      <input type="hidden" name="inOut" value="" />
      {/* <input type="hidden" name="senderUuid" value="1111" /> */}
      <input type="hidden" name="receiverUuid" value={receiverUuid} />
      {isLoading ? (
        <div className="absolute top-[1.5rem] right-[2rem] w-10 h-10 flex items-center justify-center">
          <Sending />
        </div>
      ) : (
        <Button
          type="submit"
          size="icon"
          className="absolute top-[1rem] right-[1rem] w-12 h-12 flex items-center justify-center rounded-md"
        >
          <SendIcon />
        </Button>
      )}
    </form>
  )
}

export default ChatSender
