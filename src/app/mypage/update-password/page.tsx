interface PasswordType {
  id: number
  label: string
  name: string
  placeholder: string
}

export default async function UpdatePassword() {
  // Todo: Api 함수 연결해야지.

  const password: PasswordType[] = [
    {
      id: 0,
      label: '비밀번호',
      name: 'currentPassword',
      placeholder: '현재 비밀번호',
    },
    {
      id: 1,
      label: '새 비밀번호',
      name: 'newPassword',
      placeholder: '8~20자, 영문/숫자/특수문자를 포함하는 비밀번호',
    },
    {
      id: 2,
      label: '새 비밀번호 확인',
      name: 'confirmPassword',
      placeholder: '새 비밀번호 재입력',
    },
  ]

  return (
    <form className="h-full mx-5 my-5 relative">
      {password.map((element) => {
        return (
          <div key={element.id} className="w-full h-14 rounded-3xl my-14">
            <label htmlFor={element.label} className="pl-2">
              {element.label}
              <input
                id={element.label}
                type="password"
                placeholder={element.placeholder}
                name={element.name}
                autoComplete="off"
                minLength={8}
                maxLength={20}
                className="w-full h-full rounded-3xl bg-gray-200 pl-5 mt-3 text-sm focus:border-[3px] focus:border-sky-600"
              />
            </label>
          </div>
        )
      })}
      <button
        type="submit"
        className="w-full h-14 rounded-3xl bg-sky-600 text-white absolute bottom-20"
      >
        변경 완료
      </button>
    </form>
  )
}
