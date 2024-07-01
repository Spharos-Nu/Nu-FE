'use client'

import React, { useEffect, useState } from 'react'
import { SlArrowUp } from 'react-icons/sl'

export default function UpNav() {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 56) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="hover:bg-gray-100 bg-white fixed z-20 right-[20px] bottom-[170px] rounded-full w-[50px] h-[50px] items-center content-center shadow-[0px_5px_5px_2px_rgba(0,0,0,0.07)]">
      <SlArrowUp
        className="w-[20px] h-[20px] m-auto flex justify-center items-center text-sky-600"
        onClick={scrollToTop}
      />
    </div>
  )
}
