'use client'

import { useEffect, useState } from 'react'
import { IoMdSearch, IoMdCloseCircle } from 'react-icons/io'
import { useSearchStore } from '@/containers/main/search/store'
import { LocalStorageKeywordType } from '@/types/headerType'
import { KeywordType } from '@/types/readApiDataType'
import { getRelatedKeywordList, getSearchResult } from '@/utils/readsApiActions'

export default function SearchForm() {
  const [keywords, setKeywords] = useState<LocalStorageKeywordType[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  const { keyword, setKeyword, page, setSearchResult } = useSearchStore()
  // Todo: 키워드 데이터타입
  const [relatedKeyword, setRelatedKeyword] = useState<KeywordType[]>([])

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeywordInput = async (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text,
    }

    setKeywords([newKeyword, ...keywords])
    setKeyword('')

    const data = await getSearchResult(text, page)
    setSearchResult(data.result)
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  useEffect(() => {
    setKeyword('')

    const getList = async () => {
      if (keyword) {
        const data = await getRelatedKeywordList(keyword)
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
          onChange={handleKeyword}
        />
        {keyword && (
          <IoMdCloseCircle
            onClick={() => setKeyword('')}
            className="absolute top-4 right-16 text-slate-500"
          />
        )}
        <IoMdSearch
          onClick={() => handleKeywordInput(keyword)}
          className="absolute top-[10px] right-1 text-sky-600 text-3xl mx-3"
        />
      </div>
      {relatedKeyword && (
        <div className="w-[calc(100%-40px)] rounded-md shadow-lg max-h-40 overflow-y-auto">
          {relatedKeyword.map((item) => (
            <button
              key={item.keyword}
              type="button"
              onClick={() => handleKeywordInput(item.keyword)}
              className={`w-full h-full ${relatedKeyword.length > 1 ? 'border border-b-slate-500' : ''}`}
            >
              {item.keyword}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
