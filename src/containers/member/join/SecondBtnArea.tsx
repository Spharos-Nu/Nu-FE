import { usePageStore } from '@/containers/member/join/store'

export default function SecondBtnArea({
  onFormValidate,
}: {
  onFormValidate: () => void
}) {
  const { setCurrentIdx } = usePageStore()

  return (
    <span className="w-full flex justify-between">
      <div
        aria-label="이전"
        className="w-[47%] h-14 rounded-3xl mt-3 border-[3px] border-sky-600"
      >
        <button
          id="이전"
          type="button"
          className="w-full h-full text-sky-600"
          onClick={() => setCurrentIdx(0)}
        >
          Previous
        </button>
      </div>
      <div
        aria-label="회원가입"
        className="w-[47%] h-14 rounded-3xl mt-3 bg-sky-600"
      >
        <button
          id="회원가입"
          type="button"
          className="w-full h-full text-white"
          onClick={onFormValidate}
        >
          Join
        </button>
      </div>
    </span>
  )
}
