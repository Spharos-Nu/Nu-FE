'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SummaryDataType } from '@/types/readApiDataType'
import { getGoodsSummary } from '@/utils/readsApiActions'

export default function ChatRoomImage({ goodsCode }: { goodsCode: string }) {
  const [data, setData] = useState<SummaryDataType>({
    goodsCode,
    thumbnail: {
      id: 0,
      url: '',
    },
    goodsName: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    tradingStatus: 0,
  })

  const ImageUrl = data.thumbnail
    ? data.thumbnail.url
    : '/icons/tempProfile.png'

  useEffect(() => {
    const getData = async () => {
      const res = await getGoodsSummary(goodsCode)

      if (res.status === 200) {
        setData(res.result)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(goodsCode,"?",ImageUrl)
  return (
    <>
      <Image
        src={ImageUrl || '/icons/tempProfile.png'}
        alt={goodsCode}
        width={70}
        height={70}
        className="w-full h-full object-cover rounded-full"
      />
      <div className="">
        <p className="truncate text-[13px] text-center">
          {data.goodsName ? data.goodsName : '굿즈덕'}
        </p>
        {/* <p className="mt-[5px] text-[9px] font-medium">
          {data.minPrice.toLocaleString()}{' '}
          <span className="text-[7px]">원</span>
        </p> */}
      </div>
    </>
  )
}
