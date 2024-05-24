export default function WinningBidTab() {
  return (
    <div className="flex justify-between text-sm mx-6 mt-2">
      <div
        aria-label="전체"
        className="w-[25%] flex justify-center border-l border-slate-400"
      >
        <button type="button" id="전체">
          전체
        </button>
      </div>
      <div
        aria-label="낙찰"
        className="w-[25%] flex justify-center border-l border-slate-400"
      >
        <button type="button" id="낙찰">
          낙찰
        </button>
      </div>
      <div
        aria-label="거래완료"
        className="w-[25%] flex justify-center border-l border-slate-400"
      >
        <button type="button" id="거래완료">
          거래완료
        </button>
      </div>
      <div
        aria-label="거래취소"
        className="w-[25%] flex justify-center border-x border-slate-400"
      >
        <button type="button" id="거래취소">
          거래취소
        </button>
      </div>
    </div>
  )
}
