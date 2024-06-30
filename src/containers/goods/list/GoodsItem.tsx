import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import BasicImage from '@/public/images/basicImage.png'
import { GoodsCardType } from '@/types/goodsType'
import { addLike, deleteLike, getLikeWhether } from '@/utils/mainApiActions'

export default function GoodsItem({
  goodsItemData,
}: {
  goodsItemData: GoodsCardType
}) {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { showToast } = useToastStore()

  const handleLike = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else {
      const whether = await getLikeWhether(goodsItemData.goodsCode)

      if (whether.status === 200) {
        if (isLiked) {
          const data = await deleteLike(goodsItemData.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        } else {
          const data = await addLike(goodsItemData.goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        }
      } else if (whether.status === 401) {
        showToast('로그인이 필요한 서비스입니다.')
      } else {
        showToast(whether.message)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (session) {
        const LikeData = await getLikeWhether(goodsItemData.goodsCode)
        setIsLiked(LikeData.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (!session) {
  //     router.push(`/login?callbackUrl=${window.location.href}`)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [session])

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
          입찰이 종료된 상품입니다.
        </p>
        {goodsItemData.thumbnail && (
          <Image
            src={goodsItemData.thumbnail.url}
            width={0}
            height={0}
            sizes="100vw"
            className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale'}`}
            alt="굿즈 이미지"
          />
        )}
        {!goodsItemData.thumbnail && (
          <div className="rounded-t-2xl max-h-[300px] w-full h-auto bg-[#F9B23C] flex items-center justify-center">
            <Image
              src={BasicImage}
              width={0}
              height={0}
              sizes="100vw"
              className={`rounded-t-2xl max-h-[300px] w-full h-auto object-cover aspect-square ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale'}`}
              alt="굿즈 이미지"
            />
          </div>
        )}
        <div className="px-[20px] py-[20px]">
          <p className="truncate text-[15px]">{goodsItemData.goodsName}</p>
          <p className="mt-[5px] text-[19px] font-medium">
            {goodsItemData.minPrice.toLocaleString()}{' '}
            <span className="text-[17px]">원</span>
          </p>
          {goodsItemData.tradingStatus === 0 && (
            <p className="text-sm text-stone-500">입찰 전</p>
          )}
          {goodsItemData.tradingStatus === 1 && (
            <p className="text-sm text-stone-500">입찰 중</p>
          )}
          {goodsItemData.tradingStatus >= 2 && (
            <p className="text-sm text-stone-500">입찰종료</p>
          )}
        </div>
      </Link>
    </div>
  )
}
