interface DetailProps {
  changeAmount: number
  leftPoint: number
  changeStatus: boolean
  historyDetail: string
  createdAt: string
}

export default function DetailContent({
  changeAmount,
  leftPoint,
  changeStatus,
  historyDetail,
  createdAt,
}: DetailProps) {
  return (
    <div className="relative mx-5 my-5 h-20 bg-slate-100 rounded-xl">
      <div className="absolute top-4 left-5">{createdAt}</div>
      <div
        className={`absolute top-3 right-5 ${changeStatus ? 'text-blue-600' : 'text-red-500'} font-bold text-xl`}
      >
        {changeAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </div>
      <div className="absolute bottom-3 left-5">{historyDetail}</div>
      <div className="absolute bottom-3 right-5">
        잔여 포인트 {leftPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </div>
    </div>
  )
}
