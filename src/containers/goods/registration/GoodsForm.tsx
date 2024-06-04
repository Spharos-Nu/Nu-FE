'use client'

// import { uploadImage } from '@/utils/uploadImage'
import CategoryArea from './CategoryArea'
import DescriptionArea from './DescriptionArea'
import ImageArea from './ImageArea'
import PeriodArea from './PeriodArea'
import TagArea from './TagArea'
import TradeTypeArea from './TradeTypeArea'
// import { useImageStore, useTagStore } from './store'

// interface ImageType {
//   url: string
// }

export default function GoodsForm() {
  // const { imageItems } = useImageStore()
  // const { tagItems } = useTagStore()

  // async function postGoods(formData: FormData) {
  //   if (!formData.get('goodsName')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('상품명을 입력해주세요.')
  //   }
  //   if (formData.get('category') === 'none') {
  //     // eslint-disable-next-line no-alert
  //     return alert('카테고리를 선택해주세요.')
  //   }
  //   if (!formData.get('description')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('상품 설명을 입력해주세요.')
  //   }
  //   if (!formData.get('minPrice')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('최소 가격을 입력해주세요.')
  //   }
  //   if (!formData.get('biddingPeriod')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('입찰 기간을 선택해주세요.')
  //   }
  //   if (!formData.get('biddingTime')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('입찰 시간을 선택해주세요.')
  //   }
  //   if (!formData.get('biddingDuration')) {
  //     // eslint-disable-next-line no-alert
  //     return alert('입찰 기간을 선택해주세요.')
  //   }

  //   const imageList: ImageType[] = []
  //   imageItems.map(async (item) =>
  //     imageList.push({ url: await uploadImage(item.url) }),
  //   )

  //   const data = {
  //     goodsName: formData.get('goodsName'),
  //     category: formData.get('category'),
  //     description: formData.get('description'),
  //     minPrice: formData.get('minPrice'),
  //     biddingPeriod: formData.get('biddingPeriod'),
  //     biddingTime: formData.get('biddingTime'),
  //     biddingDuration: formData.get('biddingDuration'),
  //     tradeType: formData.get('tradeType'),
  //     tag: tagItems,
  //     images: imageList,
  //   }
  //   console.log(data)
  // }

  return (
    <div className="px-[20px] pt-[10px]">
      <form>
        <ImageArea />
        <label htmlFor="굿즈명" className="text-[#2B74B9] text-[17px]">
          굿즈명
        </label>
        <input
          type="text"
          placeholder="굿즈명"
          name="goodsName"
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
        />
        <CategoryArea />
        <DescriptionArea />
        <label htmlFor="최소 가격" className="text-[#2B74B9] text-[17px]">
          최소가격
        </label>
        <input
          type="number"
          placeholder="최소가격"
          name="minPrice"
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
        />
        <PeriodArea />
        <TradeTypeArea />
        <TagArea />
        <button
          type="submit"
          className="w-full mt-[20px] px-[15px] py-[13px] mb-[40px] bg-[#2B74B9] rounded-full text-white text-[18px]"
        >
          등록하기
        </button>
      </form>
    </div>
  )
}
