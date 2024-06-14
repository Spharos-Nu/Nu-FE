'use client'

import { useState } from 'react'

export default function ReasonArea() {
  const [inputCount, setInputCount] = useState<number>(0)

  return (
    <div className="mt-[35px]">
      <p className="text-[19px] pl-[10px]">이유를 상세하게 작성해 주세요.</p>
      <textarea
        id="content"
        name="content"
        className="w-full h-[300px] mt-[10px] px-[15px] py-[13px] rounded-3xl focus:outline-none border
          placeholder:text-[#bcbcbc] placeholder:text-[15px] placeholder:whitespace-pre-line"
        maxLength={500}
        onChange={(e) => setInputCount(e.target.value.length)}
      />
      <div className="flex justify-end mb-[20px] text-[13px] text-[#8f8f8f]">
        <p>{inputCount}</p>
        <p>/500</p>
      </div>
    </div>
  )
}
