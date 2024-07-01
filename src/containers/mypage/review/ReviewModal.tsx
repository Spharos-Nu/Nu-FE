import Image from 'next/image'
import { CgClose } from 'react-icons/cg'
import { ReviewType } from '@/types/etcApiDataType'
import { SummaryDataType } from '@/types/readApiDataType'

export default function ReviewModal({
  review,
  goods,
  setVisible,
}: {
  review: ReviewType
  goods: SummaryDataType
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const ImageUrl = goods.thumbnail
    ? goods.thumbnail.url
    : '/images/basicImage.png'

  return (
    <div className="bg-black z-20 fixed top-0 left-0 bg-opacity-25 w-screen h-screen">
      <div className="bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px] w-2/3 rounded-3xl px-[20px] py-[20px]">
        <CgClose
          onClick={() => setVisible(false)}
          className="w-[20px] h-[20px] text-sky-600 absolute right-0 mr-[20px] mt-[2px]"
        />
        <p className="text-center text-[18px] text-sky-600">리뷰 상세</p>
        <Image
          src={ImageUrl}
          alt="굿즈 이미지"
          width={100}
          height={100}
          className="mt-[20px] m-auto rounded-full aspect-auto"
        />
        <div className="mt-[30px]">
          <p className="text-[15px] font-semibold">상품명</p>
          <p className="mt-[10px] text-[15px]">{goods.goodsName}</p>
          <p className="mt-[20px] text-[15px] font-semibold">리뷰 내용</p>
          <p className="mt-[10px] text-[15px]">{review.content}</p>
        </div>
      </div>
    </div>
  )
}
