import Duck from '@/public/svgs/duck/descriptionDuck.svg'

export default function DetailDescription() {
  return (
    <div className="relative pt-[50px] px-[15px]">
      <div className="absolute z-10 left-1/2 -translate-x-1/2">
        <Duck />
      </div>
      <div className="mt-[60px] py-[60px] px-[20px] text-[18px] bg-[#f8f7f7] rounded-2xl">
        content
        <div>태그리스트</div>
      </div>
    </div>
  )
}
