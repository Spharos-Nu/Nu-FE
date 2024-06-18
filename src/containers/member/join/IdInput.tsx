import { useEffect, useRef } from 'react'
import { TiDelete } from 'react-icons/ti'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
} from '@/containers/member/join/store'
import { duplicationCheckId, idValidCheck } from '@/utils/joinValidateCheck'

export default function IdInput() {
  const { userId, setUserId, isValidId, setIsValidId } = useJoinStore()
  const { notValidId, setNotValidId } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus, setCurrentFocus } = useFocusStore()
  const idInputRef = useRef<HTMLInputElement>(null)

  const handleId = async () => {
    if (!idValidCheck(userId)) {
      return setNotValidId(1)
    }
    if (isValidId) {
      return setCurrentFocus('')
    }

    setCurrentFocus('')
    return setNotValidId(3)
  }

  const duplicationCheck = async () => {
    if (!idValidCheck(userId)) {
      return setNotValidId(1)
    }

    const data = await duplicationCheckId(userId)
    if (data.status === 200) {
      setNotValidId(0)
      return setIsValidId(true)
    }
    if (data.status === 409) {
      return setNotValidId(2)
    }

    return null
  }

  useEffect(() => {
    if (currentFocus === 'userId') {
      setCurrentIdx(0)
      setNotValidId(1)
      idInputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFocus])

  return (
    <div className="w-full h-14 rounded-3xl my-7">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="아이디"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          아이디
        </label>
        <input
          id="아이디"
          ref={idInputRef}
          type="text"
          placeholder="영문과 숫자를 조합한 6~15자의 아이디"
          autoComplete="off"
          minLength={6}
          maxLength={15}
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value)
            setIsValidId(false)
          }}
          onBlur={handleId}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {userId && (
          <TiDelete
            className="w-4 h-4 absolute right-[105px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              setUserId('')
              setIsValidId(false)
              setNotValidId(0)
            }}
          />
        )}
        <div
          aria-label="아이디 중복확인"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white"
        >
          <button id="아이디 중복확인" type="button" onClick={duplicationCheck}>
            중복확인
          </button>
        </div>
      </span>
      {isValidId && (
        <p className="text-sky-600 text-xs mt-1 ml-3">
          사용 가능한 아이디입니다.
        </p>
      )}
      {notValidId === 1 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 영문과 숫자를 조합한 6~15자의 닉네임을 입력해주세요.
        </p>
      )}
      {notValidId === 2 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 이미 존재하는 사용자입니다.
        </p>
      )}
      {notValidId === 3 && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 아이디 중복확인을 진행해주세요.
        </p>
      )}
    </div>
  )
}
