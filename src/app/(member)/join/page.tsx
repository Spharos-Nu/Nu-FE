import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import JoinForm from '@/containers/member/join/JoinForm'
import { poppins } from '@/styles/fonts'

export default async function Join() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <div
        className={`${poppins.className} h-16 font-bold text-3xl leading-[30px] text-center text-[#032426] mx-14 mt-28`}
      >
        JOIN US
      </div>
      <JoinForm />
    </>
  )
}
