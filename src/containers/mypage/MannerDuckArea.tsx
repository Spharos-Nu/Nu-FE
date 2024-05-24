import SampleDuck from '@/../public/svgs/duck/sampleDuck.svg'

export default function MannerDuckArea() {
  return (
    <div className="mx-7 my-7 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">나의 매너덕</span>
      <div className="flex flex-col justify-center items-center">
        <SampleDuck />
        <p className="mt-3 text-xs text-red-500">
          춤추는 오리까지 15점 남았어요.
        </p>
        <p className="">현재 닉네임님의 매너덕은 그냥 오리입니다</p>
      </div>
    </div>
  )
}
