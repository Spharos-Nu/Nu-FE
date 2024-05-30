import DescriptionArea from './DescriptionArea'
import PeriodArea from './PeriodArea'
import TagArea from './TagArea'
import TradeTypeArea from './TradeTypeArea'

export default function GoodsForm() {
  return (
    <div className="px-[20px] pt-[10px]">
      <form>
        <label htmlFor="상품명" className="text-[#2B74B9] text-[17px]">
          상품명
        </label>
        <input
          type="text"
          placeholder="상품명"
          name="goodsName"
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
        />
        <label htmlFor="카테고리" className="text-[#2B74B9] text-[17px]">
          카테고리
        </label>
        <select
          id="category"
          name="category"
          className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
        >
          <option value="none" className="text-[#bcbcbc]">
            카테고리 선택
          </option>
          <option value="0">아이돌</option>
          <option value="1">야구</option>
          <option value="2">애니메이션</option>
        </select>
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
      </form>
    </div>
  )
}
