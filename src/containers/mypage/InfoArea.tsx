import Image from 'next/image'

export default function InfoArea() {
  return (
    <div className="rounded-3xl bg-slate-300">
      <span>나의 정보</span>
      <div className="flex">
        <Image className="rounded-full" src="" alt="프로필 이미지" />
        <div>
          <span>{}</span>
          <span>카테고리 기본 설정: {}</span>
        </div>
      </div>
    </div>
  )
}
