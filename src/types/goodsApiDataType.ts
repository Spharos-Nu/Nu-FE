export interface GoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: BidType[]
}

export interface BidType {
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
