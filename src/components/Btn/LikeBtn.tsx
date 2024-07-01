import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia'
import { useToastStore } from '@/components/Toast/store'
import { addLike, deleteLike, getLikeWhether } from '@/utils/mainApiActions'

export default function LikeBtn({ goodsCode }: { goodsCode: string }) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const { showToast } = useToastStore()
  const pathname = usePathname()

  const handleLike = async () => {
    if (session?.user.accessToken === undefined) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    } else {
      const whether = await getLikeWhether(goodsCode)

      if (whether.status === 200) {
        if (isLiked) {
          const data = await deleteLike(goodsCode)
          if (data.status === 200) {
            setIsLiked(!isLiked)
          }
        } else {
          const data = await addLike(goodsCode)
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
        const LikeData = await getLikeWhether(goodsCode)
        setIsLiked(LikeData.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <button
      type="button"
      onClick={handleLike}
      className={`absolute z-10 ${pathname.startsWith('/goods/') ? 'right-0' : 'bottom-2 right-2'}`}
    >
      {isLiked ? (
        <LiaHeartSolid className="w-[30px] h-[32px] ml-[13px] text-red-500" />
      ) : (
        <LiaHeart className="w-[30px] h-[32px] ml-[13px] text-stone-400" />
      )}
    </button>
  )
}
