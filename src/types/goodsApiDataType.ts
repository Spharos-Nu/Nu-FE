export interface GoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: { goodsCode: number }[]
}

export interface SummaryData {
  thumbnailUrl: string
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}
