import Image from 'next/image'
import img from '@/dummydata/profile.png'

export default function UserProfile() {
  return (
    <div className="flex">
      <Image
        src={img}
        alt="profile"
        width={55}
        height={55}
        className="rounded-full"
      />
      <div className="pl-[20px] content-center">
        <p className="text-[#919BB2] text-[15px]">Hello!</p>
        <p className="text-[18px]">닉네임</p>
      </div>
    </div>
  )
}
