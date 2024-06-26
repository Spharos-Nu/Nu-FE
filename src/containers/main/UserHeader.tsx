'use client'

import { useEffect, useState } from 'react'
import { getDuckPoint } from '@/utils/mainApiActions'
import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader() {
  const [duckPoint, setDuckPoint] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {
      const DuckPointData = await getDuckPoint()

      setDuckPoint(DuckPointData.result)
    }
    getData()
  }, [])

  return (
    <div className="flex justify-between pt-[30px] px-[20px]">
      <UserProfile />
      <div className="content-center">
        <UserDuckPoint duckPoint={duckPoint} />
      </div>
    </div>
  )
}
