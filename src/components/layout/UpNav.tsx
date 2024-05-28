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

  return (
    <div>
      {visible && (
        <div
          className="bg-white fixed right-[20px] bottom-[170px] rounded-full w-[50px] h-[50px] content-center"
          onClick={scrollToTop}
          role="none"
        >
          <SlArrowUp className="w-[20px] h-[20px] m-auto text-[#2B74B9]" />
        </div>
      )}
    </div>
  )
}
