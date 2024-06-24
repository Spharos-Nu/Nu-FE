// import { useSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'
// import { ProfileType } from '@/types/mainType'
// import { getProfile } from '@/utils/mainApiActions'
import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader() {
  // const { data: session } = useSession()
  // const uuid = session?.user.uuid
  // const [profile, setProfile] = useState<ProfileType>()

  // useEffect(() => {
  //   const getData = async () => {
  //     const ProfileData = await getProfile(uuid)
  //     console.log(ProfileData)

  //     setProfile(ProfileData.result)
  //   }
  //   getData()
  // }, [])

  return (
    <div className="flex justify-between pt-[30px] px-[20px]">
      <UserProfile />
      <div className="content-center">
        <UserDuckPoint />
      </div>
    </div>
  )
}
