// import { options } from '@/app/api/auth/[...nextauth]/options'
import BiddingBtn from '@/containers/goods/detail/BiddingBtn'
import BiddingPreview from '@/containers/goods/detail/BiddingPreview'
import ConfirmationBtn from '@/containers/goods/detail/ConfirmationBtn'
import DeleteBtn from '@/containers/goods/detail/DeleteBtn'
import DetailDescription from '@/containers/goods/detail/DetailDescription'
import DetailImageArea from '@/containers/goods/detail/DetailImageArea'
import DetailInfo from '@/containers/goods/detail/DetailInfo'
import EtcArea from '@/containers/goods/detail/EtcArea'
import ToTalArea from '@/containers/goods/detail/ToTalArea'
// import { getServerSession } from 'next-auth'
// import { getGoodsDetail } from '@/utils/goodsDetailApiActions'

export default async function GoodsDetailPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const goodsCode = searchParams.goodsCode
    ? (searchParams.goodsCode as string)
    : ''

  // const goodsDetailData = await Promise.all([getGoodsDetail(goodsCode)])
  // const goodsDetail = goodsDetailData[0].result
  // console.log(goodsDetail)

  // const session = await getServerSession(options)
  // const uuid = session?.user.uuid

  // to do: 조회수 올리는 api 호출
  const uuid = 'string'

  const goodsDetail = {
    uuid: 'string',
    tradingStatus: 3,
    goodsName: '포카',
    description: '포키포키',
    minPrice: 10000,
    openedAt: '2024-06-18T09:27:30.000',
    closedAt: '2024-06-18T09:28:00.000',
    wishTradeType: 1,
    tags: [
      { id: 4, name: '#string' },
      { id: 5, name: '#string' },
    ],
    imageUrls: [{ id: 0, url: 'string' }],
  }

  const bidding = async (biddingData: FormData) => {
    'use server'

    console.log(biddingData)
    biddingData.get('biddingPrice')
  }

  const biddingConfirm = async (biddingData: FormData) => {
    'use server'

    console.log(biddingData)
  }

  return (
    <main className="pt-[5px] pb-[30px]">
      <DetailImageArea />
      <DetailInfo goodsDetail={goodsDetail} />
      <DetailDescription goodsDetail={goodsDetail} />
      <ToTalArea />
      {uuid === goodsDetail.uuid ? (
        <>
          {goodsDetail.tradingStatus >= 1 && (
            <BiddingPreview goodsCode={goodsCode} />
          )}
          {goodsDetail.tradingStatus === 2 && (
            <ConfirmationBtn biddingConfirm={biddingConfirm} />
          )}
          {goodsDetail.tradingStatus === 0 && <DeleteBtn />}
          {goodsDetail.tradingStatus === 4 && <DeleteBtn />}
          {goodsDetail.tradingStatus === 5 && <DeleteBtn />}
        </>
      ) : (
        <>
          <EtcArea goodsCode={goodsCode} />
          <BiddingBtn bidding={bidding} />
        </>
      )}
    </main>
  )
}
