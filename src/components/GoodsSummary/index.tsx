'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { SummaryData } from '@/types/goodsApiDataType'
import { getGoodsSummary, getLike } from '@/utils/goodsApiActions'

export default function GoodsSummary({ goodsCode }: { goodsCode: number }) {
  const [data, setData] = useState<SummaryData>({
    thumbnailUrl: '',
    goodsName: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    tradingStatus: 0,
  })
  const [like, setLike] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGoodsSummary(goodsCode)
      if (res.status === 200) {
        setData(res.result)
      }

      const res2 = await getLike(goodsCode)
      if (res2.status === 200) {
        if (res2.result) {
          setLike(true)
        } else {
          setLike(false)
        }
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Link
      href={`/goods-detail/?code=${goodsCode}`}
      className="w-[90%] h-[90%] m-auto relative"
    >
      <Image
        src={data.thumbnailUrl}
        alt="썸네일"
        className="rounded-t-xl w-full h-full"
        width={0}
        height={0}
      />
      <div className="rounded-b-xl">
        <p>{data.goodsName}</p>
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 px-3 py-1">
            <span className="rounded-2xl bg-sky-200 text-sky-500 text-center">
              {data.tradingStatus === 0 ? data.openedAt : data.closedAt}
            </span>
          </div>
          <div>
            <span className="rounded-2xl bg-sky-600 text-center">
              {data.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>
          </div>
        </div>
      </div>
      {like ? (
        <GoHeartFill className="text-white absolute right-3 top-3" />
      ) : (
        <GoHeart className="text-red-500 absolute right-3 top-3" />
      )}
    </Link>
  )
}
