import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import LikeList from '@/containers/mypage/like/LikeList'

export default async function Like() {
  const session = await getServerSession(options)

  if (session?.user.accessToken === undefined)
    return (
      <>
        세션이 만료되었습니다.{' '}
        <Link
          href={`/login?callbackUrl=${window.location.href}`}
          className="hover:bg-gray-200 text-blue-500 underline"
        >
          로그인 페이지로 이동
        </Link>
      </>
    )

  return <LikeList />
}
