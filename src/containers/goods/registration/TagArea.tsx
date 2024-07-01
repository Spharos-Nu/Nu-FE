'use client'

import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useToastStore } from '@/components/Toast/store'
import { TagItem, useTagStore } from './store'

export default function TagArea() {
  const [item, setItem] = useState<string>('')
  const { tags, addTags, removeTags } = useTagStore()
  const { showToast } = useToastStore()

  const getTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value)
  }

  const pushTag = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (item.trim() === '') {
      showToast('태그를 입력해주세요!')
    } else if (tags.length < 5) {
      const formattedItem = item.replace('#', '')
      addTags({ id: Date.now(), name: `${formattedItem}` })
    } else {
      showToast('태그는 최대 5개까지 입력할 수 있어요!')
    }
    setItem('')
  }

  return (
    <>
      <label htmlFor="태그" className="text-[#2B74B9] text-[17px]">
        태그
      </label>
      <div className="grid grid-cols-5 gap-3 mt-[5px] mb-[10px]">
        <input
          type="text"
          placeholder="# 제외하고 작성해 주세요!"
          value={item}
          name="tag"
          className="col-span-4 px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
          onChange={getTags}
          autoComplete="off"
        />
        <button
          type="submit"
          className="rounded-full border border-[#FFD26F] text-center content-center text-[#FFD26F]"
          onClick={pushTag}
        >
          입력
        </button>
      </div>
      <ul className="flex mb-[10px] whitespace-nowrap overflow-x-auto">
        {tags.map((tag: TagItem) => (
          <li
            key={tag.id}
            className="flex mr-[7px] border border-[#FFD26F] rounded-full px-[10px] py-[10px] text-center"
          >
            <p className="content-center pl-[5px]">#{tag.name}</p>
            <p
              className="content-center"
              onClick={() => removeTags(tag)}
              role="none"
            >
              <IoIosClose className="w-[25px] h-[25px] text-[#2B74B9]" />
            </p>
          </li>
        ))}
      </ul>
      <div className="mb-[20px] text-[14px] text-[#6c6c6c]">
        <p>&#183; 다양한 태그로 내 상품을 표현해 보세요.</p>
        <p>&#183; 사람들이 내 상품을 더 찾을 수 있어요.</p>
        <p>
          &#183; 상품과 관련 없는 태그를 입력할 경우, 판매에 제재를 받을 수
          있어요.
        </p>
        <p>&#183; 태그는 최대 5개까지 입력할 수 있어요!</p>
      </div>
    </>
  )
}
