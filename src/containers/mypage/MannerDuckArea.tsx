import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { MannerDuckData } from '@/types/memberApiDataType'

export default async function MannerDuckArea({
  mannerDuckData,
}: {
  mannerDuckData: ApiResponse<MannerDuckData>
}) {
  const session = await getServerSession(options)
  const mannerDuck = mannerDuckData.result
  const currentDuck = mannerDuck?.level

  let mannerDuckLabel = ''
  let nextDuckLabel = ''
  let mannerDuckImage = ''
  switch (currentDuck) {
    case 1:
      mannerDuckLabel = '해골 오리'
      nextDuckLabel = '우는 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel1.svg'
      break
    case 2:
      mannerDuckLabel = '우는 오리'
      nextDuckLabel = '그냥 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel2.svg'
      break
    case 3:
      mannerDuckLabel = '그냥 오리'
      nextDuckLabel = '선글라스 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel3.svg'
      break
    case 4:
      mannerDuckLabel = '선글라스 오리'
      nextDuckLabel = '빛나는 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel4.svg'
      break
    case 5:
      mannerDuckLabel = '빛나는 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel5.svg'
      break
    default:
      mannerDuckLabel = '그냥 오리'
      nextDuckLabel = '선글라스 오리'
      mannerDuckImage = '/svgs/duck/mannerDuckLevel3.svg'
  }

  return (
    <div className="mx-7 my-7 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 매너덕</span>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={mannerDuckImage}
          alt={mannerDuckLabel}
          width={114}
          height={114}
          className="rounded-full"
        />
        {currentDuck !== 5 && (
          <p className="mt-3 text-xs text-red-500">
            {nextDuckLabel}까지 {mannerDuck?.leftPoint}점 남았어요.
          </p>
        )}
        <p>
          현재 {session?.user.nickname}님의 매너덕은 {mannerDuckLabel}입니다
        </p>
      </div>
    </div>
  )
}
