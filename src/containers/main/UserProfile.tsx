import Image from 'next/image'
import img from '@/dummydata/profile.png'
import { ProfileType } from '@/types/mainType'

export default function UserProfile({ profile }: { profile: ProfileType }) {
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
        <p className="text-[18px]">{profile.nickname}</p>
      </div>
    </div>
  )
}
