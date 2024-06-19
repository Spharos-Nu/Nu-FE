'use client'

import { useCallback, useState } from 'react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useGoodsStore } from '@/containers/goods/registration/store'
import DurationModal from './DurationModal'
import TimeModal from './TimeModal'
import WeekModal from './WeekModal'

export default function PeriodArea() {
  const {
    biddingPeriod,
    biddingTime,
    biddingDuration,
    setBiddingPeriod,
    setBiddingTime,
    setBiddingDuration,
  } = useGoodsStore()

  const [weekVisible, setWeekVisible] = useState<boolean>(false)
  const [timeVisible, setTimeVisible] = useState<boolean>(false)
  const [durationVisible, setDurationVisible] = useState<boolean>(false)
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const getPickPeriod = useCallback(
    (item: string) => {
      setBiddingPeriod(item)
    },
    [setBiddingPeriod],
  )

  const getPickTime = useCallback(
    (item: string) => {
      setBiddingTime(item)
    },
    [setBiddingTime],
  )

  const getPickDuration = useCallback(
    (item: string) => {
      setBiddingDuration(item)
    },
    [setBiddingDuration],
  )

  const openTimeModal = () => {
    if (biddingPeriod === '') {
      showAlert('날짜를 먼저 선택해주세요.')
      return
    }
    setTimeVisible(true)
  }

  return (
    <>
      <label htmlFor="입찰기간" className="text-sky-600 text-[17px]">
        얼마동안 입찰 받을까요?
      </label>
      <div className="grid grid-cols-3 gap-[10px]">
        <input
          type="text"
          value={biddingPeriod}
          placeholder="날짜 선택"
          name="biddingPeriod"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => setWeekVisible(true)}
          readOnly
        />
        <input
          type="text"
          value={biddingTime}
          placeholder="시작 시간"
          name="biddingTime"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => openTimeModal()}
          readOnly
        />
        <input
          type="text"
          value={`${biddingDuration === '' ? biddingDuration : `${biddingDuration}시간`}`}
          placeholder="지속 시간"
          name="biddingDuration"
          className="mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] text-center"
          onClick={() => setDurationVisible(true)}
          readOnly
        />
      </div>
      {weekVisible && (
        <WeekModal
          setWeekVisible={setWeekVisible}
          getPickPeriod={getPickPeriod}
        />
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
      <BasicAlert message={message} />
    </>
  )
}
