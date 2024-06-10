'use client'

import { useEffect, useState } from 'react'
import { SummaryData } from '@/types/goodsApiDataType'
import { getGoodsSummary } from '@/utils/goodsApiActions'

export default function WinningSummary({ goodsCode }: { goodsCode: number }) {
  const [data, setData] = useState<SummaryData>({
    thumbnailUrl: '',
    goodsName: '',
    minPrice: 0,
    openedAt: '',
    closedAt: '',
    tradingStatus: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getGoodsSummary(goodsCode)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data }
}
