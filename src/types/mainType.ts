export interface BannerType {
  id: number
  url: string
}

export interface LiveAndHotType {
  goodsCode: string
  thumbnail: string
  goodsName: string
  minPrice: number
  closedAt: string
  viewsCount: number
  wishCount: number
  biddingCount: number
  tradingStatus: number
}

export interface SoonAndHitsType {
  goodsCode: string
  thumbnail: string
  goodsName: string
  minPrice: number
  closedAt: string
  viewsCount: number
  wishCount: number
  biddingCount: number
  tradingStatus: number
  tag: Tag[]
}

export interface Tag {
  tagId: number
  tagName: string
}
