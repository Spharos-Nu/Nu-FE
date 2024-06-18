'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import ProstrateDuck from '@/public/svgs/duck/prostrateDuck.svg'
import { useErrorStore, useJoinStore, useModalStore } from './store'

export default function JoinSuccessModal() {
  const elRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, setIsOpen } = useModalStore()
  const { resetJoinState } = useJoinStore()
  const { resetErrorState } = useErrorStore()

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
    <div className="fixed w-full h-full bg-black/20 flex justify-center items-center z-[1000]">
      <div className="absolute bottom-0 w-full h-[40%] bg-white py-5 rounded-t-3xl flex flex-col justify-center items-center">
        <ProstrateDuck className="my-5" />
        <div className="my-5 flex flex-col justify-center items-center">
          <p className="font-bold">가입을 축하합니다. 👍</p>
          <p>Welcome{'\n'}Goods-Goods-Duck</p>
        </div>
        <Link
          href="/login"
          className="rounded-3xl bg-sky-600 text-white w-[calc(100%-80px)] h-14 flex justify-center items-center"
          onClick={() => {
            resetJoinState()
            resetErrorState()
            setIsOpen(false)
          }}
        >
          로그인 페이지로
        </Link>
      </div>
    </div>,
    elRef.current,
  )
}
