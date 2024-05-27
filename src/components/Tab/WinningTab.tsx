'use client'

import { TabType } from '@/components/Tab/MypageTabType'
import { WinningTabStore } from '@/containers/mypage/store'

export default function WinningTab() {
  const { currentState, setState } = WinningTabStore()
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
            className={`w-1/${tab.length} flex justify-center ${currentState === element.idx ? 'text-black' : 'text-slate-400'}`}
          >
            <button
              type="button"
              id={element.title}
              onClick={() => setState(element.idx)}
            >
              {element.title}
            </button>
          </div>
        )
      })}
    </div>
  )
}
