import NoticeList from '@/containers/mypage/NoticeList'

export default async function Notice() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc-n/notice?page=0&size=11&sort=`,
  )
  const data = await res.json()
  console.log(data.result)
  return <NoticeList data={data.result} />
}
