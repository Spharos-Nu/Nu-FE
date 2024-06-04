import SellerHeader from '@/containers/goods/seller/SellerHeader'
import SellerMannerDuck from '@/containers/goods/seller/SellerMannerDuck'
import SellerProfile from '@/containers/goods/seller/SellerProfile'
import SellerReview from '@/containers/goods/seller/SellerReview'

export default function SellerPage() {
  return (
    <div>
      <SellerHeader />
      <SellerProfile />
      <SellerMannerDuck />
      <SellerReview />
    </div>
  )
}
