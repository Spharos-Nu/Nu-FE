import Image from 'next/image'
import img from '@/dummydata/profile.png'

export default function SellerMannerDuck() {
  return (
    <div className="mt-[20px] mx-[20px] px-[25px] pt-[15px] pb-[25px] bg-[#f7f7f7] rounded-2xl">
      <p className="text-[15px] text-[#818181]">매너덕</p>
      <Image
        src={img}
        alt="판매자 매너덕"
        width={100}
        height={100}
        className="m-auto rounded-full"
      />
      <p className="text-center mt-[10px] text-black">
        <span className="font-semibold">닉네임</span> 님의 매너덕은 오리입니다.
      </p>
    </div>
  )
}
