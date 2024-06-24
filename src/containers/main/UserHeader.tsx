'use client'

import { useEffect, useState } from 'react'
import { ProfileType } from '@/types/mainType'
import { getDuckPoint, getProfile } from '@/utils/mainApiActions'
import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader() {
  const [profile, setProfile] = useState<ProfileType>({
    favCategory: '',
    nickname: '',
    profileImg: '',
    userUuid: '',
  })
  const [duckPoint, setDuckPoint] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {
      const [ProfileData, DuckPointData] = await Promise.all([
        getProfile(),
        getDuckPoint(),
      ])

      if (ProfileData.result !== undefined) {
        setProfile(ProfileData.result)
      }
      setDuckPoint(DuckPointData.result)
    }
    getData()
  }, [])

  return (
    <div className="flex justify-between pt-[30px] px-[20px]">
      <UserProfile profile={profile} />
      <div className="content-center">
        <UserDuckPoint duckPoint={duckPoint} />
      </div>
    </div>
  )
}
