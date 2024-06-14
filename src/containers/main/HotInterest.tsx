import Link from 'next/link'
import Data from '@/dummydata/liveBidding.json'
import { LiveAndHotType } from '@/types/mainType'
import LiveAndHotItem from './LiveAndHotItem'

export default function HotInterest() {
  const data = Data.goodsList

  return (
    <div className="py-[30px] px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="px-[10px] border-2 text-[#FF8402] font-bold border-[#FF8402] rounded-full leading-[17px] truncate content-center text-center">
            HOT
          </p>
          <h1 className="px-[10px] text-[#2B74B9] text-[17px] font-bold truncate">
            이번주 가장 관심을 많이 받은 굿즈
          </h1>
        </div>
        <Link href="/" className="truncate">
          모두보기
        </Link>
      </div>
      <div className="mt-[15px] whitespace-nowrap overflow-x-auto flex-row">
        {data.map((item: LiveAndHotType) => (
          <LiveAndHotItem key={item.goodsCode} item={item} />
        ))}
      </div>
    </div>
  )
}
