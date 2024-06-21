'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PiTrashSimpleLight } from 'react-icons/pi'
import { SlArrowRight } from 'react-icons/sl'

export default function DeleteBtn({
  goodsCode,
  tradingStatus,
}: {
  goodsCode: string
  tradingStatus: number
}) {
  const { data: session } = useSession()
  const router = useRouter()

  // todo soft delete

  async function handleDelete() {
    if (tradingStatus === 0) {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v1/goods/${goodsCode}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: session?.user.accessToken,
          },
          cache: 'no-cache',
        },
      )
      if (data.status === 200) {
        // eslint-disable-next-line no-alert
        alert('상품이 삭제되었습니다.')
        router.push('/')
      }
    }
  }

  return (
    <div className="mt-[50px] mb-[30px] px-[20px] flex justify-center">
      <button
        type="button"
        className="mt-[20px] w-full flex justify-between relative"
        onClick={handleDelete}
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
