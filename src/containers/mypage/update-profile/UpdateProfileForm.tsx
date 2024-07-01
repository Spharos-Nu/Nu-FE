'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import UpdateFavCategory from '@/containers/mypage/update-profile/UpdateFavCategory'
import UpdateNickname from '@/containers/mypage/update-profile/UpdateNickname'
import UpdateProfileImage from '@/containers/mypage/update-profile/UpdateProfileImage'
import {
  useErrorStore,
  useProfileStore,
} from '@/containers/mypage/update-profile/store'
import { updateUserProfile } from '@/utils/memberApiActions'
import { deleteProfileImage, uploadProfileImage } from '@/utils/uploadImage'

export default function UpdateProfileForm() {
  const router = useRouter()
  const { data: session, update } = useSession()
  const { profileImage, nickname, favoriteCategory, resetProfile } =
    useProfileStore()
  const { setNicknameError } = useErrorStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let profileImageUrl = ''
    if (session?.user.image && profileImage) {
      await deleteProfileImage(session?.user.image)
      profileImageUrl = await uploadProfileImage(profileImage)
    } else if (session?.user.image) {
      profileImageUrl = session?.user.image
    } else if (profileImage) {
      profileImageUrl = await uploadProfileImage(profileImage)
    }

    const data = await updateUserProfile(
      profileImageUrl,
      nickname || session?.user.nickname,
      favoriteCategory,
    )

    if (session?.user.accessToken === undefined) {
      resetProfile()
      setNicknameError(0)
      router.push(`/login?callbackUrl=${window.location.href}`)
    }
    if (data.status !== 200) {
      return null
    }

    await update({
      ...session?.user,
      image: data.result.profileImage,
      nickname: data.result.nickname,
      favoriteCategory: data.result.favCategory,
    })

    resetProfile()
    setNicknameError(0)
    return router.push('/mypage')
  }

  useEffect(() => {
    setNicknameError(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!session) {
      router.push(`/login?callbackUrl=${window.location.href}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <div>
      <form className="relative" onSubmit={handleSubmit}>
        <UpdateProfileImage />
        <UpdateNickname />
        <UpdateFavCategory />
        <button
          type="submit"
          className="w-[calc(100%-80px)] h-14 rounded-3xl bg-sky-600 text-white bottom-0 mx-10 my-5"
        >
          변경 완료
        </button>
      </form>
    </div>
  )
}
