'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
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

    const res = await updateUserProfile(
      profileImageUrl,
      nickname,
      favoriteCategory,
    )

    if (res.status !== 200) {
      return null
    }

    const updatedUser = {
      ...session?.user,
      image: res.result.profileImage,
      nickname: res.result.nickname,
      favoriteCategory: res.result.favCategory,
    }

    await update(updatedUser)
    return router.refresh()
  }

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
