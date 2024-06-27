'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  useProfileStore,
  useErrorStore,
} from '@/containers/mypage/update-profile/store'
import { duplicationCheckNick } from '@/utils/joinValidateCheck'

export default function UpdateNickname() {
  const [inputState, setInputState] = useState<boolean>(false)
  const { data: session } = useSession()
  const { nickname, setNickname, isValidNick, setIsValidNick } =
    useProfileStore()
  const { nicknameError, setNicknameError } = useErrorStore()

  const handleInputElement = () => {
    setInputState(true)
    setNickname('')
    setIsValidNick(false)
  }

  // eslint-disable-next-line consistent-return
  const handleNick = async () => {
    if (!nickname) {
      setNickname(session?.user.nickname)
      return setInputState(false)
    }

    const regex = /^[a-zA-Z가-힣0-9]{2,15}$/
    if (!regex.test(nickname)) {
      return setNicknameError(1)
    }

    if (nicknameError) {
      return null
    }

    const data = await duplicationCheckNick(nickname)

    if (data.status === 200) {
      setNicknameError(0)
      return setIsValidNick(true)
    }
    if (data.status === 409) {
      return setNicknameError(2)
    }
  }

  useEffect(() => {
    if (inputState) {
      setIsValidNick(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputState])

  useEffect(() => {
    setNickname(session?.user.nickname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`{w-full h-14 rounded-3xl ${isValidNick ? 'mt-7 mb-11' : 'my-7'}`}
    >
      <span className="mx-10 h-14 border-[3px] border-slate-400 rounded-3xl flex items-center relative">
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
              onChange={(e) => {
                setNickname(e.target.value)
                setIsValidNick(false)
                setNicknameError(0)
              }}
            />
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-20 h-10 justify-center items-center absolute right-3"
              onClick={handleNick}
            >
              {nickname ? '중복확인' : '취소'}
            </button>
          </>
        ) : (
          <>
            <span className="ml-5">{session?.user.nickname}</span>
            <button
              type="button"
              className="flex text-lg text-white bg-slate-400 rounded-3xl w-14 h-10 justify-center items-center absolute right-3"
              onClick={handleInputElement}
            >
              수정
            </button>
          </>
        )}
      </span>
      {inputState && isValidNick && (
        <p className="text-sky-600 text-xs mt-1 mx-12">
          사용 가능한 닉네임입니다.
          <br />
          욕설 혹은 비속어를 포함하는 닉네임은 제재 대상이 될 수 있습니다.
        </p>
      )}
      {nicknameError === 1 && (
        <p className="text-red-500 text-xs mt-1 mx-12">
          * 한/영 또는 숫자를 조합한 2~15자의 닉네임을 입력해주세요.
        </p>
      )}
      {nicknameError === 2 && (
        <p className="text-red-500 text-xs mt-1 mx-12">
          * 이미 사용 중인 닉네임입니다.
        </p>
      )}
      {nicknameError === 3 && (
        <p className="text-red-500 text-xs mt-1 mx-12">
          * 닉네임 중복확인을 진행해주세요.
        </p>
      )}
    </div>
  )
}
