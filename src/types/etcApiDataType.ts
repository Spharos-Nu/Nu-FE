export interface ReviewListType {
  totalCount: number
  nowPage: number
  maxPage: number
  reviewList: ReviewList[]
  isLast: boolean
}

export interface ReviewList {
  reviewId: number
  goodsCode: string
  content: string
}
