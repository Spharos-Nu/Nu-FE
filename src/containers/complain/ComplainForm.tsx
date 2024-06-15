'use client'

import { usePathname } from 'next/navigation'
import CheckList from './CheckList'
import ReasonArea from './ReasonArea'

export default function ComplainForm({
  complainPost,
}: {
  complainPost: (complainData: FormData) => void
}) {
  const pathname = usePathname()

  const userComplainList = [
    {
      id: 0,
      description: '비매너 사용자예요.',
    },
    {
      id: 1,
      description: '거래 중 분쟁이 발생했어요.',
    },
    {
      id: 2,
      description: '사기인 것 같아요.',
    },
    {
      id: 3,
      description: '욕설, 비방, 혐오 표현을 해요.',
    },
    {
      id: 4,
      description: '연애 목적의 대화를 시도해요.',
    },
    {
      id: 5,
      description: '부적절한 성적 행위를 해요.',
    },
  ]

  const goodsComplainList = [
    {
      id: 0,
      description: '판매 금지된 굿즈예요.',
    },
    {
      id: 1,
      description: '상품 설명과 다른 상품이에요.',
    },
    {
      id: 2,
      description: '상품이 가품이에요.',
    },
    {
      id: 3,
      description: '전문 판매업자 같아요.',
    },
    {
      id: 4,
      description: '사기인 것 같아요.',
    },
    {
      id: 5,
      description: '허위 게시글이에요.',
    },
  ]

  return (
    <form action={complainPost} className="px-[20px]">
      {pathname === '/user-complain' ? (
        <CheckList complainList={userComplainList} />
      ) : (
        <CheckList complainList={goodsComplainList} />
      )}
      <ReasonArea />
      <button
        type="submit"
        className="w-full mt-[20px] px-[15px] py-[13px] mb-[40px] bg-sky-600 rounded-full text-white text-[18px]"
      >
        신고하기
      </button>
    </form>
  )
}
