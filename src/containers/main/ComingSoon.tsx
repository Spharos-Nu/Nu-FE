import { SoonAndHitsType } from '@/types/mainType'
import ComingSoonTitle from './ComingSoonTitle'
import SoonAndHitsItem from './SoonAndHitsItem'

export default function ComingSoon({
  comingSoonData,
}: {
  comingSoonData: SoonAndHitsType[]
}) {
  const sort = 'soon'

  return (
    <div className="pt-[20px]">
      <ComingSoonTitle />
      <div className="pt-[10px] pb-[20px] px-[20px] flex flex-wrap gap-[10px] justify-center">
        {comingSoonData.length === 0 && (
          <div className="my-[60px] text-center text-slate-300 text-[15px]">
            <p>경매 예정인 굿즈가 없습니다.</p>
            <p>굿즈를 등록해보세요!</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {comingSoonData.map((item: SoonAndHitsType) => (
            <SoonAndHitsItem key={item.goodsCode} item={item} sort={sort} />
          ))}
        </div>
      </div>
    </div>
  )
}
