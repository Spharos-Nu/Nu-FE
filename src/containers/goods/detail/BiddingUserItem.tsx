import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BiddingPreviewType, BiddingUserType } from '@/types/goodsType'
import { getBiddingUser } from '@/utils/goodsDetailApiActions'

export default function BiddingUserItem({
  item,
}: {
  item: BiddingPreviewType
}) {
  const [bidder, setBidder] = useState<BiddingUserType>({
    userUuid: '',
    nickname: '',
    profileImage: '',
    favCategory: '',
  })

  useEffect(() => {
    const fetchBidder = async () => {
      const bidderData = await getBiddingUser(item.bidderUuid)
      setBidder(bidderData.result)
    }

    fetchBidder()
  }, [item.bidderUuid])

  return (
    <div className="flex mt-[20px]">
      {bidder.profileImage === '' && (
        <Image
          src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full"
        />
      )}
      {bidder.profileImage !== '' && (
        <Image
          src={bidder.profileImage}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full aspect-square"
        />
      )}
      <div className="pl-[15px] content-center">
        <p className="text-[14px] text-zinc-500">{bidder?.nickname}</p>
        <p>
          입찰가 <span className="text-[14px]">{item.price}원</span>
        </p>
      </div>
    </div>
  )
}
