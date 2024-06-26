'use client'

import { useEffect, useState } from 'react'
import DuckPoint from '@/public/svgs/duck/mainDuckPoint.svg'
import { getDuckPoint } from '@/utils/mainApiActions'

export default function UserDuckPoint() {
  const [duckPoint, setDuckPoint] = useState<number>(0)

  useEffect(() => {
    const getData = async () => {
      const DuckPointData = await getDuckPoint()
      setDuckPoint(DuckPointData.result)
    }
    getData()
  }, [])

  return (
    <div className="flex justify-between h-[48px] px-[10px] bg-[#2B74B9] rounded-full">
      <div className="content-center">
        <DuckPoint />
      </div>
      <p className="pl-[15px] pr-[15px] text-[17px] text-white content-center">
        {duckPoint.toLocaleString()}
      </p>
    </div>
  )
}
