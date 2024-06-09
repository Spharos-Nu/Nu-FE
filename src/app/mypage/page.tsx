import ActivityArea from '@/containers/mypage/ActivityArea'
import DuckPointArea from '@/containers/mypage/DuckPointArea'
import InfoArea from '@/containers/mypage/InfoArea'
import MannerDuckArea from '@/containers/mypage/MannerDuckArea'
import TradeArea from '@/containers/mypage/TradeArea'
import {
  getProfile,
  getMannerDuck,
  getDuckPoint,
} from '@/utils/mypageApiActions'

export default async function MyPage() {
  const [profileData, mannerDuckData, duckPointData] = await Promise.all([
    getProfile(),
    getMannerDuck(),
    getDuckPoint(),
  ])

  return (
    <>
      <InfoArea profileData={profileData} />
      <MannerDuckArea mannerDuckData={mannerDuckData} />
      <DuckPointArea duckPointData={duckPointData} />
      <TradeArea />
      <ActivityArea />
    </>
  )
}
