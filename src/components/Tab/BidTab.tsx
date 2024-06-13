'use client'

import { TabType } from '@/components/Tab/MypageTabType'
import { useBidStore } from '@/containers/mypage/store'

export default function BidTab() {
  const { currentStatus, setStatus, setPage } = useBidStore()
  const tab: TabType[] = [
    {
      status: null,
      title: '전체',
    },
    {
      status: 1,
      title: '경매 중',
    },
    {
      status: 2,
      title: '경매종료',
    },
    {
      status: 3,
      title: '거래완료',
    },
    {
      status: 4,
      title: '거래취소',
    },
  ]

  return (
    <div className="flex justify-between text-sm mx-6 mt-2">
      {tab.map((element) => {
        return (
          <div
            key={element.status}
            aria-label={element.title}
            className={`w-1/${tab.length} flex justify-center ${currentStatus === element.status ? 'text-black' : 'text-slate-400'}`}
          >
            <button
              type="button"
              id={element.title}
              onClick={() => {
                setStatus(element.status)
                setPage(0)
              }}
            >
              {element.title}
            </button>
          </div>
        )
      })}
    </div>
  )
}
