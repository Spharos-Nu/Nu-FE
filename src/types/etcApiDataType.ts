export interface ReviewListType {
  totalCount: number
  nowPage: number
  maxPage: number
  reviewList: ReviewType[]
  isLast: boolean
}

export interface ReviewType {
  reviewId: number
  goodsCode: string
  content: string
}
