// import Intro from '@/containers/main/Intro'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import AdvertisingBanner from '@/containers/main/AdvertisingBanner'
import ComingSoon from '@/containers/main/ComingSoon'
import Hits from '@/containers/main/Hits'
import HotInterest from '@/containers/main/HotInterest'
import LiveBidding from '@/containers/main/LiveBidding'
import UserHeader from '@/containers/main/UserHeader'
import { getComingSoon, getHits, getHot, getLive } from '@/utils/mainApiActions'

export default async function IdolHome() {
  const session = await getServerSession(options)

  const [getLiveData, getHotData, getComingSoonData, getHitsData] =
    await Promise.all([getLive(2), getHot(2), getComingSoon(2), getHits(2)])

  const liveData = getLiveData.result
  const hotData = getHotData.result.goodsList
  const comingSoonData = getComingSoonData.result
  const hitsData = getHitsData.result.goodsList

  return (
    <main className="w-full">
      {/* <Intro /> */}
      {session ? <UserHeader /> : null}
      <AdvertisingBanner />
      <LiveBidding liveData={liveData} />
      <HotInterest hotData={hotData} />
      <ComingSoon comingSoonData={comingSoonData} />
      <Hits hitsData={hitsData} />
    </main>
  )
}
