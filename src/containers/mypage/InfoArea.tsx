import Link from 'next/link'
import { ApiResponse } from '@/types/apiResponseType'
import { ProfileData } from '@/types/mypageDataType'
import NonProfileDuck from '@/../public/svgs/duck/nonProfileDuck.svg'

export default function InfoArea({
  profileData,
}: {
  profileData: ApiResponse<ProfileData>
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const profile = profileData.result

  return (
    <div className="mx-7 my-3 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 정보</span>
      <div className="flex mt-2 ml-3">
        <NonProfileDuck />
        <div className="text-sm ml-10">
          <p className="font-bold md-3">닉네임</p>
          <p className="my-3">카테고리 기본 설정: 아이돌</p>
        </div>
      </div>
      <Link
        className="mx-4 mt-4 flex items-center justify-center border-t border-gray-500 text-center pt-2"
        href="/"
      >
        정보 수정
      </Link>
    </div>
  )
}
