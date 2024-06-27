import ComplainForm from '@/containers/complain/ComplainForm'

export default function UserComplain({
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
