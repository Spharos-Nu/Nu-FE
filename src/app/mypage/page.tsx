import InfoArea from '@/containers/mypage/InfoArea'
import { getProfile } from '@/utils/mypageApi'

export default async function MyPage() {
  const profile = await getProfile()

  return (
    <>
      <InfoArea profileData={profile} />
      <div>MannerDuckArea</div>
      <div>DuckPointArea</div>
      <div>TradeArea</div>
      <div>ActivityArea</div>
    </>
  )
}
