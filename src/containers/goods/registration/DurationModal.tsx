import { CgClose } from 'react-icons/cg'

export default function DurationModal({
  setDurationVisible,
  getPickDuration,
}: {
  setDurationVisible: React.Dispatch<React.SetStateAction<boolean>>
  getPickDuration: (item: string) => void
}) {
  const durations = ['1시간', '2시간', '3시간']

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[200px] w-1/2 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setDurationVisible(false)}
          className="w-[20px] h-[20px] text-[#2B74B9] absolute right-0 mr-[20px]"
        />
        <p className="text-center text-[18px] text-[#2B74B9]">지속 시간</p>
        <ul className="flex flex-col overflow-y-auto h-[280px] mt-[20px]">
          {durations.map((duration) => (
            <li
              key={duration}
              className="text-center pb-[7px]"
              role="none"
              onClick={() => {
                getPickDuration(duration)
                setDurationVisible(false)
              }}
            >
              {duration}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
