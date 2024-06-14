'use client'

import { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'

interface CheckListType {
  id: number
  description: string
}

export default function CheckList({
  complainList,
}: {
  complainList: CheckListType[]
}) {
  const [selected, setSelected] = useState<string>(complainList[0].description)
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  return (
    <div className="mt-[17px]">
      <ul>
        {complainList.map((item) => (
          <li key={item.id} className="relative mt-[15px] first:mt-0">
            <label key={item.id}>
              <input
                type="radio"
                name="reason"
                value={item.description}
                id={item.description}
                checked={selected === item.description}
                onChange={onChangeRadio}
                className="hidden"
              />
              <IoCheckmark
                className={`absolute inline-block w-[30px] h-[31px] ${selected === item.description ? ' text-[#FFD26F]' : ' text-black'}`}
              />
              <p className="pl-[40px] text-[19px] leading-[31px]">
                {item.description}
              </p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
