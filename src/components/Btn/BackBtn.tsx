'use client'

import { useRouter } from 'next/navigation'
import { SlArrowLeft } from 'react-icons/sl'

export default function BackBtn() {
  const router = useRouter()

  const back = () => {
    router.back()
  }

  return (
    <div className="absolute top-1/2 -translate-y-1/2 pl-[10px]">
      <SlArrowLeft onClick={back} className="w-[25px] h-[25px]" />
    </div>
  )
}
