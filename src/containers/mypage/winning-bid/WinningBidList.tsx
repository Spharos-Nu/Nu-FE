'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import { useWinningStore } from '@/containers/mypage/store'
import WinningContent from '@/containers/mypage/winning-bid/WinningContent'
import { GoodsData } from '@/types/goodsApiDataType'
import { getWinningGoods } from '@/utils/goodsApiActions'

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
      <div className="mt-5 px-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {data.goodsList.map((goods) => (
          <WinningContent key={goods.goodsCode} goods={goods} />
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
