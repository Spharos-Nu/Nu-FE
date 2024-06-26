import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { GoodsCardType } from '@/types/goodsType'
import {
  addLike,
  deleteLike,
  getGoodsImages,
  getLikeWhether,
} from '@/utils/mainApiActions'

export default function GoodsItem({
  goodsItemData,
}: {
  goodsItemData: GoodsCardType
}) {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')
  const comment = '입찰이 종료된\n상품입니다.'

  const handleLike = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else if (isLiked) {
      const data = await deleteLike(goodsItemData.goodsCode)
      if (data.status === 200) {
        setIsLiked(!isLiked)
      } else {
        console.log(data.message)
      }
    } else {
      const data = await addLike(goodsItemData.goodsCode)
      if (data.status === 200) {
        setIsLiked(!isLiked)
      } else {
        console.log(data.message)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (session) {
        const LikeData = await getLikeWhether(goodsItemData.goodsCode)
        setIsLiked(LikeData.result)
      }
      const ImageData = await getGoodsImages(goodsItemData.goodsCode)

      setImage(ImageData.result)
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
      <Link href={`/goods/${goodsItemData.goodsCode}`}>
        <p
          className={`absolute z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[17px] whitespace-pre-line ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? 'hidden' : ''}`}
        >
          {comment}
        </p>
        {image && (
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale'}`}
            alt="굿즈 이미지"
          />
        )}
        {!image && (
          <div className="rounded-t-2xl max-h-[300px] w-full h-[60%] bg-[#F6F6F6] flex items-center justify-center">
            <p className="text-stone-500 text-[17px] ">
              이미지를 불러오지 못했어요
            </p>
          </div>
        )}
        <div className="px-[20px] py-[20px]">
          <p className="truncate">{goodsItemData.goodsName}</p>
          <p>{goodsItemData.minPrice}</p>
          {goodsItemData.tradingStatus === 0 && <p>입찰 전</p>}
          {goodsItemData.tradingStatus === 1 && <p>입찰 중</p>}
          {goodsItemData.tradingStatus >= 2 && <p>입찰종료</p>}
          {goodsItemData.tradingStatus < 2 && (
            <p className="h-[24px] visible" />
          )}
        </div>
      </Link>
    </div>
  )
}
