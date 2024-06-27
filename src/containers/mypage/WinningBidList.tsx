'use client'

import { useEffect, useState } from 'react'
import GoodsSummary from '@/components/GoodsSummary'
import Pagination from '@/components/Pagination'
import { GoodsData } from '@/types/goodsApiDataType'
import { getWinningGoods } from '@/utils/goodsApiActions'
import { useWinningStore } from './store'

export default function WinningBidList() {
  const { currentStatus, page, setPage } = useWinningStore()
  const [data, setData] = useState<GoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getWinningGoods(page, currentStatus)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
  }, [page, currentStatus])

  if (!data.goodsList.length) {
    return (
      <div className="text-slate-500 text-center my-2">
        낙찰받은 상품 내역이 없습니다.
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
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
