'use client'

import { useCallback, useState } from 'react'
import DurationModal from './DurationModal'
import TimeModal from './TimeModal'
import WeekModal from './WeekModal'

export default function PeriodArea() {
  const [weekVisible, setWeekVisible] = useState<boolean>(false)
  const [timeVisible, setTimeVisible] = useState<boolean>(false)
  const [durationVisible, setDurationVisible] = useState<boolean>(false)

  const [pickDate, setPickDate] = useState<string>('')
  const [pickTime, setPickTime] = useState<string>('')
  const [pickDuration, setPickDuration] = useState<string>('')

  const getPickDate = useCallback((item: string) => {
    setPickDate(item)
  }, [])

  const getPickTime = useCallback((item: string) => {
    setPickTime(item)
  }, [])

  const getPickDuration = useCallback((item: string) => {
    setPickDuration(item)
  }, [])

  return (
    <>
      <label htmlFor="입찰기간" className="text-[#2B74B9] text-[17px]">
        얼마동안 입찰 받을까요?
      </label>
      <div className="grid grid-cols-3 gap-[10px]">
        <input
          type="text"
          value={pickDate}
          placeholder="날짜 선택"
          name="biddingPeriod"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => setWeekVisible(true)}
          readOnly
        />
        <input
          type="text"
          value={pickTime}
          placeholder="시작 시간"
          name="biddingTime"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => setTimeVisible(true)}
          readOnly
        />
        <input
          type="text"
          value={pickDuration}
          placeholder="지속 시간"
          name="biddingDuration"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => setDurationVisible(true)}
          readOnly
        />
      </div>
      {weekVisible && (
        <WeekModal setWeekVisible={setWeekVisible} getPickDate={getPickDate} />
      )}
      {timeVisible && (
        <TimeModal setTimeVisible={setTimeVisible} getPickTime={getPickTime} />
      )}
      {durationVisible && (
        <DurationModal
          setDurationVisible={setDurationVisible}
          getPickDuration={getPickDuration}
        />
      )}
    </>
  )
}
