// import Link from 'next/link'
import { SoonAndHitsType } from '@/types/mainType'
import SoonAndHitsItem from './SoonAndHitsItem'

export default function Hits({ hitsData }: { hitsData: SoonAndHitsType[] }) {
  return (
    <div className="py-[30px] px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="flex justify-center px-[10px] border-2 text-orange-400 font-bold border-orange-400 rounded-full items-center content-center truncate">
            HITS
          </p>
          <h1 className="flex justify-center items-center px-[10px] text-sky-600 text-[17px] font-bold truncate">
            가장 많이 조회된 굿즈
          </h1>
        </div>
        {/* {hitsData.length > 0 && (
          <Link href="/" className="truncate">
            모두보기
          </Link>
        )} */}
      </div>
      <div className="pt-[10px] pb-[20px] flex flex-wrap gap-[10px] justify-center">
        {hitsData.length === 0 && (
          <div className="my-[60px] text-center text-[#A5A5A5] text-[15px]">
            <p>등록된 굿즈를 둘러보세요!</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {hitsData.map((item: SoonAndHitsType) => (
            <SoonAndHitsItem key={item.goodsCode} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
