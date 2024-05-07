import { montserrat } from '@/styles/fonts'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <form className={`${montserrat.className} mx-10 mt-8`}>
      <div>
        <label
          htmlFor="아이디"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          아이디
        </label>
        <input
          id="아이디"
          type="text"
          placeholder="Your Name"
          autoComplete="off"
          className="w-full h-14 rounded-3xl bg-gray-200 pl-5 text-sm"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor="비밀번호"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          비밀번호
        </label>
        <input
          id="비밀번호"
          type="password"
          placeholder="Password"
          autoComplete="off"
          className="w-full h-14 rounded-3xl bg-gray-200 pl-5 text-sm"
        />
      </div>
      <div className="mt-3 mb-10 flex items-center justify-between">
        <span className="inline-flex">
          <input
            id="자동로그인"
            type="checkbox"
            className="opacity-0 absolute"
          />
          <label htmlFor="자동로그인" className="text-xs flex items-center">
            {/* Todo: 체크박스 체크됐을 때, 이미지 내지 아이콘 */}
            <span className="inline-block w-4 h-4 mr-1 border border-gray-300 rounded checked:bg-no-repeat checked:bg-center" />
            Remember Me
          </label>
        </span>
        <span>
          <Link href="/find-info" aria-label="찾기" className="text-xs">
            Forgot Password
          </Link>
        </span>
      </div>
      <div
        aria-label="로그인 버튼"
        className="h-14 rounded-3xl bg-sky-600 flex items-center justify-center"
      >
        <button type="submit" className="w-full h-full text-white">
          LOG IN
        </button>
      </div>
    </form>
  )
}
