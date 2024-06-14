import BiddingBtn from '@/containers/goods/detail/BiddingBtn'
import DetailDescription from '@/containers/goods/detail/DetailDescription'
import DetailImageArea from '@/containers/goods/detail/DetailImageArea'
import DetailInfo from '@/containers/goods/detail/DetailInfo'
import EtcArea from '@/containers/goods/detail/EtcArea'

export default function GoodsDetailPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode ? Number(searchParams.goodsCode) : 0

  const bidding = async (biddingData: FormData) => {
    'use server'

    console.log(biddingData)
    biddingData.get('biddingPrice')
  }

  return (
    <main className="pt-[5px]">
      <DetailImageArea />
      <DetailInfo />
      <DetailDescription />
      <EtcArea goodsCode={goodsCode} />
      <BiddingBtn bidding={bidding} />
    </main>
  )
}
