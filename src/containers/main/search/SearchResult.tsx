import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import GoodsItem from '@/containers/goods/list/GoodsItem'
import { useSearchStore } from '@/containers/main/search/store'

export default function SearchResult() {
  const { searchResult, resetSearchState } = useSearchStore()
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    resetSearchState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!searchResult.goodsList.length) return null

  return (
    <>
      <div className="mx-5 my-5 grid grid-cols-2 gap-4 md:grid-cols-4 justify-center items-center overflow-scroll">
        {searchResult.goodsList.map((goods) => (
          <GoodsItem key={goods.goodsCode} goodsItemData={goods} />
        ))}
      </div>
      {searchResult.maxPage > 1 && (
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          maxPage={searchResult.maxPage}
        />
      )}
    </>
  )
}
