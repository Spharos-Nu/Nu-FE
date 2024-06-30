import NoticeList from '@/containers/mypage/NoticeList'

export default async function Notice() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc-n/notice?page=0&size=40&sort=`,
  )
  const data = await res.json()
  return (
    <div>
      <div className="flex flex-col mt-4 mb-4 ml-4 mr-4">
        <div className="text-xl font-bold mb-1">
          굿즈굿즈Duck에서 알려드려요
        </div>
        <hr className="flex-1 border-gray-300" />
      </div>
      <NoticeList data={data.result} />
    </div>
  )
}
