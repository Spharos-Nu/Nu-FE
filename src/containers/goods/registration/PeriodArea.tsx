'use client'

// import { useState } from 'react'
// import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function PeriodArea() {
  // const [startDate, setStartDate] = useState<Date>(new Date())
  const today = new Date()
  const weekLater = new Date(today)
  weekLater.setDate(weekLater.getDate() + 7)

  return (
    <>
      <label htmlFor="입찰기간" className="text-[#2B74B9] text-[17px]">
        얼마동안 입찰 받을까요?
      </label>
      <input
        type="text"
        placeholder="상품명"
        name="goodsName"
        className="w-full mt-[5px] mb-[20px] px-[15px] py-[13px] bg-[#F7F7F7] rounded-full placeholder:text-[#bcbcbc]"
      />
      {/* <DatePicker
        selected={startDate}
        startDate={today}
        endDate={weekLater}
        showWeekNumbers
        minDate={today}
        maxDate={weekLater}
        onChange={(date: Date) => setStartDate(date)}
        className="content-center text-center"
        dayClassName={(date) => {
          if (date.getDate() === today.getDate()) {
            return 'bg-red-500 rounded-full'
          }
          return 'text-[#2B74B9]'
        }}
        renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth }) => (
          <div className="m-[10px]">
            <div onClick={decreaseMonth} role="none">
              <SlArrowLeft className="w-[10px] h-[10px]" />
            </div>
            <div>
              {date.getFullYear()}년 {date.getMonth() + 1}월
            </div>
            <div onClick={increaseMonth} role="none">
              <SlArrowRight className="w-[10px] h-[10px]" />
            </div>
          </div>
        )}
      /> */}
    </>
  )
}
