import React from 'react'
import { CgClose } from 'react-icons/cg'
import ConfirmDuck from '@/public/svgs/duck/biddingConfirmDuck.svg'

export default function ConfirmModal({
  setVisible,
  biddingConfirm,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  biddingConfirm: (biddingData: FormData) => void
}) {
  return (
    // to do: 입찰자 없을때 form 부분이랑 분기해서 입찰자 없습니다 표시
    <div className="fixed z-40 w-screen h-screen top-0 left-0 bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-0 h-[47%] w-screen">
        <div className="absolute z-[60] left-1/2 -translate-x-1/2">
          <ConfirmDuck />
        </div>
        <div className="fixed z-50 w-screen h-[40%] bg-white bottom-0 left-0 rounded-t-3xl">
          <CgClose
            className="absolute top-5 right-5 text-3xl text-sky-600"
            onClick={() => setVisible(false)}
          />
          <form action={biddingConfirm}>
            <p className="pt-[70px] text-[32px] text-center">
              <span className="text-[22px]">최고 입찰가</span> 000
              <span className="text-[22px]">원</span>
            </p>
            <button
              type="submit"
              className="w-[calc(100%-50px)] h-[60px] border border-sky-600 text-sky-600 text-[17px] rounded-full mt-[40px] mx-[20px]"
            >
              취소하기
            </button>
            <button
              type="submit"
              className="w-[calc(100%-50px)] h-[60px] bg-sky-600 text-white text-[17px] rounded-full mt-[15px] mx-[20px]"
            >
              낙찰하기
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
