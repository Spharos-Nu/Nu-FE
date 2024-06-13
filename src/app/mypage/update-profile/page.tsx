'use client'

import { useSession } from 'next-auth/react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import UpdateFavCategory from '@/containers/mypage/UpdateFavCategory'
import UpdateNickname from '@/containers/mypage/UpdateNickname'
import UpdateProfileImage from '@/containers/mypage/UpdateProfileImage'
import { useUpdateProfileStore } from '@/containers/mypage/store'
import { updateProfile } from '@/utils/memberApiActions'
import { deleteImage, uploadImage } from '@/utils/uploadImage'

export default function UpdateProfileForm() {
  const { data: session, update } = useSession()
  const { profileImage, nickname, favoriteCategory } = useUpdateProfileStore()
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let profileImageUrl = ''
    if (session?.user.profileImage && profileImage) {
      await deleteImage(session?.user.profileImage)
    } else if (session?.user.profileImage) {
      profileImageUrl = session?.user.profileImage
    } else if (profileImage) {
      profileImageUrl = await uploadImage(profileImage)
    }

    const data = await updateProfile(
      profileImageUrl,
      nickname,
      favoriteCategory,
    )

    await update({ user: { ...session?.user, ...data.result } })

    return showAlert(data.message)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <UpdateProfileImage />
      <UpdateNickname />
      <UpdateFavCategory />
      <button
        type="submit"
        className="w-[calc(100%-80px)] h-14 rounded-3xl bg-sky-600 text-white bottom-0 mx-10"
      >
        변경 완료
      </button>
      <BasicAlert message={message} />
    </form>
  )
}
