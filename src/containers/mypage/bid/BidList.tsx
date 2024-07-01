'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import BidContent from '@/containers/mypage/bid/BidContent'
import { useBidStore } from '@/containers/mypage/store'
import { GoodsData } from '@/types/goodsApiDataType'
import { getBidGoods } from '@/utils/goodsApiActions'

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
      <div className="mt-5 px-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {data.goodsList.map((goods) => (
          <BidContent key={goods.goodsCode} goods={goods} />
        ))}
      </div>
      {data.maxPage > 1 && (
        <Pagination
          currentPage={data.nowPage}
          setCurrentPage={setPage}
          maxPage={data.maxPage}
        />
      )}
    </>
  )
}
