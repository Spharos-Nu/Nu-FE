import SellerHeader from '@/containers/goods/seller/SellerHeader'
import SellerMannerDuck from '@/containers/goods/seller/SellerMannerDuck'
import SellerProfile from '@/containers/goods/seller/SellerProfile'
import SellerReview from '@/containers/goods/seller/SellerReview'

export default function SellerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode ? Number(searchParams.goodsCode) : 0

  return (
    <>
      <SellerHeader goodsCode={goodsCode} />
      <SellerProfile />
      <SellerMannerDuck />
      <SellerReview />
    </>
  )
}
