import Link from 'next/link'
import NonProfileDuck from '@/public/svgs/duck/nonProfileDuck.svg'
import { ApiResponse } from '@/types/apiResponseType'
import { ProfileData } from '@/types/mypageDataType'

export default function InfoArea({
  profileData,
}: {
  profileData: ApiResponse<ProfileData>
}) {
  const profile = profileData.result

  return (
    <div className="mx-7 my-3 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 정보</span>
      <div className="flex mt-2 ml-3">
        <NonProfileDuck />
        <div className="text-sm ml-10">
          <p className="font-bold md-3">{profile.nickname}</p>
          <p className="my-3">카테고리 기본 설정: {profile.favCategory}</p>
        </div>
      </div>
      <div className="flex border-t border-gray-500 text-center pt-2 mx-4 my-3">
        <Link
          className="flex items-center justify-center w-1/2"
          href="/mypage/update-profile"
        >
          정보 수정
        </Link>
        <Link
          className="flex items-center justify-center w-1/2 border-l border-gray-500"
          href="/mypage/update-password"
        >
          비밀번호 재설정
        </Link>
      </div>
    </div>
  )
}
