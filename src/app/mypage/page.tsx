import ActivityArea from '@/containers/mypage/ActivityArea'
import DuckPointArea from '@/containers/mypage/DuckPointArea'
import InfoArea from '@/containers/mypage/InfoArea'
import MannerDuckArea from '@/containers/mypage/MannerDuckArea'
import TradeArea from '@/containers/mypage/TradeArea'
// import { getProfile } from '@/utils/mypageApi'

export default async function MyPage() {
  // Todo: 주석 풀고 데이터 페칭 확인하기

  // const profileData = await getProfile()
  // const mannerDuckResult = getMannerDuck()
  // const duckPointResult = getDuckPoint()

  // const [profileData, mannerDuckData, duckPointData] = await Promise.all([
  //   profileResult,
  //   mannerDuckResult,
  //   duckPointResult,
  // ])

  return (
    <>
      <InfoArea />
      <MannerDuckArea />
      <DuckPointArea />
      <TradeArea />
      <ActivityArea />
    </>
  )
}
