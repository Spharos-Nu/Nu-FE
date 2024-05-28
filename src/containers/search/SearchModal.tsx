'use client'

import { useEffect, useState } from 'react'
import BackBtn from '@/public/svgs/icon/backBtn.svg'
import { KeywordType } from '@/types/KeywordType'
import RecentSearch from './RecentSearch'
import SearchForm from './SearchForm'

export default function SearchModal({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [keywords, setKeywords] = useState<KeywordType[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

  // 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text,
    }
    setKeywords([newKeyword, ...keywords])
  }

  // 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((thisKeyword: { id: number }) => {
      return thisKeyword.id !== id
    })
    setKeywords(nextKeyword)
  }

  // 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <div
        onClick={() => setVisible(false)}
        role="none"
        className="absolute mt-[20px] pl-[20px]"
      >
        <BackBtn />
      </div>
      <h1 className="h-[60px] leading-[60px] text-center text-[25px] tracking-[-0.1rem] font-semibold">
        검색
      </h1>
      <div>
        <SearchForm handleAddKeyword={handleAddKeyword} />
        <RecentSearch
          keywords={keywords}
          handleRemoveKeyword={handleRemoveKeyword}
          handleClearKeywords={handleClearKeywords}
        />
      </div>
    </div>
  )
}
