'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import SellContent from '@/containers/mypage/sell/SellContent'
import { useSellStore } from '@/containers/mypage/store'
import { ReadsGoodsData } from '@/types/readApiDataType'
import { getSellGoods } from '@/utils/readsApiActions'

export default function SellList() {
  const { currentStatus, page, setPage } = useSellStore()
  const [data, setData] = useState<ReadsGoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSellGoods(page, currentStatus)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
  }, [page, currentStatus])

  if (!data.goodsList.length) {
    return (
      <div className="text-slate-500 text-center my-2">
        판매한 상품 내역이 없습니다.
      </div>
    )
  }

  return (
    <>
      <div className="mt-5 px-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {data.goodsList.map((goods) => (
          <SellContent key={goods.goodsCode} goods={goods} />
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
