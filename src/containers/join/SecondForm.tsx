import PhoneVerification from './PhoneVerification'
import Pw2Input from './Pw2Input'
import PwInput from './PwInput'
import DuckOne from '@/../public/svgs/duck/duckone.svg'

// Todo: Alert Modal
export default function SecondForm({
  onSwipeRight,
  handleJoin,
}: {
  onSwipeRight: () => void
  handleJoin: () => void
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <DuckOne />
      </div>
      <form className="mx-10 mt-8">
        <PwInput />
        <Pw2Input />
        <PhoneVerification />
        <span className="w-full flex justify-between">
          <div
            aria-label="이전"
            className="w-[49%] h-14 rounded-3xl mt-3 border-[3px] border-sky-600"
          >
            <button
              id="이전"
              type="button"
              className="w-full h-full text-sky-600"
              onClick={onSwipeRight}
            >
              Previous
            </button>
          </div>
          <div
            aria-label="회원가입"
            className="w-[49%] h-14 rounded-3xl mt-3 bg-sky-600"
          >
            <button
              id="회원가입"
              type="button"
              className="w-full h-full text-white"
              onClick={handleJoin}
            >
              Join
            </button>
          </div>
        </span>
      </form>
    </>
  )
}
