'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { useToastStore } from '@/components/Toast/store'
import { useSearchStore } from '@/containers/main/search/store'
import { LocalStorageKeywordType } from '@/types/headerType'
import { KeywordType } from '@/types/readApiDataType'
import { getRelatedKeywordList, getSearchResult } from '@/utils/readsApiActions'

export default function SearchForm() {
  const { showToast } = useToastStore()
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

  const { keyword, setKeyword, page, setSearchResult } = useSearchStore()

  const [relatedKeyword, setRelatedKeyword] = useState<KeywordType[]>([])

  const handleKeywordInput = async (text: string, categoryId: number) => {
    const newKeyword = {
      text,
      categoryId,
    }

    const isDuplicate = keywords.some(
      (element) => element.text === newKeyword.text,
    )

    if (!text || !isDuplicate) {
      setKeywords([newKeyword, ...keywords])
    }

    setKeyword('')

    const data = await getSearchResult(text, categoryId, page)
    if (!data.result.totalCount) showToast('검색 결과가 없습니다.')
    setSearchResult(data.result)
    setRelatedKeyword([])
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  useEffect(() => {
    const getList = async () => {
      if (keyword) {
        const data = await getRelatedKeywordList(
          keyword,
          getPathIndex(pathname),
        )
        setRelatedKeyword(data.result)
      }
    }

    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])

  return (
    <>
      <div className="relative w-[calc(100%-40px)] h-[50px] m-auto flex flex-col border border-gray-300 rounded-full my-5">
        <input
          type="text"
          className="w-full h-full pl-[20px] pr-[40px] text-[15px] rounded-full flex-10"
          placeholder="카테고리, 키워드를 통해 굿즈를 찾아보세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword && (
          <IoMdCloseCircle
            onClick={() => setKeyword('')}
            className="absolute top-4 right-16 text-slate-500"
          />
        )}
        <FiSearch
          onClick={() => handleKeywordInput(keyword, getPathIndex(pathname))}
          className="absolute top-[10px] right-1 text-sky-600 text-3xl mx-3"
        />
      </div>
      {keyword && relatedKeyword && (
        <div className="w-[calc(100%-40px)] border border-slate-200 rounded-md shadow-lg max-h-40 overflow-y-auto m-auto">
          {relatedKeyword.map((item) => (
            <button
              key={item.keyword}
              type="button"
              onClick={() =>
                handleKeywordInput(item.keyword, getPathIndex(pathname))
              }
              className={`w-full h-full hover:bg-slate-100 text-left pl-4 ${relatedKeyword.length > 1 ? 'border border-b-slate-200' : ''}`}
            >
              {item.keyword}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
