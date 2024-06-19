import { useState } from 'react'
import { useGoodsStore } from '@/containers/goods/registration/store'

export default function CategoryArea() {
  const [isDropdown, setIsDropdown] = useState<boolean>(false)
  const { categoryId, setCategory } = useGoodsStore()

  const categoryList = [
    {
      id: 0,
      name: '애니메이션',
    },
    {
      id: 1,
      name: '아이돌',
    },
    {
      id: 2,
      name: '야구',
    },
  ]

  const handleCategory = (id: number) => {
    setCategory(id)
    setIsDropdown(false)
  }

  return (
    <>
      <p className="text-sky-600 text-[17px]">카테고리</p>
      <button
        type="button"
        onClick={() => setIsDropdown(!isDropdown)}
        className={`w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full appearance-none text-left ${categoryId === -1 ? 'text-[#bcbcbc]' : 'text-black'}`}
      >
        {categoryList[categoryId]?.name || '카테고리 선택'}
      </button>
      <div className="relative">
        {isDropdown && (
          <ul className="absolute z-10 -top-3 w-full border border-sky-600 rounded-3xl bg-white py-[10px] px-[15px]">
            {categoryList.map((item) => (
              <li
                key={item.id}
                role="none"
                onClick={() => handleCategory(item.id)}
                className="py-[5px]"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <select
        id="category"
        name="category"
        className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] appearance-none"
      >
        <option value="none" className="text-[#bcbcbc]">
          카테고리 선택
        </option>
        <option value="0">애니메이션</option>
        <option value="1">아이돌</option>
        <option value="2">야구</option>
      </select> */}
    </>
  )
}
