import Link from 'next/link'
import { PiSirenLight, PiStorefrontLight } from 'react-icons/pi'
import { SlArrowRight } from 'react-icons/sl'
import EtcDuck from '@/public/svgs/duck/etcDuck.svg'

export default function EtcArea({ goodsCode }: { goodsCode: number }) {
  return (
    <div className="mt-[30px] pt-[30px] mx-[20px] pb-[100px]">
      <div className="flex justify-center">
        <EtcDuck />
      </div>
      <div className="flex justify-between gap-[7px] mt-[10px] text-center">
        <div className="py-[20px] w-full border rounded-2xl border-[#319AFD]">
          <p className="text-[14px] text-[#979797]">조회수</p>
          <p className="text-[17px] ">1000</p>
        </div>
        <div className="py-[20px] w-full border rounded-2xl border-[#319AFD]">
          <p className="text-[14px] text-[#979797]">좋아요</p>
          <p className="text-[17px]">1000</p>
        </div>
        <div className="py-[20px] w-full border rounded-2xl border-[#319AFD]">
          <p className="text-[14px] text-[#979797]">입찰</p>
          <p className="text-[17px]">1000</p>
        </div>
      </div>
      <Link
        href={`/seller?goodsCode=${goodsCode}`}
        className="flex justify-between relative mt-[50px]"
      >
        <div className="flex">
          <PiStorefrontLight className="w-[23px] h-[23px]" />
          <p className="content-center pl-[10px] text-[15px] tracking-[-0.05rem]">
            판매자 정보
          </p>
        </div>
        <SlArrowRight className="absolute top-1/2 right-0 -translate-y-1/2" />
      </Link>
      <Link
        href={`/goods-complain?goodsCode=${goodsCode}`}
        className="mt-[20px] flex justify-between relative"
      >
        <div className="flex">
          <PiSirenLight className="w-[25px] h-[25px]" />
          <p className="content-center pl-[10px] text-[15px] tracking-[-0.05rem]">
            상품에 문제가 있는 경우 알려주세요.
          </p>
        </div>
        <SlArrowRight className="absolute top-1/2 right-0 -translate-y-1/2 w-[15px] h-[15px]" />
      </Link>
    </div>
  )
}
