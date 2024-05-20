import { useEffect, useState } from 'react'
import { verification, verificationConfirm } from '@/app/api/auth/Functions'
import { useFirstStore, useSecondStore } from './store'
import DuckOne from '@/../public/svgs/duck/duckone.svg'

// Todo: Alert Modal
export default function SecondForm({
  onSwipeRight,
}: {
  onSwipeRight: () => void
}) {
  const { resetFirstState } = useFirstStore()
  const {
    password,
    password2,
    phoneNumber,
    isValidated,
    setPassword,
    setPassword2,
    setPhoneNumber,
    setIsValidated,
    resetSecondState,
  } = useSecondStore()

  /** 메시지 전송여부 + 메시지 전송횟수 */
  const [isMessage, setIsMessage] = useState<boolean>(false)

  const [verificationNumber, setVerificationNumber] = useState<string>('')

  /** 5회 인증 시도 시 disabled */
  const [cntMessage, setCntMessage] = useState<number>(0)
  const [disableTime, setDisableTime] = useState<number>(0)

  /** 유효성 검사 후 인증번호 발송 */
  const sendMessage = async () => {
    // 유효성 검증
    const phoneRegex = /^(010|011|017|018|019)\d{7,8}$/
    if (!phoneRegex.test(phoneNumber)) {
      // eslint-disable-next-line no-alert
      return alert('휴대폰번호를 정확히 입력해주세요.')
    }

    // 3번 내지 5번의 인증번호 발송횟수를 초과하면 showAlert, 일정 시간 인증 불가
    if (cntMessage === 5) {
      setCntMessage(cntMessage + 1)
      setDisableTime(300)
      // eslint-disable-next-line no-alert
      return alert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }
    if (cntMessage > 5) {
      // eslint-disable-next-line no-alert
      return alert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }
    if (disableTime) {
      // eslint-disable-next-line no-alert
      return alert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }

    const data = await verification(phoneNumber)
    if (data.status === 200) {
      setIsMessage(true)
    }
    if (data.status === 409) {
      resetFirstState()
      resetSecondState()
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  const confirmMessage = async () => {
    const data = await verificationConfirm(phoneNumber, verificationNumber)
    if (data.status === 200) {
      setIsValidated(true)
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (disableTime > 0) {
        setDisableTime((prevTime) => prevTime - 1)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [disableTime])

  return (
    <>
      <div className="flex justify-center items-center">
        <DuckOne />
      </div>
      <form className="mx-10 mt-8">
        <div className="w-full h-14 rounded-3xl">
          <span className="flex relative w-full h-full">
            <label
              htmlFor="비밀번호"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              비밀번호
            </label>
            <input
              id="비밀번호"
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
              maxLength={20}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            />
          </span>
        </div>
        <div className="w-full h-14 rounded-3xl mt-3">
          <span className="flex relative w-full h-full">
            <label
              htmlFor="비밀번호 재확인"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              비밀번호 재확인
            </label>
            <input
              id="비밀번호 재확인"
              type="password"
              placeholder="비밀번호 재확인"
              autoComplete="off"
              maxLength={20}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            />
          </span>
        </div>
        <div className="w-full h-14 rounded-3xl mt-3">
          <span className="flex relative w-full h-full">
            <label
              htmlFor="휴대폰 인증"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              휴대폰 인증
            </label>
            <input
              id="휴대폰 인증"
              type="text"
              placeholder="휴대폰"
              autoComplete="off"
              maxLength={20}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            />
            {!isValidated && (
              <div
                aria-label="인증번호 발송"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white cursor-pointer"
              >
                <button id="인증번호 발송" type="button" onClick={sendMessage}>
                  인증번호
                </button>
              </div>
            )}
          </span>
        </div>
        {isMessage && (
          <div className="w-full h-14 rounded-3xl mt-3">
            <span className="flex relative w-full h-full">
              <label
                htmlFor="인증번호 입력"
                className="overflow-hidden absolute w-px h-px text-[0px]"
              >
                인증번호 입력
              </label>
              <input
                id="인증번호 입력"
                type="text"
                placeholder="휴대폰"
                autoComplete="off"
                maxLength={6}
                value={verificationNumber}
                onChange={(e) => setVerificationNumber(e.target.value)}
                className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
              />
              <div
                aria-label="인증번호 발송"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white cursor-pointer"
              >
                <button
                  id="인증번호 발송"
                  type="button"
                  onClick={confirmMessage}
                >
                  인증번호
                </button>
              </div>
            </span>
          </div>
        )}
        <span className="w-full flex justify-between">
          <div
            aria-label="이전"
            className="w-[49%] h-14 rounded-3xl mt-3 bg-sky-600"
          >
            <button
              id="이전"
              type="button"
              className="w-full h-full text-white"
              onClick={onSwipeRight}
            >
              Previous
            </button>
          </div>
          <div
            aria-label="회원가입"
            className="w-[49%] h-14 rounded-3xl mt-3 bg-sky-600"
          >
            <button
              id="회원가입"
              type="button"
              className="w-full h-full text-white"
            >
              Join
            </button>
          </div>
        </span>
      </form>
    </>
  )
}
