import { CgClose } from 'react-icons/cg'
import { useGoodsStore } from '@/containers/goods/registration/store'

export default function TimeModal({
  setTimeVisible,
  getPickTime,
}: {
  setTimeVisible: React.Dispatch<React.SetStateAction<boolean>>
  getPickTime: (item: string) => void
}) {
  const times = [
    {
      id: 0,
      time: '00:00',
    },
    {
      id: 1,
      time: '01:00',
    },
    {
      id: 2,
      time: '02:00',
    },
    {
      id: 3,
      time: '03:00',
    },
    {
      id: 4,
      time: '04:00',
    },
    {
      id: 5,
      time: '05:00',
    },
    {
      id: 6,
      time: '06:00',
    },
    {
      id: 7,
      time: '07:00',
    },
    {
      id: 8,
      time: '08:00',
    },
    {
      id: 9,
      time: '09:00',
    },
    {
      id: 10,
      time: '10:00',
    },
    {
      id: 11,
      time: '11:00',
    },
    {
      id: 12,
      time: '12:00',
    },
    {
      id: 13,
      time: '13:00',
    },
    {
      id: 14,
      time: '14:00',
    },
    {
      id: 15,
      time: '15:00',
    },
    {
      id: 16,
      time: '16:00',
    },
    {
      id: 17,
      time: '17:00',
    },
    {
      id: 18,
      time: '18:00',
    },
    {
      id: 19,
      time: '19:00',
    },
    {
      id: 20,
      time: '20:00',
    },
    {
      id: 21,
      time: '21:00',
    },
    {
      id: 22,
      time: '22:00',
    },
    {
      id: 23,
      time: '23:00',
    },
  ]

  const { biddingPeriod } = useGoodsStore()
  const today = new Date()
  const hours = String(today.getHours()).padStart(2, '0')

  if (biddingPeriod === today.toISOString().split('T')[0]) {
    times.splice(0, Number(hours) + 1)
  }

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px] w-1/2 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setTimeVisible(false)}
          className="w-[20px] h-[20px] text-sky-600 absolute right-0 mr-[20px] mt-[2px]"
        />
        <p className="text-center text-[18px] text-sky-600">시작 시간</p>
        <ul className="flex flex-col overflow-y-auto h-[310px] mt-[20px]">
          {times.map((time) => (
            <li
              key={time.id}
              className="text-center pb-[7px]"
              role="none"
              onClick={() => {
                getPickTime(time.time)
                setTimeVisible(false)
              }}
            >
              {time.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
