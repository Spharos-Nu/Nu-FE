'use client'

import { useEffect } from 'react'
import { useToastStore } from './store'

export default function Toast() {
  const { toastMessage, isVisible, hideToast } = useToastStore()

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast()
      }, 2000)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`fixed z-[9999] min-h-12 w-full flex items-center justify-center left-0 bottom-2.5 animate-[slide-top_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both] ${isVisible ? '' : 'animate-[fade-out_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]'}`}
    >
      <div className="bg-gray-800 opacity-80 w-[90%] h-full flex items-center justify-center rounded-[10px] py-3">
        <p
          className="text-sm font-normal block text-white whitespace-pre-wrap"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: toastMessage }}
        />
      </div>
    </div>
  )
}
