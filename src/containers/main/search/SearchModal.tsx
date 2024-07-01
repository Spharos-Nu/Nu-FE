'use client'

import { FaArrowLeft } from 'react-icons/fa'
import { useHeaderModalState } from '@/components/layout/store'
import RecentSearch from '@/containers/main/search/RecentSearch'
import SearchForm from '@/containers/main/search/SearchForm'
import SearchResult from '@/containers/main/search/SearchResult'

export default function SearchModal() {
  const { setSearch } = useHeaderModalState()

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white fix justify-center">
      <div className="w-full h-full overflow-scroll">
        <FaArrowLeft
          onClick={() => setSearch(false)}
          className="absolute top-5 left-5 text-xl"
        />
        <h1 className="h-[60px] leading-[60px] text-center text-[25px] tracking-[-0.1rem] font-semibold">
          검색
        </h1>
        <SearchForm />
        <RecentSearch />
        <SearchResult />
      </div>
    </div>
  )
}
