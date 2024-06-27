interface NoticeListType {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default async function NoticeDetail({
  params,
}: {
  params: { noticeId: number }
}) {
  const { noticeId } = params
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc-n/notice/${noticeId}`,
  )
  const data = await res.json()
  const notice = data.result as NoticeListType

  const date = new Date(notice.createdAt)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">{notice.title}</h1>
      <div className="text-gray-600 text-sm mb-4">
        작성일: {year}-{month}-{day}
      </div>
      <p className="text-gray-800 leading-relaxed">{notice.content}</p>
    </div>
  )
}
