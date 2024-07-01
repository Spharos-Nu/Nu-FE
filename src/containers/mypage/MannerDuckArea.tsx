'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { ApiResponse } from '@/types/apiResponseType'
import { MannerDuckData } from '@/types/memberApiDataType'

export default function MannerDuckArea({
  mannerDuckData,
}: {
  mannerDuckData: ApiResponse<MannerDuckData>
}) {
  const { data: session } = useSession()
  const mannerDuck = mannerDuckData.result
  const currentDuck = mannerDuck?.level

  let mannerDuckLabel = ''
  let nextDuckLabel = ''
  let mannerDuckImage = ''
  switch (currentDuck) {
    case 1:
      mannerDuckLabel = '해골 오리'
      nextDuckLabel = '우는 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel1.png`
      break
    case 2:
      mannerDuckLabel = '우는 오리'
      nextDuckLabel = '그냥 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel2.png`
      break
    case 3:
      mannerDuckLabel = '그냥 오리'
      nextDuckLabel = '선글라스 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel3.png`
      break
    case 4:
      mannerDuckLabel = '선글라스 오리'
      nextDuckLabel = '빛나는 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel4.png`
      break
    case 5:
      mannerDuckLabel = '빛나는 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel5.png`
      break
    default:
      mannerDuckLabel = '그냥 오리'
      nextDuckLabel = '선글라스 오리'
      mannerDuckImage = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel3.png`
  }

  return (
    <div className="mx-7 my-7 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4 border-b-2">나의 매너덕</span>
      <div className="flex flex-col justify-center items-center mb-4">
        <Image
          src={mannerDuckImage}
          alt={mannerDuckLabel}
          width={114}
          height={0}
          sizes="100vw"
        />
        {currentDuck !== 5 && (
          <p className="mt-3 text-xs text-red-500">
            {nextDuckLabel}까지 {mannerDuck?.leftPoint}점 남았어요.
          </p>
        )}
        <p className="text-center mt-[20px] text-black">
          <span className="font-semibold text-[#ff7f50]">
            {session?.user.nickname}
          </span>
          님의 매너덕은{' '}
          <span className="text-[#0000ff]">{mannerDuckLabel}</span>
          입니다.
        </p>
        <p className="text-center mt-[10px] text-[#a9a9a9] text-[12px]">
          좋은 거래 기록을 쌓으면 매너덕은 업그레이드 되요!
        </p>
      </div>
    </div>
  )
}
