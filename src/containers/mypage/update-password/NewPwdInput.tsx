import {
  usePasswordStore,
  usePasswordErrorStore,
} from '@/containers/mypage/update-password/store'

export default function NewPwdInput() {
  const { newPassword, setNewPassword } = usePasswordStore()
  const { notValidPassword } = usePasswordErrorStore()

  return (
    <div className="w-full h-14 rounded-3xl my-20">
      <label htmlFor="새 비밀번호" className="pl-2">
        새 비밀번호
        <input
          id="새 비밀번호"
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          autoComplete="off"
          minLength={8}
          maxLength={20}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 mt-3 text-sm focus:border-[3px] focus:border-sky-600"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      {notValidPassword && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 8~20자, 영문/숫자/특수문자를 최소 1자씩 사용해주세요.
        </p>
      )}
    </div>
  )
}
