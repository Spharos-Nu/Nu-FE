'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useBasicAlertStore } from '@/components/Modal/store'

interface AlertProps {
  message: string
}

export default function BasicAlert({ message }: AlertProps) {
  const elRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, setAlert, setIsClosed } = useBasicAlertStore()

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

  useEffect(() => {
    setIsClosed(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isOpen || !elRef.current) return null

  return createPortal(
    <div className="fixed w-full h-full bg-black/20 flex justify-center items-center left-0 top-0 z-[2000]">
      <div className="mx-10 w-[calc(100%-80px)] relative">
        <div className="w-full bg-white rounded-t-2xl text-xs text-gray-500 px-7 py-5 h-[80px] flex items-center">
          {message}
        </div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-3 py-2 bg-sky-600 text-sm text-white rounded-b-2xl z-20"
          onClick={() => {
            setAlert(false, '')
            setIsClosed(true)
          }}
        >
          확인
        </button>
      </div>
    </div>,
    elRef.current,
  )
}
