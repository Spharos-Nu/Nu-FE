import { useEffect, useState } from 'react'

export default function LiveAndHotTimer({
  time,
  status,
}: {
  time: string
  status: number
}) {
  const [days, setDays] = useState<string>('0')
  const [hours, setHours] = useState<string>('0')
  const [minutes, setMinutes] = useState<string>('0')
  const [seconds, setSeconds] = useState<string>('0')
  const [isRunning, setIsRunning] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (status === 0) {
      setTitle('입찰 시작')
    } else {
      setTitle('입찰 마감')
    }

    const timer = setInterval(() => {
      const now = new Date()
      const end = new Date(time)

      const nt = now.getTime()
      const et = end.getTime()

      const remainingTime = et - nt

      if (remainingTime <= 0) {
        clearInterval(timer)
        setIsRunning(false)
        return
      }

      const day = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
      const hour = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minute = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
      )
      const second = Math.floor((remainingTime % (1000 * 60)) / 1000)

      setDays(day.toString().padStart(2, '0'))
      setHours(hour.toString().padStart(2, '0'))
      setMinutes(minute.toString().padStart(2, '0'))
      setSeconds(second.toString().padStart(2, '0'))
    }, 1000)

    return () => clearInterval(timer)
  }, [status, time])

  return (
    <p className="bg-[#5D5FEF] bg-opacity-15 px-[22px] py-[8px] text-[#5D5FEF] rounded-full text-[17px] font-bold">
      <span
        className={`pr-[5px] ${isRunning ? ' text-[14px]' : ' text-[17px]'}`}
      >
        {' '}
        {isRunning ? `${title}` : title}
      </span>
      {isRunning && (
        <>
          <span className={days === '00' ? `hidden` : ``}>{days}일 </span>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        </>
      )}
    </p>
  )
}
