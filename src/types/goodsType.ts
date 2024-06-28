// 리스트 조회
export interface GoodsAllListType {
  totalCount: number
  nowPage: number
  maxPage: number
  goodsList: GoodsCardType[]
  isLast: boolean
}

export interface GoodsCardType {
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

export interface FilterType {
  id: number
  name: string
  value: string
}

export interface WishTradeType {
  id: number
  name: string
}

// 상세 조회
export interface GoodsDetailType {
  goodsCode: string
  categoryId: number
  sellerUuid: string
  name: string
  description: string
  minPrice: number
  tradingStatus: number
  openedAt: string
  closedAt: string
  wishTradeType: number
  isDisable: boolean
  createdAt: string
  updatedAt: string
}

export interface ImageUrlType {
  id: number
  url: string
}

export interface TagType {
  id: number
  name: string
}

// 판매자 - 입찰 목록
export interface BiddingPreviewType {
  bidId: number
  bidderUuid: string
  price: number
  createdAt: string
}

export interface BiddingUserType {
  userUuid: string
  profileImage: string
  nickname: string
  favCategory: string
}

// 최고 입찰가 조회
export interface BiddingMaxType {
  bidId: number
  bidderUuid: string
  price: number
}

// 판매자 정보 조회
export interface SellerProfileType {
  userUuid: string
  nickname: string
  profileImage: string
  favCategory: string
}

export interface SellerReviewListType {
  totalCount: number
  nowPage: number
  maxPage: number
  reviewList: SellerReviewType[]
}

export interface SellerReviewType {
  reviewId: number
  goodsCode: string
  content: string
}

export interface SellerMannerType {
  level: number
  leftPoint: number
}
