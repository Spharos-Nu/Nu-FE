'use client'

import { useRouter } from 'next/navigation'
import Idol from '@/../public/svgs/duck/idol-duck.svg'
import BackBtn from '@/../public/svgs/icon/backBtn.svg'

export default function Category({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/`)
  }

  const text = '어떤 굿즈를\n찾아 오셨나요?'

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <div
        onClick={() => setVisible(false)}
        role="none"
        className="mt-[20px] pl-[20px]"
      >
        <BackBtn />
      </div>
      <h1 className="whitespace-pre-line mt-[100px] ml-[30px] text-[37px] tracking-[-0.1rem] font-semibold">
        {text}
      </h1>
      <div className="mt-[80px] mb-[50px] tracking-[-0.07rem]">
        <div
          onClick={() => handleClick()}
          role="none"
          className="flex justify-between mx-[30px] px-[30px] h-[130px] border rounded-lg"
        >
          <div className="content-center">
            <p className="text-[20px]">아이돌</p>
            <p className="text-[15px]">K-pop</p>
          </div>
          <div className="content-center">
            <Idol />
          </div>
        </div>
        <div
          onClick={() => handleClick()}
          role="none"
          className="flex justify-between mt-[20px] mx-[30px] px-[30px] h-[130px] border rounded-lg"
        >
          <div className="content-center">
            <p className="text-[20px]">야구</p>
            <p className="text-[15px]">Baseball</p>
          </div>
          <div className="content-center">
            <Idol />
          </div>
        </div>
        <div
          onClick={() => handleClick()}
          role="none"
          className="flex justify-between mt-[20px] mx-[30px] px-[30px] h-[130px] border rounded-lg"
        >
          <div className="content-center">
            <p className="text-[20px]">애니메이션</p>
            <p className="text-[15px]">Animation</p>
          </div>
          <div className="content-center">
            <Idol />
          </div>
        </div>
      </div>
    </div>
  )
}
