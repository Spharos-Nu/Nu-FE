// import Intro from '@/containers/main/Intro'

// import AdvertisingBanner from '@/containers/main/AdvertisingBanner'
import ComingSoon from '@/containers/main/ComingSoon'
import HotInterest from '@/containers/main/HotInterest'
import LiveBidding from '@/containers/main/LiveBidding'
import UserHeader from '@/containers/main/UserHeader'

export default function Home() {
  return (
    <main className="w-full">
      {/* <Intro /> */}
      <UserHeader />
      {/* <AdvertisingBanner /> */}
      <LiveBidding />
      <HotInterest />
      <ComingSoon />
    </main>
  )
}
