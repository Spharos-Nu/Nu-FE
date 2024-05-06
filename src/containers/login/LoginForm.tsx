export default function LoginForm() {
  return (
    <form className="h-44 mx-10 mt-24">
      <div className="w-full h-14 opacity-10 rounded-[100px] bg-gray-200">
        <label
          htmlFor="아이디"
          className="overflow-hidden absolute w-px h-px leading-[0px] text-[0px] break-all"
        >
          아이디
        </label>
        <input
          id="아이디"
          type="text"
          placeholder="Your Name"
          autoComplete="off"
        />
      </div>
      <div className="w-full h-14 opacity-10 rounded-[100px] bg-gray-200">
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
        />
      </div>
      <button type="submit" aria-label="로그인">
        LOG IN
      </button>
    </form>
  )
}
