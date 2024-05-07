import { poppins } from '@/styles/fonts'
import Image from 'next/image'

export default function SocialForm() {
  return (
    <div
      className={`${poppins.className} mt-8 mx-10 flex flex-wrap justify-center`}
    >
      <div className="flex items-center">
        <span className="inline-block">
          <svg
            width="99"
            height="2"
            viewBox="0 0 99 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-x-[-1]"
          >
            <path
              d="M0 1L99 1.00001"
              stroke="url(#paint0_linear_312_1459)"
              strokeWidth="0.8"
            />
            <defs>
              <linearGradient
                id="paint0_linear_312_1459"
                x1="49.5"
                y1="1"
                x2="79.5"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#727272" />
                <stop offset="1" stopColor="#E0E0E0" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="text-slate-500 mx-3 text-xs inline-block">
          Or continue with
        </span>
        <span className="inline-block">
          <svg
            width="99"
            height="2"
            viewBox="0 0 99 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1L99 1.00001"
              stroke="url(#paint0_linear_312_1459)"
              strokeWidth="0.8"
            />
            <defs>
              <linearGradient
                id="paint0_linear_312_1459"
                x1="49.5"
                y1="1"
                x2="79.5"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#727272" />
                <stop offset="1" stopColor="#E0E0E0" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="mt-5 w-full flex justify-center items-center">
        <button type="button">
          <Image
            src="/images/kakaoLoginBtn.png"
            alt="카카오 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            카카오
          </span>
        </button>
        <button type="button" className="mx-7">
          <Image
            src="/images/naverLoginBtn.png"
            alt="네이버 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            네이버
          </span>
        </button>
        <button type="button" className="mr-7">
          <Image
            src="/images/googleLoginBtn.png"
            alt="구글 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            구글
          </span>
        </button>
        <button type="button">
          <Image
            src="/images/appleLoginBtn.png"
            alt="애플 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            애플
          </span>
        </button>
      </div>
    </div>
  )
}
