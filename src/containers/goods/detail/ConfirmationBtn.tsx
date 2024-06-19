'use client'

import { useState } from 'react'
import ConfirmModal from './ConfirmModal'

export default function ConfirmationBtn({
  biddingConfirm,
}: {
  biddingConfirm: (biddingData: FormData) => void
}) {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        className="fixed left-1/2 -translate-x-1/2 z-20 w-[calc(100%-40px)] py-[15px] text-center text-[25px] bg-[#319AFD] text-white rounded-full bottom-[15px] opacity-90 shadow-[0px_5px_5px_2px_rgba(0,0,0,0.3)]"
        onClick={() => setVisible(true)}
      >
        낙찰하기
      </button>
      {visible && (
        <ConfirmModal setVisible={setVisible} biddingConfirm={biddingConfirm} />
      )}
    </>
  )
}
