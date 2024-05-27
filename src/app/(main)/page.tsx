// import Intro from '@/containers/main/Intro'

// import AdvertisingBanner from '@/containers/main/AdvertisingBanner'
import ComingSoon from '@/containers/main/ComingSoon'
import HighlyInterested from '@/containers/main/HighlyInterested'
import LiveBidding from '@/containers/main/LiveBidding'
import UserHeader from '@/containers/main/UserHeader'

export default function Home() {
  return (
    <main className="w-full">
      {/* <Intro /> */}
      <UserHeader />
      {/* <AdvertisingBanner /> */}
      <LiveBidding />
      <HighlyInterested />
      <ComingSoon />
    </main>
  )
}
