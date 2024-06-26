// import Intro from '@/containers/main/Intro'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import AdvertisingBanner from '@/containers/main/AdvertisingBanner'
import ComingSoon from '@/containers/main/ComingSoon'
import Hits from '@/containers/main/Hits'
import HotInterest from '@/containers/main/HotInterest'
import LiveBidding from '@/containers/main/LiveBidding'
import UserHeader from '@/containers/main/UserHeader'
import {
  getComingSoon,
  getDuckPoint,
  getHits,
  getHot,
  getLive,
} from '@/utils/mainApiActions'

export default async function AnimationHome() {
  const session = await getServerSession(options)

  const [
    getLiveData,
    getHotData,
    getComingSoonData,
    getHitsData,
    getDuckPointData,
  ] = await Promise.all([
    getLive(1),
    getHot(1),
    getComingSoon(1),
    getHits(1),
    getDuckPoint(),
  ])

  const liveData = getLiveData.result
  const hotData = getHotData.result.goodsList
  const comingSoonData = getComingSoonData.result
  const hitsData = getHitsData.result.goodsList
  const duckPointData = getDuckPointData.result

  return (
    <main className="w-full">
      {/* <Intro /> */}
      {session ? <UserHeader duckPointData={duckPointData} /> : null}
      <AdvertisingBanner />
      <LiveBidding liveData={liveData} />
      <HotInterest hotData={hotData} />
      <ComingSoon comingSoonData={comingSoonData} />
      <Hits hitsData={hitsData} />
    </main>
  )
}
