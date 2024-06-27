'use client'

import { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { LocalStorageKeywordType } from '@/types/headerType'
import { getSearchResult } from '@/utils/readsApiActions'
import { useSearchStore } from './store'

export default function RecentSearch() {
  const [keywords, setKeywords] = useState<LocalStorageKeywordType[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  const { setSearchResult } = useSearchStore()

  // 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((thisKeyword: { id: number }) => {
      return thisKeyword.id !== id
    })
    setKeywords(nextKeyword)
  }

  const handleSearch = async (text: string) => {
    const data = await getSearchResult(text, 0)
    setSearchResult(data.result)
  }

  // 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  return (
    <>
      <div className="px-[20px] flex justify-between">
        <h2 className="text-[17px]">최근 검색어</h2>
        <button
          type="button"
          className="text-[15px]"
          onClick={() => handleClearKeywords()}
        >
          전체삭제
        </button>
      </div>
      <div className="flex w-full overflow-x-auto whitespace-nowrap">
        {keywords.map((item: LocalStorageKeywordType) => (
          <div
            key={item.id}
            className="text-[13px] border border-gray-300 rounded-2xl pl-5 pr-2 ml-[12px] mt-[5px] inline-block cursor-pointer"
          >
            <div className="flex justify-center items-center relative">
              <button
                type="button"
                onClick={() => handleSearch(item.text)}
                className="w-full h-full mr-8"
              >
                {item.text}
              </button>
              <IoCloseOutline
                aria-label="최근검색어 삭제"
                className="text-xl absolute right-1"
                onClick={() => handleRemoveKeyword(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
