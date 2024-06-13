export interface GoodsCardType {
  goodsCode: string
  goodsName: string
  minPrice: number
  tradingStatus: number
  opendAt: string
  closedAt: string
}

export interface FilterType {
  id: number
  name: string
}

export interface WishTradeType {
  id: number
  name: string
}
