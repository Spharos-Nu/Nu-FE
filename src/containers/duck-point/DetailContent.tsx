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
  const time = `${createdAt.split('T')[0]} ${createdAt.split('T')[1].split('.')[0]}`

  return (
    <div className="relative mx-5 my-5 h-32 bg-slate-100 rounded-xl">
      <div className="absolute top-4 left-5">{time}</div>
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
