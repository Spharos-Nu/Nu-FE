import Link from 'next/link'
import Data from '@/dummydata/comingSoon.json'
import { SoonAndHitsType } from '@/types/SoonAndHitsType'
import SoonAndHitsItem from './SoonAndHitsItem'

export default function Hits() {
  const data = Data.goodsList

  return (
    <div className="py-[30px] px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="px-[10px] border-2 text-[#FF9C40] font-bold border-[#FF9C40] rounded-full leading-[17px] content-center">
            HITS
          </p>
          <h1 className="px-[10px] text-[#2B74B9] text-[17px] font-bold">
            가장 많이 조회된 굿즈
          </h1>
        </div>
        <Link href="/">모두보기</Link>
      </div>
      <div className="pt-[10px] pb-[20px] grid grid-cols-2 gap-3">
        {data.map((item: SoonAndHitsType) => (
          <SoonAndHitsItem key={item.goodsCode} item={item} />
        ))}
      </div>
    </div>
  )
}
