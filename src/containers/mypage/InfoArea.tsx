import Image from 'next/image'
import { ApiResponse } from '@/types/apiResponseType'
import { ProfileData } from '@/types/mypageDataType'

export default function InfoArea({
  profileData,
}: {
  profileData: ApiResponse<ProfileData>
}) {
  const profile = profileData.result

  return (
    <div className="rounded-3xl bg-slate-300">
      <span>나의 정보</span>
      <div className="flex">
        <Image
          className="rounded-full"
          src={profile?.profileImg}
          alt="프로필 이미지"
        />
        <div>
          <span>{profile?.nickname}</span>
          <span>카테고리 기본 설정: {profile?.favCategory}</span>
        </div>
      </div>
    </div>
  )
}
