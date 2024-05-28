import { MdArrowDropDown } from 'react-icons/md'

export default function UpdateFavCategory() {
  const handleButtonClick = () => {
    // 버튼 클릭하면 모달?
  }

  return (
    <div className="border-[2px] border-slate-400 relative">
      {/* 받아온 데이터를 props해서 내려줘야지. */}
      <MdArrowDropDown
        className="mr-5 text-slate-400"
        onClick={handleButtonClick}
      />
    </div>
  )
}
