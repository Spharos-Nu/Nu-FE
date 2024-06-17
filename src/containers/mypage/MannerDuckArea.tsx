import SampleDuck from '@/public/svgs/duck/sampleDuck.svg'
import { ApiResponse } from '@/types/apiResponseType'
import { MannerDuckData } from '@/types/memberApiDataType'

export default function MannerDuckArea({
  mannerDuckData,
}: {
  mannerDuckData: ApiResponse<MannerDuckData>
}) {
  const mannerDuck = mannerDuckData.result
  const currentDuck = mannerDuck?.level

  let mannerDuckLabel = ''
  switch (currentDuck) {
    case 1:
      mannerDuckLabel = '해골 오리'
      break
    case 2:
      mannerDuckLabel = '우는 오리'
      break
    case 3:
      mannerDuckLabel = '그냥 오리'
      break
    case 4:
      mannerDuckLabel = '선글라스 오리'
      break
    case 5:
      mannerDuckLabel = '빛나는 오리'
      break
    default:
      mannerDuckLabel = '그냥 오리'
  }

  return (
    <div className="mx-7 my-7 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 매너덕</span>
      <div className="flex flex-col justify-center items-center">
        <SampleDuck />
        <p className="mt-3 text-xs text-red-500">
          춤추는 오리까지 {mannerDuck?.leftPoint}점 남았어요.
        </p>
        <p>현재 닉네임님의 매너덕은 {mannerDuckLabel}입니다</p>
      </div>
    </div>
  )
}
