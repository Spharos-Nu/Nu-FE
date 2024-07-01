import Duck from '@/public/svgs/intro/introDuck.svg'

export default function ComingSoonTitle() {
  return (
    <div>
      <p className="text-[#2B74B9] text-[28px] font-bold text-center">
        COMING SOON
      </p>
      <p className="text-[#F9B23C] text-[15px] text-center">
        내일 경매가 시작되는 굿즈
      </p>
      <div className="py-[20px] text-center">
        <div className="inline-block">
          <Duck />
        </div>
      </div>
    </div>
  )
}
