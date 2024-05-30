'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useModalStore } from '@/containers/member/join/store'

export default function Modal({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useModalStore()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="absolute w-screen h-screen flex justify-center items-center z-[1000]">
      {children}
    </div>,
    document.getElementById('modal-root')!,
  )
}
