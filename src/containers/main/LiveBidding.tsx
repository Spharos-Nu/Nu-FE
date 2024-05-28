import Data from '@/dummydata/liveBidding.json'
import { LiveAndHotType } from '@/types/LiveAndHotType'
import LiveAndHotItem from './LiveAndHotItem'

export default function LiveBidding() {
  const data = Data.goodsList

  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="px-[10px] border-2 text-[#FF2D46] font-bold border-[#FF2D46] rounded-full leading-[17px] content-center">
            LIVE
          </p>
          <h1 className="px-[10px] text-[#2B74B9] text-[17px] font-bold">
            현재 입찰 진행 중인 굿즈
          </h1>
        </div>
        <div className="">모두보기</div>
      </div>
      <div className="mt-[15px] whitespace-nowrap overflow-x-auto flex-row">
        {data.map((item: LiveAndHotType) => (
          <LiveAndHotItem key={item.goodsCode} item={item} />
        ))}
      </div>
    </div>
  )
}
