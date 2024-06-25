import {
  usePasswordStore,
  usePasswordErrorStore,
} from '@/containers/mypage/update-password/store'

export default function NewPwdInput2() {
  const { newPassword2, setNewPassword2 } = usePasswordStore()
  const { notMatchPassword } = usePasswordErrorStore()

  return (
    <div className="w-full h-14 rounded-3xl my-14">
      <label htmlFor="비밀번호 확인" className="pl-2">
        비밀번호 확인
        <input
          id="비밀번호 확인"
          type="password"
          placeholder="비밀번호 확인"
          value={newPassword2}
          autoComplete="off"
          minLength={8}
          maxLength={20}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 mt-3 text-sm focus:border-[3px] focus:border-sky-600"
          onChange={(e) => setNewPassword2(e.target.value)}
        />
      </label>
      {notMatchPassword && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 비밀번호가 일치하지 않습니다.
        </p>
      )}
    </div>
  )
}
