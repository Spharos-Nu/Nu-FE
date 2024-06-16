import { useJoinStore } from '@/containers/member/join/store'

export default function Pwd2Inptut() {
  const { password2, setPassword2 } = useJoinStore()

  return (
    <div className="w-full h-14 rounded-3xl mt-3">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="비밀번호 재확인"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          비밀번호 재확인
        </label>
        <input
          id="비밀번호 재확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="off"
          maxLength={20}
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
      </span>
    </div>
  )
}
