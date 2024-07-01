import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import BiddingBtn from '@/containers/goods/detail/BiddingBtn'
import BiddingPreview from '@/containers/goods/detail/BiddingPreview'
import ConfirmationBtn from '@/containers/goods/detail/ConfirmationBtn'
import DeleteBtn from '@/containers/goods/detail/DeleteBtn'
import DetailDescription from '@/containers/goods/detail/DetailDescription'
import DetailImageArea from '@/containers/goods/detail/DetailImageArea'
import DetailInfo from '@/containers/goods/detail/DetailInfo'
import EtcArea from '@/containers/goods/detail/EtcArea'
import ToTalArea from '@/containers/goods/detail/ToTalArea'
import {
  getGoodsDetail,
  getLikeCount,
  getViews,
  getBiddingCount,
  getGoodsTags,
  getGoodsImages,
  getBiddingPreview,
  postIncreaseViews,
} from '@/utils/goodsDetailApiActions'

export default async function GoodsDetailPage({
  params,
}: {
  params: { goodsCode: string }
}) {
  const { goodsCode } = params
  const [
    goodsDetailData,
    getGoodsTagData,
    getGoodsImageData,
    getLikeData,
    getViewData,
    getBiddingCountData,
    getBiddingListData,
  ] = await Promise.all([
    getGoodsDetail(goodsCode),
    getGoodsTags(goodsCode),
    getGoodsImages(goodsCode),
    getLikeCount(goodsCode),
    getViews(goodsCode),
    getBiddingCount(goodsCode),
    getBiddingPreview(goodsCode),
    postIncreaseViews(goodsCode),
  ])

  // const getBiddingList = await getBiddingPreview(goodsCode)
  // const biddingList = getBiddingListData.result

  const goodsDetail = goodsDetailData.result
  const tags = getGoodsTagData.result
  const images = getGoodsImageData.result
  const likeCount = getLikeData.result
  const viewCount = getViewData.result
  const biddingCount = getBiddingCountData.result
  const biddingList = getBiddingListData.result

  const session = await getServerSession(options)
  const uuid = session?.user.uuid

  return (
    <main className="pt-[5px] pb-[30px]">
      <DetailImageArea images={images} />
      <DetailInfo goodsDetail={goodsDetail} />
      <DetailDescription goodsDetail={goodsDetail} tags={tags} />
      <ToTalArea
        likeCount={likeCount}
        viewCount={viewCount}
        biddingCount={biddingCount}
      />
      {uuid === goodsDetail.sellerUuid ? (
        <>
          {goodsDetail.tradingStatus >= 1 &&
            getBiddingListData.status === 200 && (
              <BiddingPreview biddingList={biddingList} />
            )}
          {goodsDetail.tradingStatus === 2 && (
            <ConfirmationBtn biddingList={biddingList} goodsCode={goodsCode} />
          )}
          {goodsDetail.tradingStatus === 0 && (
            <DeleteBtn
              goodsCode={goodsCode}
              tradingStatus={goodsDetail.tradingStatus}
            />
          )}
          {goodsDetail.tradingStatus === 4 && (
            <DeleteBtn
              goodsCode={goodsCode}
              tradingStatus={goodsDetail.tradingStatus}
            />
          )}
          {goodsDetail.tradingStatus === 5 && (
            <DeleteBtn
              goodsCode={goodsCode}
              tradingStatus={goodsDetail.tradingStatus}
            />
          )}
        </>
      ) : (
        <>
          <EtcArea goodsCode={goodsCode} goodsDetail={goodsDetail} />
          {goodsDetail.tradingStatus === 1 && (
            <BiddingBtn goodsCode={goodsCode} />
          )}
        </>
      )}
    </main>
  )
}
