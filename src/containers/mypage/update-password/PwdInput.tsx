import {
  usePasswordErrorStore,
  usePasswordStore,
} from '@/containers/mypage/update-password/store'

export default function PwdInput() {
  const { currentPassword, setCurrentPassword } = usePasswordStore()
  const { samePassword } = usePasswordErrorStore()

  return (
    <div className="w-full h-14 rounded-3xl mt-10 mb-20">
      <label htmlFor="현재 비밀번호" className="pl-2">
        현재 비밀번호
        <input
          id="현재 비밀번호"
          type="password"
          placeholder="현재 비밀번호"
          value={currentPassword}
          autoComplete="off"
          minLength={8}
          maxLength={20}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 mt-3 text-sm focus:border-[3px] focus:border-sky-600"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </label>
      {samePassword && (
        <p className="text-red-500 text-xs mt-1 ml-3">
          * 이전 비밀번호와 일치하는 비밀번호입니다.
        </p>
      )}
    </div>
  )
}
