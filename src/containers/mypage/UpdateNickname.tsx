'use client'

import { useState } from 'react'

export default function UpdateNickname() {
  const [inputState, setInputState] = useState<boolean>(false)

  const handleInputElement = () => {
    setInputState(!inputState)
  }

  return (
    <div className="w-full mt-10">
      <div className="mx-10 h-14 border-[3px] border-slate-400 rounded-3xl flex items-center relative">
        {inputState ? (
          <>
            <label
              htmlFor="새로운 닉네임"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              새로운 닉네임
            </label>
            <input
              id="새로운 닉네임"
              type="text"
              autoComplete="off"
              placeholder="2~15자 사이의 새로운 닉네임"
              minLength={2}
              maxLength={15}
              className="w-full mx-3"
            />
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-20 h-10 justify-center items-center absolute right-3"
              onClick={handleInputElement}
            >
              수정완료
            </button>
          </>
        ) : (
          <>
            <span className="ml-5">닉네임</span>
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-14 h-10 justify-center items-center absolute right-3"
              onClick={handleInputElement}
            >
              수정
            </button>
          </>
        )}
      </div>
    </div>
  )
}
