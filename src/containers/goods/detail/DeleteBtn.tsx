import { PiTrashSimpleLight } from 'react-icons/pi'
import { SlArrowRight } from 'react-icons/sl'

export default function DeleteBtn() {
  // to do : 삭제 api 호출
  return (
    <div className="mt-[50px] mb-[30px] px-[20px] flex justify-center">
      <button
        type="button"
        className="mt-[20px] w-full flex justify-between relative"
      >
        <div className="flex">
          <PiTrashSimpleLight className="w-[25px] h-[25px]" />
          <p className="content-center pl-[10px] text-[15px] tracking-[-0.05rem]">
            삭제하기
          </p>
        </div>
        <SlArrowRight className="absolute top-1/2 right-0 -translate-y-1/2 w-[15px] h-[15px]" />
      </button>
    </div>
  )
}
