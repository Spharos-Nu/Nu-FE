export interface BannerType {
  id: number
  url: string
  image: string
}

export interface LiveAndHotType {
  goodsCode: string
  thumbnail: ThumbnailType
  goodsName: string
  minPrice: number
  openedAt: string
  closedAt: string
  tradingStatus: number
}

export interface SoonAndHitsType {
  goodsCode: string
  thumbnail: ThumbnailType
  goodsName: string
  minPrice: number
  closedAt: string
  viewsCount: number
  wishCount: number
  biddingCount: number
  tradingStatus: number
  tagList: TagType[]
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

export interface ThumbnailType {
  id: number
  url: string
}
