'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { duplicationCheckNick } from '@/utils/memberApiActions'
import { useUpdateProfileStore } from './store'

export default function UpdateNickname() {
  const [inputState, setInputState] = useState<boolean>(false)
  const { data: session } = useSession()
  const { isOpen, message, setAlert } = useBasicAlertStore()
  const { nickname, setNickname } = useUpdateProfileStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const handleInputElement = () => {
    setInputState(!inputState)
  }

  const handleNick = async () => {
    const regex = /^[a-zA-Z가-힣0-9]{2,15}$/
    if (!regex.test(nickname)) {
      return showAlert('2~15자의 올바른 닉네임을 입력해주세요.')
    }

    const data = await duplicationCheckNick(nickname)

    if (data.status === 200) {
      return showAlert(
        `${data.message}\n욕설 혹은 비속어를 포함하는 닉네임은 제재 대상이 될 수 있습니다.`,
      )
    }
    return showAlert(data.message)
  }

  useEffect(() => {
    if (!isOpen) {
      setInputState(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <div className="w-full mt-10">
      <div className="mx-10 h-14 border-[3px] border-slate-400 rounded-3xl flex items-center relative">
        {inputState ? (
          <>
            <label
              htmlFor="새로운 닉네임"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              새로운 닉네임
            </label>
            <input
              id="새로운 닉네임"
              type="text"
              autoComplete="off"
              placeholder="2~15자 사이의 새로운 닉네임"
              minLength={2}
              maxLength={15}
              className="w-full mx-3"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-20 h-10 justify-center items-center absolute right-3"
              onClick={handleNick}
            >
              수정완료
            </button>
          </>
        ) : (
          <>
            <span className="ml-5">{session?.user.nickname || '닉네임'}</span>
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-14 h-10 justify-center items-center absolute right-3"
              onClick={handleInputElement}
            >
              수정
            </button>
          </>
        )}
      </div>
      <BasicAlert message={message} />
    </div>
  )
}
