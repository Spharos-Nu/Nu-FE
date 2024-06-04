import Image from 'next/image'
import img from '@/dummydata/profile.png'

export default function SellerProfile() {
  return (
    <div className="mt-[20px] mx-[20px] px-[25px] py-[25px] bg-[#f7f7f7] rounded-2xl">
      <div className="flex">
        <Image
          src={img}
          alt="판매자 프로필 이미지"
          width={90}
          height={90}
          className="rounded-full"
        />
        <div>
          <p className="mt-[10px] text-[20px] font-bold ml-[20px]">
            판매자 닉네임
          </p>
          <p className="mt-[20px] ml-[20px] text-[15px]">관심 카테고리: </p>
        </div>
      </div>
    </div>
  )
}
