import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { poppins } from '@/styles/fonts'

export default async function FindInfo() {
  const session = await getServerSession(options)

  if (session) {
    return redirect('/')
  }

  return (
    <h1
      className={`${poppins.className} h-16 font-bold text-3xl leading-[30px] text-center text-[#032426] mx-14 mt-28`}
    >
      FIND_INFO
    </h1>
  )
}
