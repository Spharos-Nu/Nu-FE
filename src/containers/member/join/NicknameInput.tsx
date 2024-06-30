import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { TiDelete } from 'react-icons/ti'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
} from '@/containers/member/join/store'
import { nickValidCheck, duplicationCheckNick } from '@/utils/joinValidateCheck'

export default function NicknameInput() {
  const params = useSearchParams().get('id')
  const { nickname, setNickname, isValidNick, setIsValidNick } = useJoinStore()
  const { notValidNick, setNotValidNick } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus, setCurrentFocus } = useFocusStore()
  const nicknameInputRef = useRef<HTMLInputElement>(null)

  const handleNick = () => {
    if (!nickValidCheck(nickname)) {
      return setNotValidNick(1)
    }
    if (isValidNick) {
      return setCurrentFocus('')
    }

    setCurrentFocus('')
    return setNotValidNick(3)
  }

  const duplicationCheck = async () => {
    if (!nickValidCheck(nickname)) {
      return setNotValidNick(1)
    }

    const data = await duplicationCheckNick(nickname)

    if (data.status === 200) {
      setNotValidNick(0)
      return setIsValidNick(true)
    }
    if (data.status === 409) {
      return setNotValidNick(2)
    }

    return null
  }

  useEffect(() => {
    if (currentFocus === 'nickname') {
      if (!params) {
        setCurrentIdx(0)
      }
      setNotValidNick(1)
      nicknameInputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFocus])

  return (
    <div
      className={`{w-full h-14 rounded-3xl ${isValidNick ? 'mt-7 mb-11' : 'my-7'}`}
    >
      <span className="flex relative w-full h-full">
        <label
          htmlFor="닉네임"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          닉네임
        </label>
        <input
          id="닉네임"
          ref={nicknameInputRef}
          type="text"
          placeholder="닉네임: 2~15자"
          autoComplete="off"
          minLength={2}
          maxLength={15}
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value)
            setIsValidNick(false)
          }}
          onBlur={handleNick}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {nickname && (
          <TiDelete
            className="w-4 h-4 absolute right-[105px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              setNickname('')
              setIsValidNick(false)
              setNotValidNick(0)
            }}
          />
        )}
        <div
          aria-label="닉네임 중복확인"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white"
        >
          <button id="닉네임 중복확인" type="button" onClick={duplicationCheck}>
            중복확인
          </button>
        </div>
      </span>
      {isValidNick && (
        <p className="text-sky-600 text-xs mt-1 ml-3">
          사용 가능한 닉네임입니다.
          <br />
          욕설 혹은 비속어를 포함하는 닉네임은 제재 대상이 될 수 있습니다.
        </p>
      )}
      {notValidNick === 1 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 한/영 또는 숫자를 조합한 2~15자의 닉네임을 입력해주세요.
        </p>
      )}
      {notValidNick === 2 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 이미 사용 중인 닉네임입니다.
        </p>
      )}
      {notValidNick === 3 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 닉네임 중복확인을 진행해주세요.
        </p>
      )}
    </div>
  )
}
