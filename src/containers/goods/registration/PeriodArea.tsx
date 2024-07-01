'use client'

import { useCallback, useState } from 'react'
import { useToastStore } from '@/components/Toast/store'
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
  const { showToast } = useToastStore()

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

  // eslint-disable-next-line consistent-return
  const openTimeModal = () => {
    if (biddingPeriod === '') {
      return showToast('날짜를 먼저 선택해주세요.')
    }
    setTimeVisible(true)
  }

  return (
    <>
      <label htmlFor="경매기간" className="text-sky-600 text-[17px]">
        얼마 동안 입찰 받을까요?
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
          placeholder="경매 진행 시간"
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
    </>
  )
}
