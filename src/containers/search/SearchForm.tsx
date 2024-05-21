'use client'

import { SetStateAction, useState } from 'react'
import Search from '@/../public/svgs/header/search.svg'

export default function SearchForm({
  handleAddKeyword,
}: {
  handleAddKeyword: (keyword: string) => void
}) {
  const [keyword, setKeyword] = useState('')

  const handleKeyword = (e: { target: { value: SetStateAction<string> } }) => {
    setKeyword(e.target.value)
  }
  const handleEnter = (e: { keyCode: number }) => {
    if (keyword && e.keyCode === 13) {
      // 엔터일때 부모의 addkeyword에 전달
      handleAddKeyword(keyword)
      setKeyword('')
    }
  }

  return (
    <form className="relative">
      <input
        type="text"
        className="w-[calc(100%-40px)] h-[50px] border border-gray-300 rounded-full pl-[20px] pr-[40px] m-[20px] text-[15px]"
        placeholder="카테고리, 키워드를 통해 굿즈를 찾아보세요."
        value={keyword}
        onChange={handleKeyword}
        onKeyDown={handleEnter}
      />
      <div
        role="none"
        className="bg-red absolute inset-y-1/2 right-0 flex items-center pr-[40px]"
      >
        <Search />
      </div>
    </form>
  )
}
