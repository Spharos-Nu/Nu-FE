'use client'

import { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'

export default function CheckList() {
  const complainList = [
    {
      id: 0,
      description: '판매 금지된 굿즈예요.',
    },
    {
      id: 1,
      description: '비매너 사용자예요.',
    },
    {
      id: 2,
      description: '거래 중 분쟁이 발생했어요.',
    },
    {
      id: 3,
      description: '사기인 것 같아요.',
    },
    {
      id: 4,
      description: '욕설, 비방, 혐오 표현을 해요.',
    },
    {
      id: 5,
      description: '연애 목적의 대화를 시도해요.',
    },
    {
      id: 6,
      description: '부적절한 성적 행위를 해요.',
    },
  ]

  const [selected, setSelected] = useState<number>(0)
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value))
  }

  return (
    <div className="mt-[17px]">
      <ul>
        {complainList.map((item) => (
          <li key={item.id} className="relative mt-[15px] first:mt-0">
            <label key={item.id}>
              <input
                type="radio"
                name="complainType"
                value={item.id}
                id={item.description}
                checked={selected === item.id}
                onChange={onChangeRadio}
                className="hidden"
              />
              <IoCheckmark
                className={`absolute inline-block w-[30px] h-[31px] ${selected === item.id ? ' text-[#FFD26F]' : ' text-black'}`}
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
