'use client'

import { useEffect } from 'react'
import { useBasicAlertStore } from '@/components/Modal/store'

export default function BasicAlert() {
  const { alertMessage, isVisible, hideAlert, setIsClosed } =
    useBasicAlertStore()

  useEffect(() => {
    setIsClosed(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed w-full h-full bg-black/20 flex justify-center items-center left-0 top-0 z-[2000] ${isVisible ? 'overflow-hidden' : ''}`}
    >
      <div className="mx-10 w-[calc(100%-80px)] relative">
        <div className="w-full bg-white rounded-t-2xl text-xs text-gray-500 px-7 py-5 h-[80px] flex items-center">
          {alertMessage}
        </div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-3 py-2 bg-sky-600 text-sm text-white rounded-b-2xl z-20"
          onClick={hideAlert}
        >
          확인
        </button>
      </div>
    </div>
  )
}
