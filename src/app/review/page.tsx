import MyPageHeader from '@/components/Header/MyPageHeader'
import ReviewForm from '@/containers/review/ReviewForm'

export default function Review({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode ? String(searchParams.goodsCode) : ''
  const receiverUuid = searchParams.receiverUuid
    ? String(searchParams.receiverUuid)
    : ''

  return (
    <main>
      <MyPageHeader />
      <ReviewForm goodsCode={goodsCode} receiverUuid={receiverUuid} />
    </main>
  )
}
