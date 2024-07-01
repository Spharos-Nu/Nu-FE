// import Intro from '@/containers/main/Intro'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import AdvertisingBanner from '@/containers/main/AdvertisingBanner'
import ComingSoon from '@/containers/main/ComingSoon'
import Hits from '@/containers/main/Hits'
import HotInterest from '@/containers/main/HotInterest'
import LiveBidding from '@/containers/main/LiveBidding'
import NonUserHeader from '@/containers/main/NonUserHeader'
import UserDuckPoint from '@/containers/main/UserDuckPoint'
import UserProfile from '@/containers/main/UserProfile'
import {
  getComingSoon,
  getDuckPoint,
  getHits,
  getHot,
  getLive,
} from '@/utils/mainApiActions'

export default async function IdolHome() {
  const session = await getServerSession(options)

  const [
    getLiveData,
    getHotData,
    getComingSoonData,
    getHitsData,
    getDuckPointData,
  ] = await Promise.all([
    getLive(2),
    getHot(2),
    getComingSoon(2),
    getHits(2),
    getDuckPoint(),
  ])

  const liveData = getLiveData.result
  const hotData = getHotData.result.goodsList
  const comingSoonData = getComingSoonData.result
  const hitsData = getHitsData.result.goodsList
  const duckPointData =
    getDuckPointData.status === 200 ? getDuckPointData.result : -1

  return (
    <main className="w-full">
      <div className="flex justify-between pt-4 pl-6 pr-6">
        {/* <Intro /> */}
        {session && duckPointData !== -1 ? <UserProfile /> : <NonUserHeader />}
        <div className="content-center">
          {duckPointData !== -1 && (
            <UserDuckPoint duckPointData={duckPointData} />
          )}
        </div>
      </div>
      <AdvertisingBanner />
      <LiveBidding liveData={liveData} />
      <HotInterest hotData={hotData} />
      <ComingSoon comingSoonData={comingSoonData} />
      <Hits hitsData={hitsData} />
    </main>
  )
}
