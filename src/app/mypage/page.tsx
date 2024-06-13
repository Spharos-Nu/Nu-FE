import ActivityArea from '@/containers/mypage/ActivityArea'
import DuckPointArea from '@/containers/mypage/DuckPointArea'
import InfoArea from '@/containers/mypage/InfoArea'
import MannerDuckArea from '@/containers/mypage/MannerDuckArea'
import TradeArea from '@/containers/mypage/TradeArea'
import { getMannerDuck, getDuckPoint } from '@/utils/memberApiActions'

export default async function MyPage() {
  const [mannerDuckData, duckPointData] = await Promise.all([
    getMannerDuck(),
    getDuckPoint(),
  ])

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
