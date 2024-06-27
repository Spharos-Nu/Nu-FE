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
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2 justify-center items-center">
        {data.goodsList.map((goods) => (
          <GoodsSummary key={goods.goodsCode} goodsCode={goods.goodsCode} />
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
