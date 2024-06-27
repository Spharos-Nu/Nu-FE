'use client'

import { useState } from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { BiddingPreviewType } from '@/types/goodsType'
import BiddingUserItem from './BiddingUserItem'

export default function BiddingPreview({
  biddingList,
}: {
  biddingList: BiddingPreviewType[]
}) {
  const [visible, setVisible] = useState<boolean>(false)

  const biddingCut = biddingList.slice(0, 3)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="mt-[60px] mb-[30px] pt-[20px] pb-[20px] mx-[20px] px-[20px] bg-[#f8f7f7] rounded-2xl">
      <p className="text-blue-400 text-[18px]">입찰 목록</p>
      {biddingList.length === 0 && (
        <p className="pt-[20px]">아직 입찰자가 없습니다.</p>
      )}
      {biddingList.length > 0 && (
        <>
          {biddingCut.map((item) => (
            <BiddingUserItem key={item.bidId} item={item} />
          ))}
          <button
            type="button"
            className="w-full mt-[25px] py-[13px] text-[15px] text-blue-400 border border-blue-400 rounded-2xl"
            onClick={handleClick}
          >
            입찰 목록 더보기
          </button>
        </>
      )}
      {visible && (
        <div className="w-screen h-screen z-30 top-0 left-0 overflow-scroll fixed bg-white">
          <div>
            <button
              className="absolute mt-[20px] pl-[20px]"
              onClick={handleClick}
              type="button"
            >
              <span className="hidden">닫기</span>
              <SlArrowLeft className="w-[25px] h-[25px] text-sky-600" />
            </button>
            <p className="h-[60px] text-[20px] text-sky-600 content-center text-center">
              입찰 목록 전체
            </p>
          </div>
          <div className="my-[20px] pl-[20px]">
            {biddingList.map((item) => (
              <BiddingUserItem key={item.bidId} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
