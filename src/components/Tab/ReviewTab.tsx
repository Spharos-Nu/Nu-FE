'use client'

import { TabType } from '@/components/Tab/MypageTabType'
import { useReviewStore } from '@/containers/mypage/store'

export default function ReviewTab() {
  const { currentStatus, setStatus } = useReviewStore()
  const tab: TabType[] = [
    {
      idx: 0,
      title: '작성 가능한 상품',
    },
    {
      idx: 1,
      title: '작성 완료된 상품',
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
