import DuckPoint from '@/../public/svgs/duck/mainDuckPoint.svg'

export default function UserDuckPoint() {
  return (
    <div className="flex justify-between h-[48px] px-[10px] bg-[#2B74B9] rounded-full">
      <div className="content-center">
        <DuckPoint />
      </div>
      <p className="pl-[15px] pr-[15px] text-[17px] text-white content-center">
        1,000
      </p>
    </div>
  )
}
