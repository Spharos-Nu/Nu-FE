'use client'

import Link from 'next/link'
import { useState } from 'react'
import { RxDotsVertical } from 'react-icons/rx'
import BackBtn from '@/components/Btn/BackBtn'

export default function SellerHeader({
  goodsCode,
  seller,
}: {
  goodsCode: string
  seller: string
}) {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className="relative flex h-[50px]">
      <BackBtn />
      <h1 className="leading-[50px] text-[20px] text-center m-auto">
        판매자 프로필
      </h1>
      <button
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 w-[25px] h-[25px] text-[25px]"
        onClick={() => setToggle(!toggle)}
      >
        <span className="hidden">더보기</span>
        <RxDotsVertical className="w-[25px] h-[25px]" />
      </button>
      {toggle && (
        <Link
          href={`/user-complain?seller=${seller}&goodsCode=${goodsCode}`}
          className="absolute top-[50px] right-2 bg-white w-[120px] rounded-lg text-[17px] py-[5px] px-[8px] z-10 shadow-[0px_3px_10px_5px_rgba(0,0,0,0.05)]"
        >
          신고하기
        </Link>
      )}
    </div>
  )
}
