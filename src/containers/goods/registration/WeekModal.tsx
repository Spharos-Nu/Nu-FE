import { CgClose } from 'react-icons/cg'

export default function WeekModal({
  setWeekVisible,
  getPickPeriod,
}: {
  setWeekVisible: React.Dispatch<React.SetStateAction<boolean>>
  getPickPeriod: (item: string) => void
}) {
  const today = new Date()
  const weekLater = new Date(today)
  weekLater.setDate(weekLater.getDate() + 7)

  const week = []
  for (let i = 0; i < 7; i += 1) {
    week.push(today.toISOString().split('T')[0])
    today.setDate(today.getDate() + 1)
  }

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[350px] w-1/2 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setWeekVisible(false)}
          className="w-[20px] h-[20px] text-sky-600 absolute right-0 mr-[20px] mt-[2px]"
        />
        <p className="text-center text-[18px] text-sky-600">날짜 선택</p>
        <ul className="mt-[20px]">
          {week.map((date) => (
            <li
              key={date}
              className="text-center pb-[15px]"
              role="none"
              onClick={() => {
                getPickPeriod(date)
                setWeekVisible(false)
              }}
            >
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
