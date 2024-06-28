import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import BasicImage from '@/public/images/basicImage.png'
import { DetailDataType } from '@/types/goodsApiDataType'
import { getGoodsDetail } from '@/utils/goodsApiActions'
import { addLike, deleteLike } from '@/utils/mainApiActions'

export default function LikeItem({ goodsCode }: { goodsCode: string }) {
  const [data, setData] = useState<DetailDataType>({
    tradingStatus: 0,
    goodsName: '',
    description: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    wishTradeType: '',
    tags: [],
    imageUrls: [],
  })
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { showToast } = useToastStore()

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
      const res = await getGoodsDetail(goodsCode)

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
          입찰이 종료된 상품입니다.
        </p>
        {data.imageUrls[0].url && (
          <Image
            src={data.imageUrls[0].url}
            width={0}
            height={0}
            sizes="100vw"
            className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${data.tradingStatus === 0 || data.tradingStatus === 1 ? '' : 'grayscale'}`}
            alt="굿즈 이미지"
          />
        )}
        {!data.imageUrls[0].url && (
          <div className="rounded-t-2xl max-h-[300px] w-full h-auto bg-[#F9B23C] flex items-center justify-center">
            <Image
              src={BasicImage}
              width={0}
              height={0}
              sizes="100vw"
              className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${data.tradingStatus === 0 || data.tradingStatus === 1 ? '' : 'grayscale'}`}
              alt="굿즈 이미지"
            />
          </div>
        )}
        <div className="px-[20px] py-[20px]">
          <p className="truncate text-[15px]">{data.goodsName}</p>
          <p className="mt-[5px] text-[19px] font-medium">
            {data.minPrice.toLocaleString()}{' '}
            <span className="text-[17px]">원</span>
          </p>
          {data.tradingStatus === 0 && (
            <p className="text-sm text-stone-500">입찰 전</p>
          )}
          {data.tradingStatus === 1 && (
            <p className="text-sm text-stone-500">입찰 중</p>
          )}
          {data.tradingStatus >= 2 && (
            <p className="text-sm text-stone-500">입찰종료</p>
          )}
        </div>
      </Link>
    </div>
  )
}
