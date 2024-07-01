export interface GoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: { goodsCode: string }[]
}
