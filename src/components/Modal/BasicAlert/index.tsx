'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useAlertStore } from '@/components/Modal/store'

interface AlertProps {
  message: string
}

export default function BasicAlert({ message }: AlertProps) {
  const elRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, setAlert } = useAlertStore()

  useEffect(() => {
    elRef.current = document.createElement('div')
    if (elRef.current) {
      document.body.appendChild(elRef.current)
    }

    return () => {
      if (elRef.current) {
        document.body.removeChild(elRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !elRef.current) return null

  return createPortal(
    <div className="fixed w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center left-0 top-0 z-[2000]">
      <p className="text-xs text-gray-500 mx-3 px-4 py-5 h-full">{message}</p>
      <div className="inline-flex w-full rounded-b-lg shadow-sm">
        <button
          type="button"
          className="justify-center px-3 py-2 bg-sky-600 text-sm text-white"
          onClick={() => setAlert(false, '')}
        >
          확인
        </button>
      </div>
    </div>,
    elRef.current,
  )
}
