'use client'

import { useState } from 'react'

export default function TradeTypeArea() {
  const trade = [
    {
      id: 0,
      name: '직거래',
    },
    {
      id: 1,
      name: '택배거래',
    },
    {
      id: 2,
      name: '둘 다 좋아요',
    },
  ]

  const [selected, setSelected] = useState<number>(0)
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value))
  }

  return (
    <>
      <p className="text-[#2B74B9] text-[17px]">선호하는 거래 방법</p>
      <div className="flex flex-row justify-between mb-[20px]">
        {trade.map((item) => (
          <label
            key={item.id}
            htmlFor={item.name}
            className={`w-1/3 h-[45px] mt-[5px] border rounded-full mr-[10px] last:mr-0 content-center text-center 
            ${selected === item.id ? ' bg-[#FFD26F] border-[#FFD26F]' : ' border-[#d4d4d4] bg-white'}`}
          >
            <input
              type="radio"
              name="tradeType"
              value={item.id}
              id={item.name}
              checked={selected === item.id}
              onChange={onChangeRadio}
              className="hidden"
            />
            <span
              className={`text-[15px] ${selected === item.id ? ' text-white' : ' text-[#d4d4d4]'}`}
            >
              {item.name}
            </span>
          </label>
        ))}
      </div>
    </>
  )
}
