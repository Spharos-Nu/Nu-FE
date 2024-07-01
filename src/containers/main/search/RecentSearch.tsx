'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useToastStore } from '@/components/Toast/store'
import { LocalStorageKeywordType } from '@/types/headerType'
import { getSearchResult } from '@/utils/readsApiActions'
import { useSearchStore } from './store'

export default function RecentSearch() {
  const pathname = usePathname()

  // eslint-disable-next-line consistent-return
  const getPathIndex = (path: string) => {
    if (path.startsWith('/animation')) return 1
    if (path.startsWith('/idol')) return 2
    if (path.startsWith('/baseball')) return 3

    return 0
  }

  const [keywords, setKeywords] = useState<LocalStorageKeywordType[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  const { setSearchResult } = useSearchStore()
  const { showToast } = useToastStore()

  // 검색어 삭제
  const handleRemoveKeyword = (text: string) => {
    const nextKeyword = keywords.filter((thisKeyword: { text: string }) => {
      return thisKeyword.text !== text
    })
    setKeywords(nextKeyword)
  }

  const handleSearch = async (text: string) => {
    const data = await getSearchResult(text, getPathIndex(pathname), 0)
    if (!data.result.totalCount) showToast('검색 결과가 없습니다.')
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
        <h2 className="text-sm pl-2">최근 검색어</h2>
        <button
          type="button"
          className="text-sm pr-2 text-gray-400"
          onClick={() => handleClearKeywords()}
        >
          전체삭제
        </button>
      </div>
      <div className="flex w-full overflow-x-auto whitespace-nowrap ml-2 mt-2">
        {keywords.map((item: LocalStorageKeywordType) => (
          <div
            key={item.text}
            className="text-[13px] border border-gray-300 rounded-2xl pl-5 pr-2 ml-[12px] mt-[5px] inline-block cursor-pointer"
          >
            <div className="flex justify-center items-center relative">
              <button
                type="button"
                onClick={() => handleSearch(item.text)}
                className="mr-8"
              >
                {item.text}
              </button>
              <IoCloseOutline
                aria-label="최근검색어 삭제"
                className="text-lg absolute right-1"
                onClick={() => handleRemoveKeyword(item.text)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
