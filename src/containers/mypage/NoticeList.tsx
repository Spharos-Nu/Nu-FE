'use client'

// import Link from 'next/link'

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
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-2 py-2 text-center">No.</th>
            <th className="px-4 py-2 text-center">제목</th>
          </tr>
        </thead>
        <tbody>
          {result && result.length > 0 ? (
            result.map((notice, index) => (
              <tr
                key={notice.id}
                className="hover:bg-gray-100 cursor-pointer"
                // eslint-disable-next-line no-return-assign
                onClick={() =>
                  (window.location.href = `/mypage/notice/${notice.id}`)
                }
              >
                <td className="border px-2 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{notice.title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={2}
                className="border px-4 py-2 text-center text-gray-500"
              >
                공지사항이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
