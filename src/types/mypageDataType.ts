export interface ProfileData {
  profileImg: string
  nickname: string
  favCategory: string
}

export interface MannerDuckData {
  level: number
  leftPoint: number
}

export interface GoodsData {
  totalCount: number
  nowPage: number
  maxPage: number
  isLast: boolean
  goodsList: [goodsCode: number]
}

export interface DuckPointDetailData {
  nowPage: number
  maxPage: number
  isLast: boolean
  historyList: [
    {
      changeAmount: number
      leftPoint: number
      changeStatus: boolean
      historyDetail: string
      createdAt: string
    },
  ]
}
