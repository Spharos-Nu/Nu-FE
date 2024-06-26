'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import CheckList from './CheckList'
import ReasonArea from './ReasonArea'
import { useComplainStore } from './store'

export default function ComplainForm() {
  const { selectedComplaint, complainContent, resetComplainState } =
    useComplainStore()
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const { isClosed, message, setAlert } = useBasicAlertStore()
  const goodsCode = useSearchParams().get('goodsCode')

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

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

  async function registrationComplain(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/etc/reports/goods/${goodsCode}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session?.user.accessToken,
        },
        body: JSON.stringify({
          complainReason: selectedComplaint,
          complainContent,
        }),
      },
    )

    const data = await res.json()
    if (data.status === 200) {
      // eslint-disable-next-line no-alert
      resetComplainState()
      showAlert('신고가 완료되었습니다.')
    } else {
      showAlert('신고 등록에 실패했습니다.')
    }
  }

  useEffect(() => {
    if (isClosed) {
      router.push(`/goods/${goodsCode}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosed])

  return (
    <div>
      <form onSubmit={registrationComplain} className="px-[20px]">
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
      <BasicAlert message={message} />
    </div>
  )
}
