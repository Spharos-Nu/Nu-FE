import React from 'react'
import BiddingDuck from '@/public/svgs/duck/biddingDuck.svg'
import BiddingModalBtn from '@/public/svgs/icon/biddingModalBtn.svg'

export default function BiddingModal({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="fixed z-40 w-screen h-screen top-0 left-0 bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-0 h-[47%] w-screen">
        <div className="absolute z-[60] left-1/2 -translate-x-1/2">
          <BiddingDuck />
        </div>
        <div className="fixed z-50 w-screen h-[40%] bg-white bottom-0 left-0 rounded-t-3xl">
          <div
            className="flex justify-end mt-[20px] mr-[20px]"
            onClick={() => setVisible(false)}
            role="none"
          >
            <BiddingModalBtn />
          </div>
          <div>
            <label htmlFor="biddingPrice">
              <span className="hidden">입찰 금액</span>
              <input
                type="number"
                className="w-[calc(100%-50px)] h-[60px] mt-[50px] mx-[20px] px-[20px] bg-[#F7F7F7] rounded-full placeholder:text-[#70a3d2]"
                placeholder="입찰가를 입력해주세요"
                name="biddingPrice"
                id="biddingPrice"
              />
            </label>
            <button
              type="submit"
              className="w-[calc(100%-50px)] h-[60px] bg-[#319AFD] text-white rounded-full mt-[30px] mx-[20px]"
            >
              입찰하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
