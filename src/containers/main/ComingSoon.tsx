import Data from '@/dummydata/comingSoon.json'
import { SoonAndHitsType } from '@/types/mainType'
import ComingSoonTitle from './ComingSoonTitle'
import SoonAndHitsItem from './SoonAndHitsItem'

export default function ComingSoon() {
  const data = Data.goodsList

  return (
    <div className="pt-[20px]">
      <ComingSoonTitle />
      <div className="pt-[10px] pb-[20px] px-[20px] grid grid-cols-2 gap-3">
        {data.map((item: SoonAndHitsType) => (
          <SoonAndHitsItem key={item.goodsCode} item={item} />
        ))}
      </div>
    </div>
  )
}
