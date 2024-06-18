import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
  useVerificationStore,
} from '@/containers/member/join/store'
import VerificationTime from '@/public/svgs/icon/verificationTime.svg'
import { verification, verificationConfirm } from '@/utils/authApiActions'
import { phoneValidCheck } from '@/utils/joinValidateCheck'

export default function PhoneVerification() {
  const router = useRouter()

  const {
    phoneNumber,
    setPhoneNumber,
    isVerified,
    setIsVerified,
    resetJoinState,
  } = useJoinStore()
  const { notValidPhone, setNotValidPhone } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus } = useFocusStore()

  const {
    isMessage,
    setIsMessage,
    verificationNumber,
    setVerificationNumber,
    cntMessage,
    setCntMessage,
    disableTime,
    setDisableTime,
    messageMinutes,
    setMessageMinutes,
    messageSeconds,
    setMessageSeconds,
  } = useVerificationStore()

  const { isOpen, message, setAlert } = useBasicAlertStore()

  const phoneInputRef = useRef<HTMLInputElement>(null)

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  /** 유효성 검사 후 인증번호 발송 */
  const sendMessage = async () => {
    if (!phoneValidCheck(phoneNumber)) {
      return setNotValidPhone(1)
    }

    setMessageMinutes(3)
    setMessageSeconds(0)

    // 3번 내지 5번의 인증번호 발송횟수를 초과하면 일정 시간 인증 불가
    if (cntMessage === 5) {
      setCntMessage(cntMessage + 1)
      setDisableTime(300)
      return setNotValidPhone(2)
    }
    if (cntMessage > 5) {
      return setNotValidPhone(2)
    }
    if (disableTime) {
      return setNotValidPhone(2)
    }

    const data = await verification(phoneNumber)
    if (data.status === 200) {
      setIsMessage(true)
    }
    if (data.status === 409) {
      setNotValidPhone(4)
      showAlert(`${data.message}\n로그인 페이지로 이동하시겠습니까?`)
    }

    return null
  }

  const confirmMessage = async () => {
    if (!messageMinutes && !messageSeconds) {
      return setNotValidPhone(3)
    }

    const data = await verificationConfirm(phoneNumber, verificationNumber)
    if (data.status === 200) {
      setIsVerified(true)
      setIsMessage(false)
      setMessageMinutes(0)
      setMessageSeconds(0)
    }

    return showAlert(data.message)
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (messageSeconds > 0) {
        setMessageSeconds(messageSeconds - 1)
      } else if (messageMinutes > 0) {
        setMessageMinutes(messageMinutes - 1)
        setMessageSeconds(59)
      }
    }, 1000)

    return () => clearInterval(countdown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageSeconds, messageMinutes])

  useEffect(() => {
    const countdown = setInterval(() => {
      if (disableTime > 0) {
        setDisableTime(disableTime - 1)
      }
    }, 1000)

    return () => clearInterval(countdown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableTime])

  useEffect(() => {
    if (currentFocus === 'phoneNumber') {
      setCurrentIdx(1)
      phoneInputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFocus])

  useEffect(() => {
    if (!isOpen && notValidPhone === 4) {
      resetJoinState()
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, notValidPhone])

  return (
    <>
      <div className="w-full h-14 rounded-3xl my-7">
        <span className="flex relative w-full h-full">
          <label
            htmlFor="휴대폰 인증"
            className="overflow-hidden absolute w-px h-px text-[0px]"
          >
            휴대폰 인증
          </label>
          <input
            id="휴대폰 인증"
            ref={phoneInputRef}
            type="text"
            placeholder="휴대폰"
            autoComplete="off"
            maxLength={20}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
          />
          {!isVerified ? (
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
        {notValidPhone === 1 && (
          <p className="text-red-500 text-xs mt-1 ml-3">
            핸드폰 번호를 확인해주세요.
          </p>
        )}
        {notValidPhone === 2 && (
          <p className="text-red-500 text-xs mt-1 ml-3">
            인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을
            시도해주세요.
          </p>
        )}
        {notValidPhone === 3 && (
          <p className="text-red-500 text-xs mt-1 ml-3">
            인증번호 입력시간을 초과하였습니다. 인증번호 재전송 후 다시
            입력해주세요.
          </p>
        )}
        <BasicAlert message={message} />
      </div>
      {isMessage && (
        <div className="w-full h-14 rounded-3xl my-7">
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
