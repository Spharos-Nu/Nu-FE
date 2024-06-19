'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { uploadGoodsImage } from '@/utils/uploadImage'
import CategoryArea from './CategoryArea'
import DescriptionArea from './DescriptionArea'
import ImageArea from './ImageArea'
import PeriodArea from './PeriodArea'
import TagArea from './TagArea'
import TradeTypeArea from './TradeTypeArea'
import { useGoodsStore, useImageStore, useTagStore } from './store'

export interface ImageType {
  id: number
  url: string
}

export default function GoodsForm() {
  const { data: session } = useSession()

  const {
    goodsName,
    categoryId,
    description,
    minPrice,
    biddingPeriod,
    biddingTime,
    biddingDuration,
    wishTradeType,
    setGoodsName,
    setMinPrice,
    resetGoodsState,
  } = useGoodsStore()
  const { imageItems, resetImagesState } = useImageStore()
  const { tags, resetTagsState } = useTagStore()
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  async function registrationGoods() {
    if (imageItems.length === 0) {
      return showAlert('이미지를 등록해주세요.')
    }
    if (!goodsName) {
      return showAlert('상품명을 입력해주세요.')
    }
    if (categoryId === -1) {
      return showAlert('카테고리를 선택해주세요.')
    }
    if (!description) {
      return showAlert('상품 설명을 입력해주세요.')
    }
    if (minPrice === '') {
      return showAlert('최소 가격을 입력해주세요.')
    }
    if (!biddingPeriod) {
      return showAlert('입찰 시작 날짜를 선택해주세요.')
    }
    if (!biddingTime) {
      return showAlert('입찰 시작 시간을 선택해주세요.')
    }
    if (!biddingDuration) {
      return showAlert('입찰 기간을 선택해주세요.')
    }
    if (wishTradeType === '') {
      return showAlert('선호 거래 방법을 선택해주세요.')
    }

    const images: ImageType[] = []
    imageItems.map(async (item, index) =>
      images.push({
        id: index + 1,
        url: await uploadGoodsImage(item.url),
      }),
    )
    const openedAt = `${biddingPeriod}T${biddingTime}:00.000Z`
    const date = new Date(`${biddingPeriod} ${biddingTime}`)

    const offset = date.getTimezoneOffset() * 60000
    const closedAt = new Date(
      date.setHours(date.getHours() + Number(biddingDuration)) - offset,
    ).toISOString()

    const inputData = {
      goodsName,
      categoryId,
      description,
      minPrice: Number(minPrice),
      openedAt,
      closedAt,
      wishTradeType: Number(wishTradeType),
      tags,
      images,
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/goods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify(inputData),
    })

    const data = await res.json()
    if (data.status === 200) {
      resetGoodsState()
      resetImagesState()
      resetTagsState()
      // eslint-disable-next-line no-alert
      alert('상품이 등록되었습니다.')
      return redirect(`/`)
    }

    showAlert('상품 등록에 실패했습니다.')
    return null
  }

  return (
    <main className="px-[20px] pt-[10px]">
      <form action={registrationGoods}>
        <ImageArea />
        <label htmlFor="굿즈명" className="text-sky-600 text-[17px]">
          굿즈명
        </label>
        <input
          type="text"
          placeholder="굿즈명"
          value={goodsName}
          onChange={(e) => setGoodsName(e.target.value)}
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
          autoComplete="off"
        />
        <CategoryArea />
        <DescriptionArea />
        <label htmlFor="최소 가격" className="text-sky-600 text-[17px]">
          최소가격
        </label>
        <input
          type="number"
          placeholder="최소가격"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
          autoComplete="off"
          min="0"
        />
        <PeriodArea />
        <TradeTypeArea />
        <TagArea />
        <button
          type="submit"
          className="w-full mt-[20px] px-[15px] py-[13px] mb-[40px] bg-sky-600 rounded-full text-white text-[18px]"
        >
          등록하기
        </button>
      </form>
      <BasicAlert message={message} />
    </main>
  )
}
