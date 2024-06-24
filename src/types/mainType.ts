export interface BannerType {
  id: number
  url: string
}

export interface LiveAndHotType {
  goodsCode: string
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}

export interface LiveType {
  goodsCode: string
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
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
  tag: TagType[]
}

export interface TagType {
  id: number
  name: string
}

export interface HotType {
  totalCount: number
  nowPage: number
  maxPage: number
  goodsList: LiveAndHotType[]
  isLast: boolean
}

export interface HitType {
  totalCount: number
  nowPage: number
  maxPage: number
  goodsList: SoonAndHitsType[]
  isLast: boolean
}

export interface ProfileType {
  userUuid: string
  profileImg: string
  nickname: string
  favCategory: string
}
