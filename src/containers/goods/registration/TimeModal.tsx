import { CgClose } from 'react-icons/cg'

export default function TimeModal({
  setTimeVisible,
  getPickTime,
}: {
  setTimeVisible: React.Dispatch<React.SetStateAction<boolean>>
  getPickTime: (item: string) => void
}) {
  const times = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ]

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px] w-1/2 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setTimeVisible(false)}
          className="w-[20px] h-[20px] text-[#2B74B9] absolute right-0 mr-[20px] mt-[2px]"
        />
        <p className="text-center text-[18px] text-[#2B74B9]">시작 시간</p>
        <ul className="flex flex-col overflow-y-auto h-[310px] mt-[20px]">
          {times.map((time) => (
            <li
              key={time}
              className="text-center pb-[7px]"
              role="none"
              onClick={() => {
                getPickTime(time)
                setTimeVisible(false)
              }}
            >
              {time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
