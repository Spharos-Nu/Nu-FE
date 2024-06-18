import { useEffect, useState } from 'react'

export default function Timer({
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

  useEffect(() => {
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
  }, [time])

  return (
    <div className="text-[21px]">
      {status === 0 ? (
        <div>
          {isRunning ? (
            <>
              <span className="text-[17px] pr-[5px]">입찰 시작까지 </span>
              <span className={days === '00' ? `hidden` : ``}>{days}일 </span>
              {hours}:{minutes}:{seconds}
            </>
          ) : (
            '입찰 시작'
          )}
        </div>
      ) : (
        <div>
          {isRunning ? (
            <>
              <span className="text-[17px] pr-[5px]">남은 시간 </span>
              <span className={days === '00' ? `hidden` : ``}>{days}일 </span>
              {hours}:{minutes}:{seconds}
            </>
          ) : (
            '입찰 마감'
          )}
        </div>
      )}
    </div>
  )
}
