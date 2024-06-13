'use client'

import { useEffect, useState } from 'react'
import GoodsSummary from '@/components/GoodsSummary'
import Pagination from '@/components/Pagination'
import { GoodsData } from '@/types/goodsApiDataType'
import { getLikeGoods } from '@/utils/goodsApiActions'
import { useLikeStore } from './store'

export default function LikeList() {
  const { page, setPage } = useLikeStore()
  const [data, setData] = useState<GoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLikeGoods(page)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
  }, [page])

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
