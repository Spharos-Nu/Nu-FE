import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import JoinFormArea from '@/containers/member/join/JoinFormArea'
import { poppins } from '@/styles/fonts'

export default async function Join() {
  const session = await getServerSession(options)

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
      <JoinFormArea />
    </>
  )
}
