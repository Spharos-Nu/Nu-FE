'use client'

import { useState } from 'react'
import goodsItemJson from '@/dummydata/goodsItem.json'
import goodsList from '@/dummydata/goodsList.json'
import Arrow from '@/public/svgs/header/below_arrow.svg'
import CheckFalse from '@/public/svgs/icon/checkFalse.svg'
import CheckTrue from '@/public/svgs/icon/checkTrue.svg'
import { FilterType, GoodsCardType } from '@/types/goodsType'
import GoodsItem from './GoodsItem'

export default function GoodsList() {
  const data = goodsList.goodsList
  const goodsItemData: GoodsCardType[] = goodsItemJson.goods

  const filtering = [
    {
      id: 0,
      name: '최근 등록 순',
    },
    {
      id: 1,
      name: '마감 임박 순',
    },
    {
      id: 2,
      name: '조회수 순',
    },
    {
      id: 3,
      name: '좋아요 순',
    },
    {
      id: 4,
      name: '입찰 많은 순',
    },
  ]

  const [filter, setFilter] = useState<FilterType>(filtering[0])
  const [toggle, setToggle] = useState<boolean>(false)
  const [check, setCheck] = useState<boolean>(false)

  function handleFiltering(item: FilterType) {
    setFilter(item)
    setToggle(false)
    // api
  }

  function handleCheck() {
    setCheck(!check)
    // api
  }

  return (
    <div className="mt-[30px] px-[20px]">
      <div className="flex justify-between">
        <button type="button" className="flex" onClick={() => handleCheck()}>
          <span className="w-[20px] h-[20px] mr-[10px]">
            {check ? <CheckTrue /> : <CheckFalse />}
          </span>
          거래중인 것만 보기
        </button>
        <div className="relative">
          <p className="flex" onClick={() => setToggle(!toggle)} role="none">
            {filter.name}
            <span className="ml-[8px] content-center">
              <Arrow />
            </span>
          </p>
          {toggle && (
            <ul className="absolute z-10 w-[120px] top-[32px] -left-5 rounded-lg bg-white py-[5px] px-[8px] shadow-[0px_3px_10px_5px_rgba(0,0,0,0.05)]">
              {filtering.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleFiltering(item)}
                  role="none"
                  className={`${filter.id === item.id ? ' text-[#2B74B9]' : ' text-black'} p-2 cursor-pointer`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-[15px] flex flex-wrap gap-[10px] justify-center">
        {data.map((item, index: number) => (
          <GoodsItem
            key={item.goodsCode}
            code={item.goodsCode}
            goodsItemData={goodsItemData[index]}
          />
        ))}
      </div>
    </div>
  )
}
