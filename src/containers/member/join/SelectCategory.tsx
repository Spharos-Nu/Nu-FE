import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
} from '@/containers/member/join/store'

export default function SelectCategory() {
  const params = useSearchParams()
  const { favoriteCategory, setFavoriteCategory } = useJoinStore()
  const { categoryNotSelected, setCategoryNotSelected } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus } = useFocusStore()
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const categoryRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (currentFocus === 'favoriteCategory') {
      if (!params) {
        setCurrentIdx(0)
      }
      categoryRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFocus])

  useEffect(() => {
    if (favoriteCategory) {
      setCategoryNotSelected(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteCategory])

  return (
    <div className="my-7">
      <div
        ref={categoryRef}
        className={`w-full h-14 rounded-3xl bg-gray-200 ${isDropdownOpen && 'border-[3px] border-sky-600'}`}
      >
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full h-full relative flex items-center pl-5"
        >
          <span className="text-sm">
            {!favoriteCategory
              ? '관심 카테고리를 선택해주세요.'
              : favoriteCategory}
          </span>
          <MdArrowDropDown className="absolute right-5 top-4 w-5 h-5 text-sky-600 pointer-events-none" />
        </button>
        {categoryNotSelected && (
          <p className="text-red-500 text-xs mt-1 ml-3">
            * 카테고리를 선택해주세요.
          </p>
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute w-[calc(100%-80px)] bg-white border-[2px] border-sky-600 rounded-3xl mt-1 z-10">
          <button
            id="아이돌"
            type="button"
            onClick={() => {
              setFavoriteCategory('아이돌')
              setIsDropdownOpen(false)
            }}
            className="w-full py-2 border-b-[2px] border-sky-600 text-sm"
          >
            아이돌
          </button>
          <button
            id="애니메이션"
            type="button"
            onClick={() => {
              setFavoriteCategory('애니메이션')
              setIsDropdownOpen(false)
            }}
            className="w-full py-2 border-b-[2px] border-sky-600 text-sm"
          >
            애니메이션
          </button>
          <button
            id="야구"
            type="button"
            onClick={() => {
              setFavoriteCategory('야구')
              setIsDropdownOpen(false)
            }}
            className="w-full py-2 text-sm"
          >
            야구
          </button>
        </div>
      )}
    </div>
  )
}
