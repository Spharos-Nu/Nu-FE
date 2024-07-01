import Image from 'next/image'
import { SellerMannerType } from '@/types/goodsType'

export default function SellerMannerDuck({
  sellerMannerDuck,
  nickname,
}: {
  sellerMannerDuck: SellerMannerType
  nickname: string
}) {
  let mannerDuckLabel = ''
  switch (sellerMannerDuck.level) {
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
    <div className="mt-[20px] mx-[20px] px-[25px] pt-[15px] pb-[25px] bg-white rounded-2xl">
      <p className="text-[15px] text-[#818181]">매너덕</p>
      <div className="text-center">
        <div className="mt-[5px] inline-block">
          {sellerMannerDuck.level === 1 && (
            <Image
              src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel1.png`}
              alt="매너덕1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          {sellerMannerDuck.level === 2 && (
            <Image
              src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel2.png`}
              alt="매너덕2"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          {sellerMannerDuck.level === 3 && (
            <Image
              src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel3.png`}
              alt="매너덕3"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          {sellerMannerDuck.level === 4 && (
            <Image
              src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel4.png`}
              alt="매너덕4"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          {sellerMannerDuck.level === 5 && (
            <Image
              src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/mannerDuckLevel5.png`}
              alt="매너덕5"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </div>
      </div>
      <p className="text-center mt-[20px] text-black">
        <span className="font-semibold">{nickname}</span> 님의 매너덕은{' '}
        {mannerDuckLabel}입니다.
      </p>
    </div>
  )
}
