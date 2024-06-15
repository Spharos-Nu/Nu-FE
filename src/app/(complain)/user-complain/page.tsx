import ComplainForm from '@/containers/complain/ComplainForm'

export default function UserComplain({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const seller = searchParams.seller ? (searchParams.seller as string) : ''
  const goodsCode = searchParams.goodsCode ? Number(searchParams.goodsCode) : 0

  const userComplainPost = async (complainData: FormData) => {
    'use server'

    // eslint-disable-next-line no-console
    console.log(goodsCode)
    // eslint-disable-next-line no-console
    console.log(seller)
    // eslint-disable-next-line no-console
    console.log(complainData)
    complainData.get('content')
  }

  return (
    <main>
      <ComplainForm complainPost={userComplainPost} />
    </main>
  )
}
