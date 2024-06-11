'use client'

import { TabType } from '@/components/Tab/MypageTabType'
import { useWinningStore } from '@/containers/mypage/store'

export default function WinningTab() {
  const { currentStatus, setStatus } = useWinningStore()
  const tab: TabType[] = [
    {
      idx: 0,
      title: '전체',
    },
    {
      idx: 1,
      title: '낙찰',
    },
    {
      idx: 2,
      title: '거래완료',
    },
    {
      idx: 3,
      title: '거래취소',
    },
  ]

  return (
    <div className="flex justify-between text-sm mx-6 mt-2">
      {tab.map((element) => {
        return (
          <div
            key={element.idx}
            aria-label={element.title}
            className={`w-1/${tab.length} flex justify-center ${currentStatus === element.idx ? 'text-black' : 'text-slate-400'}`}
          >
            <button
              type="button"
              id={element.title}
              onClick={() => setStatus(element.idx)}
            >
              {element.title}
            </button>
          </div>
        )
      })}
    </div>
  )
}
