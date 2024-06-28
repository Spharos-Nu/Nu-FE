'use client'

import { useEffect, useState } from 'react'
import GoodsSummary from '@/components/GoodsSummary'
import Pagination from '@/components/Pagination'
import { GoodsData } from '@/types/goodsApiDataType'
import { getBidGoods } from '@/utils/goodsApiActions'
import { useBidStore } from './store'

export default function BidList() {
  const { currentStatus, page, setPage } = useBidStore()
  const [data, setData] = useState<GoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBidGoods(page, currentStatus)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
  }, [page, currentStatus])

  if (!data.goodsList.length) {
    return (
      <div className="text-slate-500 text-center my-2">
        입찰내역이 없습니다.
      </div>
    )
  }

  return (
    <>
      <div className="mt-[20px] px-[20px] grid grid-cols-3 gap-4 sm:grid-cols-3 md:w-grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center">
        {data.goodsList.map((goods) => (
          <GoodsSummary key={goods.goodsCode} goodsList={goods} />
        ))}
      </div>
      <Pagination
        currentPage={data.nowPage}
        setCurrentPage={setPage}
        maxPage={data.maxPage}
      />
    </>
  )
}
