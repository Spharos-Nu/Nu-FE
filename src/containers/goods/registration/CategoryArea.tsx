export default function CategoryArea() {
  return (
    <>
      <label htmlFor="카테고리" className="text-[#2B74B9] text-[17px]">
        카테고리
      </label>
      <select
        id="category"
        name="category"
        className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc] appearance-none"
      >
        <option value="none" className="text-[#bcbcbc]">
          카테고리 선택
        </option>
        <option value="0">아이돌</option>
        <option value="1">야구</option>
        <option value="2">애니메이션</option>
      </select>
    </>
  )
}
