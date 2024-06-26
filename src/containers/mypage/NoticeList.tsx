'use client'

import Link from 'next/link'

interface NoticeListType {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface NoticeType {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  noticeList: NoticeListType[]
}

export default function NoticeList({ data }: { data: NoticeType }) {
  const result = data.noticeList
  return (
    <div className="p-4">
      {result && result.length > 0 ? (
        result.map((notice) => (
          <Link key={notice.id} href={`/mypage/notice/${notice.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer">
              <div className="text-lg font-bold mb-2">{notice.title}</div>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center text-gray-500">공지사항이 없습니다.</div>
      )}
    </div>
  )
}
