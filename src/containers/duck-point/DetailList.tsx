'use client'

import { useState, useEffect } from 'react'
import Pagination from '@/components/Pagination'
import { DuckPointDetailData } from '@/types/memberApiDataType'
import { getDuckPointDetail } from '@/utils/memberApiActions'
import DetailContent from './DetailContent'

export default function DetailList() {
  const [data, setData] = useState<DuckPointDetailData | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const historyData = data?.historyList

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDuckPointDetail(currentPage)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  return !historyData?.length ? (
    <div className="flex justify-center items-center text-xl">
      내역이 없습니다.
    </div>
  ) : (
    <>
      {historyData.map((history) => (
        <DetailContent
          key={history.createdAt}
          changeAmount={history.changeAmount}
          leftPoint={history.leftPoint}
          changeStatus={history.changeStatus}
          historyDetail={history.historyDetail}
          createdAt={history.createdAt}
        />
      ))}
      {data!.maxPage > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPage={data!.maxPage}
        />
      )}
    </>
  )
}
