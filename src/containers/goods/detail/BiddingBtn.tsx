'use client'

import { useState } from 'react'
import BiddingModal from './BiddingModal'

export default function BiddingBtn({
  bidding,
}: {
  bidding: (biddingData: FormData) => void
}) {
  const [visible, setVisible] = useState<boolean>(false)
  // const hadnleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  // }

  return (
    <form action={bidding}>
      <div
        role="none"
        className="fixed left-1/2 -translate-x-1/2 z-20 w-[calc(100%-40px)] py-[15px] text-center text-[25px] bg-[#319AFD] text-white rounded-full bottom-[15px] opacity-90 shadow-[0px_5px_5px_2px_rgba(0,0,0,0.3)]"
        onClick={() => setVisible(true)}
      >
        입찰하기
      </div>
      {visible && <BiddingModal setVisible={setVisible} />}
    </form>
  )
}
