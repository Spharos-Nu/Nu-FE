import EtcDuck from '@/public/svgs/duck/etcDuck.svg'

export default function ToTalArea({
  likeCount,
  viewCount,
  biddingCount,
}: {
  likeCount: number
  viewCount: number
  biddingCount: number
}) {
  return (
    <div className="mt-[30px] pt-[30px] mx-[20px]">
      <div className="flex justify-center">
        <EtcDuck />
      </div>
      <div className="flex justify-between gap-[7px] mt-[10px] text-center">
        <div className="py-[20px] w-full border rounded-2xl border-blue-400">
          <p className="text-[14px] text-gray-400">조회수</p>
          <p className="text-[17px] ">{viewCount.toLocaleString()}</p>
        </div>
        <div className="py-[20px] w-full border rounded-2xl border-blue-400">
          <p className="text-[14px] text-gray-400">좋아요</p>
          <p className="text-[17px]">{likeCount.toLocaleString()}</p>
        </div>
        <div className="py-[20px] w-full border rounded-2xl border-blue-400">
          <p className="text-[14px] text-gray-400">입찰</p>
          <p className="text-[17px]">{biddingCount.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
