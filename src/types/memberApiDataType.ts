export interface ProfileData {
  userUuid: string
  profileImage: string
  nickname: string
  favCategory: string
}

export interface MannerDuckData {
  level: number
  leftPoint: number
}

export interface DuckPointHistoryType {
  changeAmount: number
  leftPoint: number
  changeStatus: boolean
  historyDetail: string
  createdAt: string
}

export interface DuckPointDetailData {
  nowPage: number
  maxPage: number
  isLast: boolean
  historyList: DuckPointHistoryType[]
}
