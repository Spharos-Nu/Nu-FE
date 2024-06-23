import { useState } from 'react'
import GoodsSummary from '@/components/GoodsSummary'
import Pagination from '@/components/Pagination'
import { useSearchStore } from '@/containers/main/search/store'

export default function SearchResult() {
  const { searchResult } = useSearchStore()
  const [page, setPage] = useState<number>(0)

  if (!searchResult)
    return (
      <div className="text-slate-500 text-center my-2">
        검색결과가 없습니다.
      </div>
    )

  return (
    <>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-2 justify-center items-center">
        {searchResult.goodsList.map((goods) => (
          <GoodsSummary key={goods.goodsCode} goodsCode={goods.goodsCode} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        setCurrentPage={setPage}
        maxPage={searchResult.maxPage}
      />
    </>
  )
}
