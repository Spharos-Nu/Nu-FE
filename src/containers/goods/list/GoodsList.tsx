'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Sending from '@/components/Chat/Sending'
import Arrow from '@/public/svgs/header/below_arrow.svg'
import CheckFalse from '@/public/svgs/icon/checkFalse.svg'
import CheckTrue from '@/public/svgs/icon/checkTrue.svg'
import { FilterType, GoodsCardType } from '@/types/goodsType'
import { getGoodsList } from '@/utils/goodsListApiActions'
import { useInView } from 'react-intersection-observer'
import GoodsItem from './GoodsItem'

export default function GoodsList() {
  const pathname = usePathname()

  const filtering = [
    {
      id: 0,
      name: '최근 등록 순',
      value: 'createdAt',
    },
    {
      id: 1,
      name: '마감 임박 순',
      value: 'closedAt',
    },
    {
      id: 2,
      name: '조회수 순',
      value: 'viewsCount',
    },
    {
      id: 3,
      name: '좋아요 순',
      value: 'wishCount',
    },
    {
      id: 4,
      name: '입찰 많은 순',
      value: 'bidCount',
    },
  ]

  const [categoryId, setCategoryId] = useState<number | null>(null)
  const [filter, setFilter] = useState<FilterType>(filtering[0])
  const [toggle, setToggle] = useState<boolean>(false)
  const [isTrading, setIsTrading] = useState<boolean>(false)

  // 무한 스크롤
  const [items, setItems] = useState<GoodsCardType[]>([])
  const [maxPage, setMaxPage] = useState<number>(0)
  const [page, setPage] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [isLast, setIsLast] = useState<boolean>(false)

  const getList = useCallback(
    async (resetPage = false) => {
      if (isFetching || categoryId === null) return
      setIsFetching(true)
      try {
        // 데이터 패칭을 시작하면 로딩 상태를 로딩중으로 변환
        setIsLoading(true)

        const currentPage = resetPage ? 0 : page
        const goodsListData = await getGoodsList(
          categoryId,
          isTrading,
          currentPage,
          10,
          filter.value,
          'DESC',
        )
        const newItems = goodsListData.result.goodsList
        setIsLast(goodsListData.result.isLast)
        const newMaxPage = goodsListData.result.maxPage

        // 로딩중을 표시할 div가 보일 시간을 주기 위한 setTimeout
        setTimeout(() => {
          setItems((prevItems) =>
            resetPage ? newItems : [...prevItems, ...newItems],
          )
        }, 1500)
        // 패칭이 실행되면 다음에 실행될 페이지를 1page씩 늘려준다.
        setMaxPage(newMaxPage)
        if (currentPage < newMaxPage - 1) {
          setPage(currentPage + 1)
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      } finally {
        setIsLoading(false)
        setIsFetching(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [categoryId, isTrading, page, filter.value, isFetching],
  )

  useEffect(() => {
    const category = pathname.split('/')[1]
    if (category === 'animation') setCategoryId(1)
    else if (category === 'idol') setCategoryId(2)
    else if (category === 'baseball') setCategoryId(3)
    else setCategoryId(0) // 기본 카테고리 설정
    if (categoryId) getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, isTrading, filter])

  useEffect(() => {
    if (isLast) return
    if (inView && page < maxPage) {
      getList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  function handleFiltering(item: FilterType) {
    setFilter(item)
    setToggle(false)
    setItems([])
    setPage(0)
  }

  function handleIsTrading() {
    setIsTrading(!isTrading)
    setItems([])
    setPage(0)
  }

  return (
    <main className="mt-[30px] px-[20px]">
      <div className="flex justify-between">
        <button
          type="button"
          className="flex"
          onClick={() => handleIsTrading()}
        >
          <span className="w-[20px] h-[20px] mr-[10px]">
            {isTrading ? <CheckTrue /> : <CheckFalse />}
          </span>
          거래중인 것만 보기
        </button>
        <div className="relative">
          <button
            className="flex"
            onClick={() => setToggle(!toggle)}
            type="button"
          >
            {filter.name}
            <div className="ml-[8px] place-self-center">
              <Arrow />
            </div>
          </button>
          {toggle && (
            <ul className="absolute z-20 w-[120px] top-[32px] -left-5 rounded-lg bg-white py-[5px] px-[8px] shadow-[0px_3px_10px_5px_rgba(0,0,0,0.05)]">
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
      <div className="mt-[15px] mb-[20px] grid grid-cols-2 gap-2 sm:grid-cols-3 md:w-4grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((item) => (
          <GoodsItem key={item.goodsCode} goodsItemData={item} />
        ))}
      </div>
      <div ref={ref} />
      {isLoading === true ? (
        <div className="flex h-full items-center justify-center">
          <Sending />
        </div>
      ) : null}
    </main>
  )
}
