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
import { deleteProfileImage, uploadProfileImage } from '@/utils/uploadImage'

export default function UpdateProfileForm() {
  const router = useRouter()
  const { data: session, update } = useSession()
  const { profileImage, nickname, favoriteCategory, isValidNick } =
    useProfileStore()
  const { setNicknameError } = useErrorStore()

  const handleSubmit = async () => {
    if (!isValidNick) return setNicknameError(3)

    let profileImageUrl = ''
    if (session?.user.profileImage && profileImage) {
      await deleteProfileImage(session?.user.profileImage)
      profileImageUrl = await uploadProfileImage(profileImage)
    } else if (session?.user.profileImage) {
      profileImageUrl = session?.user.profileImage
    } else if (profileImage) {
      profileImageUrl = await uploadProfileImage(profileImage)
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        profileImage: profileImageUrl,
        nickname,
        favoriteCategory,
      }),
    })

    const data = await res.json()

    if (data.status !== 200) {
      return null
    }

    await update({
      ...session?.user,
      image: data.result.profileImage,
      nickname: data.result.nickname,
      favoriteCategory: data.result.favCategory,
    })
    return router.refresh()
  }

  useEffect(() => {
    console.log(session)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  return (
    <div>
      <form className="relative">
        <UpdateProfileImage />
        <UpdateNickname />
        <UpdateFavCategory />
        <button
          type="button"
          className="w-[calc(100%-80px)] h-14 rounded-3xl bg-sky-600 text-white bottom-0 mx-10 my-5"
          onClick={handleSubmit}
        >
          변경 완료
        </button>
      </form>
    </div>
  )
}
