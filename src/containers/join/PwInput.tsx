import { useSecondStore } from '@/containers/join/store'

export default function PwdInput() {
  const { password, setPassword } = useSecondStore()

  return (
    <div className="w-full h-14 rounded-3xl">
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
          placeholder="8~20자, 영문/숫자/특수문자를 포함하는 비밀번호"
          autoComplete="off"
          maxLength={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
      </span>
    </div>
  )
}
