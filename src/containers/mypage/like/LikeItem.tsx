import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import { SummaryDataType } from '@/types/readApiDataType'
import { addLike, deleteLike } from '@/utils/mainApiActions'
import { getGoodsSummary } from '@/utils/readsApiActions'

export default function LikeItem({ goodsCode }: { goodsCode: string }) {
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
  const [isLiked, setIsLiked] = useState<boolean>(true)
  const { showToast } = useToastStore()
  const ImageUrl = data.thumbnail
    ? data.thumbnail.url
    : `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`

  const handleLike = async () => {
    if (isLiked) {
      const res = await deleteLike(goodsCode)
      if (res.status === 200) {
        setIsLiked(!isLiked)
      } else {
        showToast(res.message)
      }
    } else {
      const res = await addLike(goodsCode)
      if (res.status === 200) {
        setIsLiked(!isLiked)
      } else {
        showToast(res.message)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getGoodsSummary(goodsCode)

      if (res.status === 200) {
        setData(res.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative border rounded-2xl">
      <button
        type="button"
        onClick={handleLike}
        className="absolute bottom-2 right-2 z-10"
      >
        {isLiked ? (
          <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-red-500" />
        ) : (
          <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-stone-400" />
        )}
      </button>
      <Link href={`/goods/${goodsCode}`}>
        <p
          className={`absolute z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[17px] whitespace-pre-line ${data.tradingStatus === 0 || data.tradingStatus === 1 ? 'hidden' : ''}`}
        >
          경매가 종료된 상품입니다.
        </p>
        <Image
          src={ImageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${data.tradingStatus === 0 || data.tradingStatus === 1 ? '' : 'grayscale'}`}
          alt="굿즈 이미지"
        />
        <div className="px-[20px] py-[20px]">
          <p className="truncate text-[15px]">{data.goodsName}</p>
          <p className="mt-[5px] text-[19px] font-medium truncate">
            {data.minPrice.toLocaleString()}{' '}
            <span className="text-[17px]">원</span>
          </p>
          {data.tradingStatus === 0 && (
            <p className="text-sm text-stone-500">경매 전</p>
          )}
          {data.tradingStatus === 1 && (
            <p className="text-sm text-stone-500">경매 중</p>
          )}
          {data.tradingStatus >= 2 && (
            <p className="text-sm text-stone-500">경매종료</p>
          )}
        </div>
      </Link>
    </div>
  )
}
