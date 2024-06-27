import MannerDuck1 from '@/public/svgs/duck/mannerDuckLevel1.svg'
import MannerDuck2 from '@/public/svgs/duck/mannerDuckLevel2.svg'
import MannerDuck3 from '@/public/svgs/duck/mannerDuckLevel3.svg'
import MannerDuck4 from '@/public/svgs/duck/mannerDuckLevel4.svg'
import MannerDuck5 from '@/public/svgs/duck/mannerDuckLevel5.svg'
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
    <div className="mt-[20px] mx-[20px] px-[25px] pt-[15px] pb-[25px] bg-[#f7f7f7] rounded-2xl">
      <p className="text-[15px] text-[#818181]">매너덕</p>
      <div className="text-center">
        <div className="mt-[5px] inline-block">
          {sellerMannerDuck.level === 1 && <MannerDuck1 />}
          {sellerMannerDuck.level === 2 && <MannerDuck2 />}
          {sellerMannerDuck.level === 3 && <MannerDuck3 />}
          {sellerMannerDuck.level === 4 && <MannerDuck4 />}
          {sellerMannerDuck.level === 5 && <MannerDuck5 />}
        </div>
      </div>
      <p className="text-center mt-[20px] text-black">
        <span className="font-semibold">{nickname}</span> 님의 매너덕은{' '}
        {mannerDuckLabel}입니다.
      </p>
    </div>
  )
}
