'use client'

import { redirect } from 'next/navigation'
import { useToastStore } from '@/components/Toast/store'
import { useNavStore } from '@/components/layout/store'
import { postGoods } from '@/utils/goodsApiActions'
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
  const { showToast } = useToastStore()
  const { currentPage } = useNavStore()

  const validCheck = () => {
    if (imageItems.length === 0) {
      showToast('이미지를 등록해주세요.')
      return false
    }
    if (!goodsName) {
      return showToast('상품명을 입력해주세요.')
    }
    if (categoryId === -1) {
      return showToast('카테고리를 선택해주세요.')
    }
    if (!description) {
      return showToast('상품 설명을 입력해주세요.')
    }
    if (minPrice === '') {
      return showToast('최소 가격을 입력해주세요.')
    }
    if (!biddingPeriod) {
      return showToast('경매 시작 날짜를 선택해주세요.')
    }
    if (!biddingTime) {
      return showToast('경매 시작 시간을 선택해주세요.')
    }
    if (!biddingDuration) {
      return showToast('경매 기간을 선택해주세요.')
    }
    if (wishTradeType === '') {
      return showToast('선호 거래 방법을 선택해주세요.')
    }

    return true
  }

  async function registrationGoods() {
    if (!validCheck()) return

    const images = await uploadGoodsImage(imageItems)

    const openedAt = `${biddingPeriod}T${biddingTime}:00.000Z`
    const date = new Date(`${biddingPeriod} ${biddingTime}`)

    const offset = date.getTimezoneOffset() * 60000
    const closedAt = new Date(
      date.setHours(date.getHours() + Number(biddingDuration)) - offset,
    ).toISOString()

    const data = await postGoods(
      goodsName,
      categoryId,
      description,
      Number(minPrice),
      openedAt,
      closedAt,
      wishTradeType,
      tags,
      images,
    )

    if (data.status === 200) {
      resetGoodsState()
      resetImagesState()
      resetTagsState()
      showToast('상품이 등록되었습니다.')
      redirect(`/${currentPage}`)
    }

    resetGoodsState()
    resetImagesState()
    resetTagsState()
    showToast(data.message)
    redirect(`/${currentPage}`)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault() // 엔터 키 입력을 막음
    }
  }

  function handleWheel(event: React.WheelEvent) {
    ;(event.target as HTMLElement).blur() // 스크롤할 때 input 요소의 포커스를 제거하여 기본 동작을 막음
  }

  function handleMinPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    // 입력값이 0으로 시작하지 않도록 수정
    if (value.startsWith('0')) {
      setMinPrice(value.replace(/^0+/, ''))
    } else {
      setMinPrice(value)
    }
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
          onKeyDown={handleKeyDown}
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
          // onChange={(e) => setMinPrice(e.target.value)}
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
          autoComplete="off"
          min="0"
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
          onChange={handleMinPriceChange}
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
    </main>
  )
}
