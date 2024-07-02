'use client'

import { useRouter } from 'next/navigation'
import { PiTrashSimpleLight } from 'react-icons/pi'
import { SlArrowRight } from 'react-icons/sl'
import { useBasicAlertStore } from '@/components/Modal/store'
import { hardDeleteGoods, softDeleteGoods } from '@/utils/goodsDetailApiActions'

export default function DeleteBtn({
  goodsCode,
  tradingStatus,
}: {
  goodsCode: string
  tradingStatus: number
}) {
  const router = useRouter()
  const { showAlert } = useBasicAlertStore()

  async function handleDelete() {
    if (tradingStatus === 0) {
      const res = await hardDeleteGoods(goodsCode)
      if (res.status === 200) {
        showAlert('상품이 삭제되었습니다.')
        router.push(`/mypage/sell`)
      }
    } else {
      const res = await softDeleteGoods(goodsCode)
      if (res.status === 200) {
        showAlert('상품이 삭제되었습니다.')
        router.push(`/mypage/sell`)
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
