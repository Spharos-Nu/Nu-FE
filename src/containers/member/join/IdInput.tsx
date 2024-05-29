import { TiDelete } from 'react-icons/ti'
import { useFirstStore } from '@/containers/member/join/store'
import { duplicationCheckId } from '@/utils/memberApi'

export default function IdInput() {
  const { userId, setUserId, setIsValidId } = useFirstStore()

  const handleId = async () => {
    const regex = /^[a-zA-Z0-9]{6,15}$/
    if (!regex.test(userId)) {
      // eslint-disable-next-line no-alert
      return alert('6~15자의 올바른 아이디를 입력해주세요.')
    }

    const data = await duplicationCheckId(userId)
    if (data.status === 200) {
      setIsValidId(true)
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  return (
    <div className="w-full h-14 rounded-3xl mt-3">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="아이디"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          아이디
        </label>
        <input
          id="아이디"
          type="text"
          placeholder="영문과 숫자를 조합한 6~15자의 아이디"
          autoComplete="off"
          minLength={6}
          maxLength={15}
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value)
            setIsValidId(false)
          }}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {userId && (
          <TiDelete
            className="w-4 h-4 absolute right-[105px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              setUserId('')
              setIsValidId(false)
            }}
          />
        )}
        <div
          aria-label="아이디 중복확인"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white"
        >
          <button id="아이디 중복확인" type="button" onClick={handleId}>
            중복확인
          </button>
        </div>
      </span>
    </div>
  )
}
