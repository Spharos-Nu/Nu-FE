export interface GoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: BiddingType[]
}

export interface BiddingType {
  goodsCode: number
  name: string
  price: number
  thumbnail: string
}

export interface SummaryData {
  thumbnailUrl: string
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}
