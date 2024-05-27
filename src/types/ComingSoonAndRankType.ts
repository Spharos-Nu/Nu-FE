export interface ComingSoonAndRankType {
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
