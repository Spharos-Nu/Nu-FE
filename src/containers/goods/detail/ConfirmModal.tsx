import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useToastStore } from '@/components/Toast/store'
import ConfirmDuck from '@/public/svgs/duck/biddingConfirmDuck.svg'
import { ApiResponse } from '@/types/apiResponseType'
import { BiddingMaxType } from '@/types/goodsType'
import {
  getMaxBidding,
  postBiddingCancel,
  postBiddingConfirm,
} from '@/utils/goodsDetailApiActions'

export default function ConfirmModal({
  setVisible,
  goodsCode,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  goodsCode: string
}) {
  const [maxPrice, setMaxPrice] = React.useState<ApiResponse<BiddingMaxType>>({
    status: 0,
    message: '',
    result: {
      bidId: 0,
      bidderUuid: '',
      price: 0,
    },
  })
  const router = useRouter()
  const { showAlert } = useBasicAlertStore()
  const { showToast } = useToastStore()

  // 입찰자 있을 경우
  const biddingConfirm = async (confirmData: FormData) => {
    if (confirmData.get('confirm') === 'true') {
      const res = await postBiddingConfirm(goodsCode)
      if (res.status === 200) {
        showAlert('낙찰되었습니다.')
        showToast('마이페이지로 이동합니다.')
        router.push(`/mypage/sell`)
      } else showToast(res.message)
    } else if (confirmData.get('cancel') === 'false') {
      const res = await postBiddingCancel(goodsCode)
      if (res.status === 200) {
        showAlert('취소되었습니다.')
        showToast('마이페이지로 이동합니다.')
        router.push(`/mypage/sell`)
      } else showToast(res.message)
    }
  }

  // 입찰자 없을 경우
  const biddingConfirm2 = async (confirmData: FormData) => {
    if (confirmData.get('again') === 'true') {
      const res = await postBiddingCancel(goodsCode)
      if (res.status === 200) {
        showToast('등록 페이지로 이동합니다.')
        router.push(`/registration`)
      } else showToast(res.message)
    } else if (confirmData.get('cancel') === 'false') {
      const res = await postBiddingCancel(goodsCode)
      if (res.status === 200) {
        showAlert('취소되었습니다.')
        showToast('마이페이지로 이동합니다.')
        router.push(`/mypage/sell`)
      } else showToast(res.message)
    }
  }

  useEffect(() => {
    const maxBidder = async () => {
      const maxData = await getMaxBidding(goodsCode)

      setMaxPrice(maxData)
    }

    maxBidder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="fixed z-40 w-screen h-screen top-0 left-0 bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-0 h-[47%] w-screen">
        <div className="absolute z-[60] left-1/2 -translate-x-1/2">
          <ConfirmDuck />
        </div>
        <div className="fixed z-50 w-screen h-[40%] bg-white bottom-0 left-0 rounded-t-3xl">
          <CgClose
            className="absolute top-5 right-5 text-3xl text-sky-600"
            onClick={() => setVisible(false)}
          />
          {maxPrice.status !== 200 && (
            <form action={biddingConfirm2}>
              <p className="pt-[70px] text-[32px] text-center">
                <span className="text-[22px]">{maxPrice.message}</span>
              </p>
              <button
                type="submit"
                name="cancel"
                value="false"
                className="w-[calc(100%-50px)] h-[60px] border border-sky-600 text-sky-600 text-[17px] rounded-full mt-[30px] mx-[20px]"
              >
                취소하기
              </button>
              <button
                name="again"
                type="submit"
                value="true"
                className="w-[calc(100%-50px)] h-[60px] bg-sky-600 text-white text-[17px] rounded-full mt-[15px] mx-[20px]"
              >
                재등록하기
              </button>
            </form>
          )}
          {maxPrice.status === 200 && (
            <form action={biddingConfirm}>
              <p className="pt-[70px] text-[32px] text-center">
                <span className="text-[22px]">최고 입찰가</span>{' '}
                {maxPrice.result.price.toLocaleString()}
                <span className="text-[22px] pl-[2px]">원</span>
              </p>
              <button
                type="submit"
                name="confirm"
                value="true"
                className="w-[calc(100%-50px)] h-[60px] bg-sky-600 text-white text-[17px] rounded-full mt-[40px] mx-[20px]"
              >
                낙찰하기
              </button>
              <button
                type="submit"
                name="cancel"
                value="false"
                className="w-[calc(100%-50px)] h-[60px] border border-sky-600 text-sky-600 text-[17px] rounded-full mt-[15px] mx-[20px]"
              >
                취소하기
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
