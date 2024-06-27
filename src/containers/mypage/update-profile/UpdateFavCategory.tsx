'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { useProfileStore } from '@/containers/mypage/update-profile/store'

export default function UpdateFavCategory() {
  const { data: session } = useSession()
  const { favoriteCategory, setFavoriteCategory } = useProfileStore()
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = (option: string) => {
    setFavoriteCategory(option)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    setFavoriteCategory(session?.user.favoriteCategory)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full my-7">
      <div className="mx-10 h-14 border-[3px] border-slate-400 rounded-3xl">
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full h-full relative flex items-center justify-between"
        >
          <span className="ml-3 flex content-center cursor-pointer text-slate-400">
            {!favoriteCategory
              ? session?.user.favoriteCategory
              : favoriteCategory}
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
