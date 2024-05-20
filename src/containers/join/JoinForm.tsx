'use client'

import { useState } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'

export default function JoinForm() {
  const [currentIdx, setCurrentIdx] = useState<number>(0)

  const handleSwipeLeft = () => {
    setCurrentIdx(1)
  }

  const handleSwipeRight = () => {
    setCurrentIdx(0)
  }

  return (
    <div className="w-full h-full flex">
      {currentIdx === 0 ? (
        <div className="w-full flex-shrink-0">
          <FirstForm onSwipeLeft={handleSwipeLeft} />
        </div>
      ) : (
        <div className="w-full flex-shrink-0">
          <SecondForm onSwipeRight={handleSwipeRight} />
        </div>
      )}
    </div>
  )
}
