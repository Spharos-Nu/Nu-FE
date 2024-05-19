'use client'

// import { useState } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'

export default function JoinForm() {
  // const [currentIdx, setCurrentIdx] = useState<number>(0)

  // const handleSwipeLeft = () => {
  //   setCurrentIdx(1)
  // }

  // const handleSwipeRight = () => {
  //   setCurrentIdx(0)
  // }

  return (
    <div>
      <FirstForm />
      <SecondForm />
    </div>
  )
}
