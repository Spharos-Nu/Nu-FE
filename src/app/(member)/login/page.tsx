import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import LoginForm from '@/containers/member/login/LoginForm'
import SocialForm from '@/containers/member/login/SocialForm'
import LoginDuck from '@/public/svgs/loginDuck.svg'
import { poppins } from '@/styles/fonts'

export default async function Login() {
  const session = await getServerSession(options)

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <div
        className={`${poppins.className} h-16 font-bold text-3xl leading-[30px] text-center text-[#032426] mx-14 mt-28`}
      >
        Glad to meet you again!
      </div>
      <LoginForm />
      <div className="mx-10 mt-5 flex justify-center items-center">
        <Link href="/join">
          계정을 아직 가지고 있지 않으세요?{' '}
          <span className="font-bold">회원가입</span>
        </Link>
      </div>
      <SocialForm />
      <div className="flex justify-center items-center my-14">
        <LoginDuck />
      </div>
    </>
  )
}
