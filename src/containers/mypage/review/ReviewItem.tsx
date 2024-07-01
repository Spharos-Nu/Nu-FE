import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ReviewType } from '@/types/etcApiDataType'
import { SummaryDataType } from '@/types/readApiDataType'
import { getGoodsSummary } from '@/utils/readsApiActions'
import ReviewModal from './ReviewModal'

export default function ReviewItem({
  goodsCode,
  review,
}: {
  goodsCode: string
  review: ReviewType
}) {
  const [data, setData] = useState<SummaryDataType>({
    goodsCode,
    thumbnail: {
      id: 0,
      url: '',
    },
    goodsName: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    tradingStatus: 0,
  })
  const [visible, setVisible] = useState<boolean>(false)
  const ImageUrl = data.thumbnail
    ? data.thumbnail.url
    : `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGoodsSummary(goodsCode)
      if (res.status === 200) {
        setData(res.result)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative mx-5 my-5 px-[20px] py-[20px] bg-slate-100 rounded-xl">
      <button type="button" className="flex" onClick={() => setVisible(true)}>
        <Image
          src={ImageUrl}
          alt="굿즈 이미지"
          width={70}
          height={70}
          className="rounded-full aspect-auto"
        />
        <div className="pl-[20px] w-[70%] place-self-center overflow-hidden">
          <p className="flex text-left font-semibold">{data.goodsName}</p>
          <p className="pt-[10px] text-left whitespace-nowrap truncate overflow-hidden">
            {review.content}
          </p>
        </div>
      </button>
      {visible && (
        <ReviewModal review={review} goods={data} setVisible={setVisible} />
      )}
    </div>
  )
}
