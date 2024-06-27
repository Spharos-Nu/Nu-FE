// import Link from 'next/link'
import { LiveAndHotType } from '@/types/mainType'
import LiveAndHotItem from './LiveAndHotItem'

export default function HotInterest({
  hotData,
}: {
  hotData: LiveAndHotType[]
}) {
  return (
    <div className="py-[30px] px-[20px]">
      <div className="flex justify-between">
        <div className="flex">
          <p className="px-[10px] border-2 text-[#FF8402] font-bold border-[#FF8402] items-center rounded-full leading-[17px] truncate content-center text-center">
            HOT
          </p>
          <h1 className="px-[10px] text-[#2B74B9] text-[17px] font-bold truncate">
            이번주 가장 관심을 많이 받은 굿즈
          </h1>
        </div>
        {/* {hotData.length > 0 && (
          <Link href="/" className="truncate">
            모두보기
          </Link>
        )} */}
      </div>
      {hotData.length === 0 && (
        <div className="my-[60px] text-center text-[#A5A5A5] text-[15px]">
          <p>마음에 드는 굿즈에 좋아요를 눌러보세요!</p>
        </div>
      )}
      {hotData.length > 0 && (
        <div className="mt-[15px] whitespace-nowrap overflow-x-auto flex-row">
          {hotData.map((item: LiveAndHotType) => (
            <LiveAndHotItem key={item.goodsCode} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
