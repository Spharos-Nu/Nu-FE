export default function MyPageGoodsTab() {
  // Todo: 선택된 탭에 따른 스타일 변화

  return (
    <div className="flex justify-between text-sm mx-6 mt-2">
      <div aria-label="전체" className="w-[20%] flex justify-center">
        <button type="button" id="전체">
          전체
        </button>
      </div>
      <div aria-label="입찰 중" className="w-[20%] flex justify-center">
        <button type="button" id="입찰 중">
          입찰 중
        </button>
      </div>
      <div aria-label="입찰종료" className="w-[20%] flex justify-center">
        <button type="button" id="입찰종료">
          입찰종료
        </button>
      </div>
      <div aria-label="거래완료" className="w-[20%] flex justify-center">
        <button type="button" id="거래완료">
          거래완료
        </button>
      </div>
      <div aria-label="거래취소" className="w-[20%] flex justify-center">
        <button type="button" id="거래취소">
          거래취소
        </button>
      </div>
    </div>
  )
}
