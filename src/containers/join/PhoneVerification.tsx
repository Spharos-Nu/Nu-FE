import { useEffect, useState } from 'react'
import { verification, verificationConfirm } from '@/app/api/auth/Functions'
import { useFirstStore, useSecondStore } from './store'
import VerificationTime from '@/../public/svgs/icon/verificationTime.svg'

export default function PhoneVerification() {
  const { resetFirstState } = useFirstStore()
  const {
    phoneNumber,
    isValidated,
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

  /** message 보낸 후, 시간 흐르는 로직 */
  const [messageMinutes, setMessageMinutes] = useState<number>(3)
  const [messageSeconds, setMessageSeconds] = useState<number>(0)

  /** 유효성 검사 후 인증번호 발송 */
  const sendMessage = async () => {
    // 유효성 검증
    const phoneRegex = /^(010|011|017|018|019)\d{7,8}$/
    if (!phoneRegex.test(phoneNumber)) {
      // eslint-disable-next-line no-alert
      return alert('휴대폰번호를 정확히 입력해주세요.')
    }

    setMessageMinutes(3)
    setMessageSeconds(0)

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

    const data = await verification(phoneNumber, '')
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
    if (!messageMinutes && !messageSeconds) {
      // eslint-disable-next-line no-alert
      return alert(
        '인증번호 입력시간을 초과하였습니다. 인증번호 재전송 후 다시 입력해주세요.',
      )
    }

    const data = await verificationConfirm(phoneNumber, verificationNumber)
    if (data.status === 200) {
      setIsValidated(true)
      setIsMessage(false)
      setMessageMinutes(0)
      setMessageSeconds(0)
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (messageSeconds > 0) {
        setMessageSeconds((prevSeconds) => prevSeconds - 1)
      } else if (messageMinutes > 0) {
        setMessageMinutes((prevMinutes) => prevMinutes - 1)
        setMessageSeconds(59)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [messageSeconds, messageMinutes])

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
            className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
          />
          {!isValidated ? (
            <div
              aria-label="인증번호 발송"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white cursor-pointer"
            >
              <button id="인증번호 발송" type="button" onClick={sendMessage}>
                인증번호
              </button>
            </div>
          ) : (
            <div
              aria-label="인증완료"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 px-5 py-3 rounded-3xl text-sm text-white cursor-pointer"
            >
              <button id="인증완료" type="button">
                인증완료
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
              placeholder="인증번호"
              autoComplete="off"
              maxLength={6}
              value={verificationNumber}
              onChange={(e) => setVerificationNumber(e.target.value)}
              className="w-full h-full rounded-3xl bg-white pl-5 text-sm border-[2px] border-yellow-400"
            />
            <span className="absolute right-20 text-yellow-400 flex top-5">
              <VerificationTime />
              <span className="text-xs ml-2 font-bold">
                0{messageMinutes}분 {String(messageSeconds).padStart(2, '0')}초
              </span>
            </span>
            <div
              aria-label="인증번호 확인"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 px-5 py-3 rounded-3xl text-sm text-white cursor-pointer"
            >
              <button id="인증번호 확인" type="button" onClick={confirmMessage}>
                확인
              </button>
            </div>
          </span>
        </div>
      )}
    </>
  )
}
