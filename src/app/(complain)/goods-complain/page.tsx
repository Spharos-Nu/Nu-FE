import ComplainForm from '@/containers/complain/ComplainForm'

export default function GoodsComplain({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode ? Number(searchParams.goodsCode) : 0

  const goodsComplainPost = async (complainData: FormData) => {
    'use server'

    // eslint-disable-next-line no-console
    console.log(goodsCode)
    // eslint-disable-next-line no-console
    console.log(complainData)
    complainData.get('')
  }

  return (
    <main>
      <ComplainForm complainPost={goodsComplainPost} />
    </main>
  )
}
