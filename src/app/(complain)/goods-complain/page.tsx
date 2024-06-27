import ComplainForm from '@/containers/complain/ComplainForm'

export default function GoodsComplain({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  return (
    <main>
      <ComplainForm params={searchParams} />
    </main>
  )
}
