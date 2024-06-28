'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { chargeDuckPoint, getDuckPoint } from '@/utils/memberApiActions'

export default function PointChargeForm() {
  const router = useRouter()
  const [currentMoney, setCurrentMoney] = useState<number>(0)
  const [chargeMoney, setChargeMoney] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)

  // const isMobile = () => {
  //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent,
  //   )
  // }

  const isMobile = () => {
    return window.innerWidth <= 768
  }

  const handleSubmit = async () => {
    if (chargeMoney > 2000000) {
      return setError(true)
    }

    setError(false)

    const data = await chargeDuckPoint(chargeMoney)
    const redirectUrl = isMobile()
      ? data.next_redirect_mobile_url
      : data.next_redirect_pc_url
    return router.push(redirectUrl)
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getDuckPoint()
      if (typeof data.result === 'number') {
        setCurrentMoney(data.result)
      }
    }

    getData()
  }, [])

  return (
    <div className="my-5 mx-5 py-5">
      <label htmlFor="충전금액" className="font-bold text-xl">
        얼마나 충전할까요?
      </label>
      <input
        id="충전금액"
        type="number"
        placeholder={`현재 내 덕포인트 ${currentMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
        className="w-full h-14 px-3 my-3 text-xl border-[3px] rounded-xl border-sky-600"
        onChange={(e) => setChargeMoney(Number(e.target.value))}
      />
      {error && (
        <p className="text-red-500 text-xs ml-3 mt-1">
          * 1회 최대 충전 포인트는 2,000,000원 입니다.
        </p>
      )}
      <button
        type="button"
        id="충전"
        aria-label="충전"
        className="w-full my-5 h-16 rounded-xl bg-sky-600 text-white justify-center"
        onClick={handleSubmit}
      >
        충전하기
      </button>
    </div>
  )
}
