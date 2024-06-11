import { useEffect, useState } from 'react'
import SellSummary from '@/components/GoodsSummary/SellSummary'
import Pagination from '@/components/Pagination'
import { GoodsData } from '@/types/goodsApiDataType'
import { getSellGoods } from '@/utils/goodsApiActions'
import { useSellStore } from './store'

export default function SellList() {
  const { page, setPage } = useSellStore()
  const [data, setData] = useState<GoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSellGoods(page, null)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
        {data.goodsList.map((goods) => (
          <SellSummary key={goods.goodsCode} goodsCode={goods.goodsCode} />
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
