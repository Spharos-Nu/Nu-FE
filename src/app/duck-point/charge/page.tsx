export default function DuckPointCharge() {
  // Todo: 돈 받아오세요.(API)
  const currentMoney = 100000

  // Todo: 각종 약관이 필요하다.
  return (
    <>
      <div className="mt-5 mx-5 py-5">
        <label htmlFor="충전금액" className="font-bold text-xl">
          얼마나 충전할까요?
        </label>
        <input
          id="충전금액"
          type="number"
          placeholder={`현재 내 덕포인트 ${currentMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
          className="w-full h-12 my-3 text-xl focus:border-[3px] focus:rounded-xl focus:border-sky-600"
        />
      </div>
      <button
        type="button"
        id="충전"
        aria-label="충전"
        className="w-[90%] mx-5 h-16 rounded-xl bg-sky-600 text-white absolute justify-center bottom-10"
      >
        충전하기
      </button>
    </>
  )
}
