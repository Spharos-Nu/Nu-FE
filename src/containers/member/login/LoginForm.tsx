'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useLoginStore } from '@/containers/member/login/store'
import { montserrat } from '@/styles/fonts'
import { saveId, getId, saveCheckbox, getCheckbox } from '@/utils/localStorage'

export default function LoginForm() {
  const params = useSearchParams().get('callbackUrl') || '/'

  const {
    userId,
    password,
    isId,
    isPwd,
    isChecked,
    setUserId,
    setPassword,
    setIsId,
    setIsPwd,
    setIsChecked,
  } = useLoginStore()

  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  /** Id 입력 있을 때마다 업데이트 */
  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
    setIsId(e.target.value !== '')
  }

  /** Pw 입력 있을 때마다 업데이트 */
  const handlePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setIsPwd(e.target.value !== '')
  }

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isChecked) {
      saveId(userId)
      saveCheckbox(isChecked)
    }

    if (!userId) {
      return showAlert('아이디를 입력해주세요.')
    }
    if (!password) {
      return showAlert('비밀번호를 입력해주세요.')
    }

    await signIn('credentials', {
      userId,
      password,
      redirect: true,
      callbackUrl: params,
    })
  }

  useEffect(() => {
    const id = getId()
    const checkbox = getCheckbox()

    if (id) {
      setUserId(id)
    }

    if (checkbox !== null) {
      setIsChecked(checkbox)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form
      className={`${montserrat.className} mx-10 mt-8`}
      onSubmit={handleSubmit}
    >
      <div className="w-full h-14 rounded-3xl">
        <span className="flex relative w-full h-full">
          <label
            htmlFor="아이디"
            className="overflow-hidden absolute w-px h-px text-[0px]"
          >
            아이디
          </label>
          <input
            id="아이디"
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            maxLength={20}
            value={userId}
            onChange={handleIdInput}
            className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
          />
          {isId && (
            <TiDelete
              className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setUserId('')
                setIsId(false)
              }}
            />
          )}
        </span>
      </div>
      <div className="w-full h-14 rounded-3xl mt-3">
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
            placeholder="Password"
            autoComplete="off"
            maxLength={20}
            value={password}
            onChange={handlePwInput}
            className="w-full h-14 rounded-3xl bg-gray-200 pl-5 text-sm"
          />
          {isPwd && (
            <TiDelete
              className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setPassword('')
                setIsPwd(false)
              }}
            />
          )}
        </span>
      </div>
      <div className="mt-3 mb-10 flex items-center justify-between">
        <span className="inline-flex">
          <input
            id="아이디 저장"
            type="checkbox"
            className="opacity-0 absolute"
            onChange={handleIsChecked}
          />
          <label htmlFor="아이디 저장" className="text-xs flex items-center">
            <span className="inline-block w-4 h-4 mr-1 border border-gray-300 rounded relative">
              <FaCheckSquare
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded ${!isChecked ? 'opacity-0' : 'opacity-100 text-sky-600'}`}
              />
            </span>
            Remember Me
          </label>
        </span>
        <span>
          <Link href="/find-info" aria-label="찾기" className="text-xs">
            Forgot Password
          </Link>
        </span>
      </div>
      <div
        aria-label="로그인 버튼"
        className="h-14 rounded-3xl bg-sky-600 flex items-center justify-center"
      >
        <button type="submit" className="w-full h-full text-white">
          LOG IN
        </button>
      </div>
      <BasicAlert message={message} />
    </form>
  )
}
