import Image from 'next/image'
// import { useEffect, useState } from 'react'
import profile from '@/dummydata/profile.png'
import { BiddingPreviewType } from '@/types/goodsType'
// import { BiddingPreviewType, BiddingUserType } from '@/types/goodsType'
// import { getBiddingUser } from '@/utils/goodsDetailApiActions'

export default function BiddingUserItem({
  item,
}: {
  item: BiddingPreviewType
}) {
  // const [bidder, setBidder] = useState<BiddingUserType>()

  // useEffect(() => {
  //   const fetchBidder = async () => {
  //     const bidderData = await getBiddingUser(item.bidderUuid)
  //     setBidder(bidderData)
  //   }

  //   fetchBidder()
  // }, [item.bidderUuid])

  return (
    <div className="flex mt-[20px]">
      <Image
        src={profile}
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="pl-[15px] content-center">
        {/* <p className="text-[14px] text-[#717171]">{bidder?.nickname}</p> */}
        <p>
          입찰가 <span className="text-[14px]">{item.price}원</span>
        </p>
      </div>
    </div>
  )
}
