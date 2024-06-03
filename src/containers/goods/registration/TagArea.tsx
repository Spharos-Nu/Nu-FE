'use client'

import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { TagItem, useTagStore } from './store'

export default function TagArea() {
  const [item, setItem] = useState('')
  const { tagItems, addTags, removeTags } = useTagStore()

  // const removeTag = (indexToRemove: number) => {
  //   // 태그를 삭제하는 메소드
  //   const filter = tags.filter((el) => el.id !== indexToRemove)
  //   setTags(filter)
  // }

  const getTags = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tags 배열에 새로운 태그를 추가하는 메소드
    // const inputVal = {
    //   id: Date.now(),
    //   name: `#${event.currentTarget.value}`,
    // }
    setItem(event.target.value)
    // // 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // // 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // // 태그가 추가되면 input 창 비우기
    // if (
    //   event.key === 'Enter' &&
    //   inputVal.name !== '' &&
    //   !tags.includes(inputVal)
    // ) {
    //   setTags([...tags, inputVal])
    //   // eslint-disable-next-line no-param-reassign
    //   event.currentTarget.value = ''
    // }
  }

  const pushTag = () => {
    addTags({ id: Date.now(), name: `#${item}` })
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
        />
        <div
          className="rounded-full border border-[#FFD26F] text-center content-center text-[#FFD26F]"
          onClick={pushTag}
          role="none"
        >
          입력
        </div>
      </div>
      <ul className="flex mb-[10px] whitespace-nowrap overflow-x-auto">
        {tagItems.map((tag: TagItem) => (
          <li
            key={tag.id}
            className="flex mr-[7px] border border-[#FFD26F] rounded-full px-[10px] py-[10px] text-center"
          >
            <p className="content-center pl-[5px]">{tag.name}</p>
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
      </div>
    </>
  )
}
