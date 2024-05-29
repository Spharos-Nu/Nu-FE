import UpdateFavCategory from '@/containers/mypage/UpdateFavCategory'
import UpdateNickname from '@/containers/mypage/UpdateNickname'
import UpdateProfileImage from '@/containers/mypage/UpdateProfileImage'

export default function UpdateProfile() {
  return (
    <>
      <UpdateProfileImage />
      <UpdateNickname />
      <UpdateFavCategory />
    </>
  )
}
