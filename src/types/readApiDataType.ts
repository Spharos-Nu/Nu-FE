export interface GoodsListType {
  goodsCode: number
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
  goodsList: GoodsListType[]
  isLast: boolean
}

export interface KeywordType {
  keyword: string
}

export interface ReadsGoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  goodsList: SellType[]
  isLast: boolean
}

export interface SellType {
  goodsCode: string
  thumbnail: ThumbnailType
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}

export interface ThumbnailType {
  id: number
  url: string
}
