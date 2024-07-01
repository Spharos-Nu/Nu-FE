// import Link from 'next/link'
import { LiveAndHotType } from '@/types/mainType'
import LiveAndHotItem from './LiveAndHotItem'

export default function LiveBidding({
  liveData,
}: {
  liveData: LiveAndHotType[]
}) {
  return (
    <div className="px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="flex justify-center px-[10px] border-2 text-red-500 font-bold border-red-500 items-center rounded-full content-center text-center truncate">
            LIVE
          </p>
          <h1 className="flex justify-center items-center px-[10px] text-sky-600 text-[17px] font-bold truncate">
            현재 경매 진행 중인 굿즈
          </h1>
        </div>
        {/* {liveData.length > 0 && (
          <Link href="/" className="truncate">
            모두보기
          </Link>
        )} */}
      </div>
      {liveData.length === 0 && (
        <div className="my-[60px] text-center text-[#A5A5A5] text-[15px]">
          <p>현재 경매 진행 중인 굿즈가 없습니다.</p>
          <p>굿즈를 등록해보세요!</p>
        </div>
      )}
      {liveData.length > 0 && (
        <div className="mt-[15px] whitespace-nowrap overflow-x-auto flex-row">
          {liveData.map((item: LiveAndHotType) => (
            <LiveAndHotItem key={item.goodsCode} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
