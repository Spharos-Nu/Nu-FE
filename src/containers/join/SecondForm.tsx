'use client'

// import { useState } from 'react'
// import { useSecondStore } from './store'
// import DuckOne from '@/../public/svgs/duck/duckone.svg'

export default function SecondForm() {
  // const { password, phoneNumber, isValidated, setPassword, setPhoneNumber, setIsValidated } =
  //   useSecondStore()
  // const [password2, setPassword2] = useState<string>('')
  // /** 유효성 검사 후 인증번호 발송 */
  // const sendMessage = async () => {
  //   // 유효성 검증
  //   if (mobileFront === '010') {
  //     const phoneRegex = /^\d{8}$/
  //     if (!phoneRegex.test(mobileBack)) {
  //       return showAlert('휴대폰번호를 정확히 입력해주세요.')
  //     }
  //   } else {
  //     const phoneRegex = /^(\d{7}|\d{8})$/
  //     if (!phoneRegex.test(mobileBack)) {
  //       return showAlert('휴대폰번호를 정확히 입력해주세요.')
  //     }
  //   }
  //   /** 메시지 전송여부 + 메시지 전송횟수 */
  //   const [isMessage, setIsMessage] = useState<boolean>(false)
  //   const [cntMessage, setCntMessage] = useState<number>(0)
  //     // 5회 인증 시도 시 disabled
  //   const [disableTime, setDisableTime] = useState<number>(0)
  //   // 3번 내지 5번의 인증번호 발송횟수를 초과하면 showAlert, 일정 시간 인증 불가
  //   if (cntMessage === 5) {
  //     setCntMessage(cntMessage + 1)
  //     setDisableTime(300)
  //     return showAlert(
  //       '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
  //     )
  //   }
  //   if (cntMessage > 5) {
  //     return showAlert(
  //       '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
  //     )
  //   }
  //   if (disableTime) {
  //     return showAlert(
  //       '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
  //     )
  //   }
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_API}/v1/users/verification`,
  //     {
  //       method: 'POST',
  //       body: phoneNumber,
  //     },
  //   )
  //   const data = await res.json()
  //   if (data.status === 200) {
  //   }
  // }
  // return (
  //   <>
  //     <div className="flex justify-center items-center">
  //       <DuckOne />
  //     </div>
  //     <form className="mx-10 mt-8">
  //       <div className="w-full h-14 rounded-3xl">
  //         <span className="flex relative w-full h-full">
  //           <label
  //             htmlFor="비밀번호"
  //             className="overflow-hidden absolute w-px h-px text-[0px]"
  //           >
  //             비밀번호
  //           </label>
  //           <input
  //             id="비밀번호"
  //             type="password"
  //             placeholder="비밀번호"
  //             autoComplete="off"
  //             maxLength={20}
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
  //           />
  //         </span>
  //       </div>
  //       <div className="w-full h-14 rounded-3xl mt-3">
  //         <span className="flex relative w-full h-full">
  //           <label
  //             htmlFor="비밀번호 재확인"
  //             className="overflow-hidden absolute w-px h-px text-[0px]"
  //           >
  //             비밀번호 재확인
  //           </label>
  //           <input
  //             id="비밀번호 재확인"
  //             type="password"
  //             placeholder="비밀번호 재확인"
  //             autoComplete="off"
  //             maxLength={20}
  //             value={password2}
  //             onChange={(e) => setPassword2(e.target.value)}
  //             className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
  //           />
  //         </span>
  //       </div>
  //       <div className="w-full h-14 rounded-3xl mt-3">
  //         <span className="flex relative w-full h-full">
  //           <label
  //             htmlFor="휴대폰 인증"
  //             className="overflow-hidden absolute w-px h-px text-[0px]"
  //           >
  //             휴대폰 인증
  //           </label>
  //           <input
  //             id="휴대폰 인증"
  //             type="text"
  //             placeholder="휴대폰"
  //             autoComplete="off"
  //             maxLength={20}
  //             value={phoneNumber}
  //             onChange={(e) => setPhoneNumber(e.target.value)}
  //             className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
  //           />
  //           {!isValidated && (
  //             <div
  //               aria-label="인증번호 발송"
  //               className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white"
  //             >
  //               <button id="인증번호 발송" type="button" onClick={sendMessage}>
  //                 중복확인
  //               </button>
  //             </div>
  //           )}
  //         </span>
  //       </div>
  //       <div
  //         aria-label="다음"
  //         className="w-full h-14 rounded-3xl mt-3 bg-sky-600"
  //       >
  //         <button type="button" className="w-full h-full text-white">
  //           Next
  //         </button>
  //       </div>
  //     </form>
  //   </>
  // )
}
