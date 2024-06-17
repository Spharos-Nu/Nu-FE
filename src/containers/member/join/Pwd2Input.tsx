import { useEffect, useRef } from 'react'
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
  usePwdStore,
} from '@/containers/member/join/store'

export default function Pwd2Inptut() {
  const { password, password2, setPassword2 } = useJoinStore()
  const { notEqualPassword, setNotEqualPassword } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus, setCurrentFocus } = useFocusStore()
  const { pwd2, setPwd2 } = usePwdStore()
  const pwd2InputRef = useRef<HTMLInputElement>(null)

  const handlePwd2 = () => {
    if (password !== password2) {
      setNotEqualPassword(true)
    } else {
      setNotEqualPassword(false)
      setCurrentFocus('')
    }
  }

  const toggleVisibility = () => {
    setPwd2(!pwd2)
    pwd2InputRef.current?.focus()
  }

  useEffect(() => {
    if (currentFocus === 'password2') {
      setCurrentIdx(1)
      pwd2InputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFocus])

  return (
    <div className="w-full h-14 rounded-3xl my-7">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="비밀번호 재확인"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          비밀번호 재확인
        </label>
        <input
          id="비밀번호 재확인"
          ref={pwd2InputRef}
          type={`${pwd2 ? 'password' : 'text'}`}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="off"
          maxLength={20}
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          onBlur={handlePwd2}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {pwd2 ? (
          <PiEyeLight
            className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
            onClick={toggleVisibility}
          />
        ) : (
          <PiEyeSlashLight
            className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
            onClick={toggleVisibility}
          />
        )}
      </span>
      {notEqualPassword && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 비밀번호가 일치하지 않습니다.
        </p>
      )}
    </div>
  )
}
