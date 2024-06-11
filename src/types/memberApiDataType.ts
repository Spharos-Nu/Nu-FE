export interface ProfileData {
  profileImage: string
  nickname: string
  favCategory: string
}

export interface MannerDuckData {
  level: number
  leftPoint: number
}

export interface DuckPointDetailData {
  nowPage: number
  maxPage: number
  isLast: boolean
  historyList: {
    changeAmount: number
    leftPoint: number
    changeStatus: boolean
    historyDetail: string
    createdAt: string
  }[]
}
