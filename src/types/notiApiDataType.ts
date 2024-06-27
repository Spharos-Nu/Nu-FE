export interface NotiListType {
  id: number
  title: string
  content: string
  notificationType: number
  createdAt: string
  read: boolean
}

export interface NotiData {
  totalCount: number
  nowPage: number
  maxPage: number
  notificationList: NotiListType[]
  isLast: boolean
}
