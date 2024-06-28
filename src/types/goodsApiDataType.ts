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

export interface DetailDataType {
  tradingStatus: string
  goodsName: string
  description: string
  minPrice: number
  openedAt: string
  closedAt: string
  wishTradeType: string
  tags: TagType[]
  imageUrls: ImageType[]
}

export interface TagType {
  id: number
  name: string
}

export interface ImageType {
  id: number
  url: string
}
