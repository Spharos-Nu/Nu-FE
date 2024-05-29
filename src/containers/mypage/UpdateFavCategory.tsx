'use client'

import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'

export default function UpdateFavCategory() {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  return (
    <div className="w-full mt-5">
      <div className="mx-10 h-14 border-[3px] border-slate-400 rounded-3xl">
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full h-full relative flex items-center justify-between"
        >
          <span className="ml-3 flex content-center cursor-pointer text-slate-400">
            {!selectedOption ? '관심 카테고리를 선택해주세요.' : selectedOption}
          </span>
          <MdArrowDropDown className="h-5 w-5 mr-3 text-slate-400" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute w-[calc(100%-80px)] mx-10 bg-white border-[2px] border-slate-400 rounded-3xl mt-2 z-10">
          <button
            id="아이돌"
            type="button"
            onClick={() => handleOptionClick('아이돌')}
            className="w-full py-2 border-b-[2px] border-slate-400"
          >
            아이돌
          </button>
          <button
            id="애니메이션"
            type="button"
            onClick={() => handleOptionClick('애니메이션')}
            className="w-full py-2 border-b-[2px] border-slate-400"
          >
            애니메이션
          </button>
          <button
            id="야구"
            type="button"
            onClick={() => handleOptionClick('야구')}
            className="w-full py-2"
          >
            야구
          </button>
        </div>
      )}
    </div>
  )
}
