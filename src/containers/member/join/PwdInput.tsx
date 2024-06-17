import { useEffect, useRef } from 'react'
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  usePageStore,
  usePwdStore,
} from '@/containers/member/join/store'
import { pwdValidCheck } from '@/utils/joinValidateCheck'

export default function PwdInput() {
  const { password, setPassword } = useJoinStore()
  const { notValidPassword, setNotValidPassword } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { currentFocus, setCurrentFocus } = useFocusStore()
  const { pwd, setPwd } = usePwdStore()

  const pwdInputRef = useRef<HTMLInputElement>(null)

  const handlePwd = () => {
    if (!pwdValidCheck(password)) {
      setNotValidPassword(true)
    } else {
      setNotValidPassword(false)
      setCurrentFocus('')
    }
  }

  const toggleVisibility = () => {
    setPwd(!pwd)
    pwdInputRef.current?.focus()
  }

  useEffect(() => {
    if (currentFocus === 'password') {
      setCurrentIdx(1)
      setNotValidPassword(true)
      pwdInputRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-14 rounded-3xl my-7">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="비밀번호"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          비밀번호
        </label>
        <input
          id="비밀번호"
          ref={pwdInputRef}
          type={`${pwd ? 'password' : 'text'}`}
          placeholder="8~20자, 영문/숫자/특수문자를 포함하는 비밀번호"
          autoComplete="off"
          maxLength={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePwd}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {pwd ? (
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
      {notValidPassword && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 8~20자, 영문/숫자/특수문자를 최소 1자씩 사용해주세요.
        </p>
      )}
    </div>
  )
}
