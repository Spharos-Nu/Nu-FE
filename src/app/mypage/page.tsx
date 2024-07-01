import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import ActivityArea from '@/containers/mypage/ActivityArea'
import DuckPointArea from '@/containers/mypage/DuckPointArea'
import InfoArea from '@/containers/mypage/InfoArea'
import MannerDuckArea from '@/containers/mypage/MannerDuckArea'
import TradeArea from '@/containers/mypage/TradeArea'
import { getMannerDuck, getDuckPoint } from '@/utils/memberApiActions'

export default async function MyPage() {
  const session = await getServerSession(options)

  const [mannerDuckData, duckPointData] = await Promise.all([
    getMannerDuck(),
    getDuckPoint(),
  ])

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

  return (
    <>
      <InfoArea />
      <MannerDuckArea mannerDuckData={mannerDuckData} />
      <DuckPointArea duckPointData={duckPointData} />
      <TradeArea />
      <ActivityArea />
    </>
  )
}
