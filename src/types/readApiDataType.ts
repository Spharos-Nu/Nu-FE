export interface GoodsListType {
  goodsCode: string
  thumbnail: string
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}

export interface SearchListType {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: GoodsListType[]
}

export interface KeywordType {
  keyword: string
}
