'use client'

import { useToastStore } from '@/components/Toast/store'

export default function AnnouncementArea() {
  const { showToast } = useToastStore()

  const noticeNotYet = () => {
    showToast('준비중입니다')
  }

  return (
    <div className="mx-7 my-4 rounded-3xl bg-slate-100 px-2 py-2">
      <div className="flex justify-center">
        <span className="text-xs pl-4">그 외 설정</span>
      </div>
      <hr className="my-2 border-gray-300" />
      <a
        href="/mypage/notice"
        className="flex my-3 ml-3 text-black-500 hover:underline"
      >
        공지사항
      </a>
      <hr className="my-2 border-gray-300" />
      <a
        href="https://sites.google.com/view/goodsgoodsduck-service-term/홈"
        className="flex my-3 ml-3 text-black-500 hover:underline"
      >
        이용약관
      </a>
      <hr className="my-2 border-gray-300" />
      <a
        href="https://sites.google.com/view/goodsgoodsduck-privacy-policy/홈"
        className="flex my-3 ml-3 text-black-500 hover:underline"
      >
        개인정보처리방침
      </a>
      <hr className="my-2 border-gray-300" />
      <div
        className="flex my-3 ml-3 text-black-500 hover:underline"
        role="button"
        tabIndex={0}
        onClick={() => noticeNotYet()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            noticeNotYet()
          }
        }}
      >
        Version 정보
      </div>
    </div>
  )
}
