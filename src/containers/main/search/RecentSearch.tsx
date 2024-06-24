'use client'

import { useEffect, useState } from 'react'
import Remove from '@/public/svgs/icon/remove.svg'
import { LocalStorageKeywordType } from '@/types/headerType'

export default function RecentSearch() {
  const [keywords, setKeywords] = useState<LocalStorageKeywordType[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  )

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
    <>
      <div className="px-[20px] flex justify-between">
        <h2 className="text-[17px]">최근 검색어</h2>
        <div
          className="text-[15px]"
          role="none"
          onClick={() => handleClearKeywords()}
        >
          전체삭제
        </div>
      </div>
      <div className="flex w-full overflow-x-auto whitespace-nowrap">
        {keywords.map((item: LocalStorageKeywordType) => (
          <div
            key={item.id}
            role="none"
            className="text-[13px] border border-gray-300 rounded-[20px] px-[8px] ml-[12px] mt-[5px] inline-block cursor-pointer"
          >
            <div className="flex">
              <div>{item.text}</div>
              <div
                className="place-self-center pl-[8px]"
                role="none"
                onClick={() => handleRemoveKeyword(item.id)}
              >
                <Remove />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
