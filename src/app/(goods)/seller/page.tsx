import SellerHeader from '@/containers/goods/seller/SellerHeader'
import SellerMannerDuck from '@/containers/goods/seller/SellerMannerDuck'
import SellerProfile from '@/containers/goods/seller/SellerProfile'
import SellerReview from '@/containers/goods/seller/SellerReview'
import {
  getSellerMannerDuck,
  getSellerProfile,
  getSellerReview,
} from '@/utils/goodsDetailApiActions'

export default async function SellerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode ? String(searchParams.goodsCode) : ''

  const seller = searchParams.seller ? String(searchParams.seller) : ''

  const [SellerProfileData, SellerReviewData, SellerMannerDuckData] =
    await Promise.all([
      getSellerProfile(seller),
      getSellerReview(seller),
      getSellerMannerDuck(seller),
    ])

  const sellerProfile = SellerProfileData.result
  const sellerReview = SellerReviewData.result
  const sellerMannerDuck = SellerMannerDuckData.result

  return (
    <>
      <SellerHeader goodsCode={goodsCode} seller={seller} />
      <SellerProfile sellerProfile={sellerProfile} />
      <SellerMannerDuck
        sellerMannerDuck={sellerMannerDuck}
        nickname={sellerProfile.nickname}
      />
      <SellerReview sellerReview={sellerReview} />
    </>
  )
}
