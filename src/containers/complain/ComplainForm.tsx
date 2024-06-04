import CheckList from './CheckList'
import ReasonArea from './ReasonArea'

export default function ComplainForm() {
  return (
    <form className="px-[20px]">
      <CheckList />
      <ReasonArea />
      <button
        type="submit"
        className="w-full mt-[20px] px-[15px] py-[13px] mb-[40px] bg-[#2B74B9] rounded-full text-white text-[18px]"
      >
        신고하기
      </button>
    </form>
  )
}
