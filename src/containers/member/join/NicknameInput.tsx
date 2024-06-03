import { TiDelete } from 'react-icons/ti'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useFirstStore } from '@/containers/member/join/store'
import { duplicationCheckNick } from '@/utils/memberApi'

export default function NicknameInput() {
  const { nickname, setNickname, setIsValidNick } = useFirstStore()
  const { message, setAlert } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const handleNick = async () => {
    const regex = /^[a-zA-Z가-힣0-9]{2,10}$/
    if (!regex.test(nickname)) {
      return showAlert('2~10자의 올바른 닉네임을 입력해주세요.')
    }

    const data = await duplicationCheckNick(nickname)

    if (data.status === 200) {
      setIsValidNick(true)
      // Todo: 욕설 닉네임 유효성 검증?
      return showAlert(
        `${data.message}\n욕설 혹은 비속어를 포함하는 닉네임은 제재 대상이 될 수 있습니다.`,
      )
    }
    return showAlert(data.message)
  }

  return (
    <div className="w-full h-14 rounded-3xl mt-3">
      <span className="flex relative w-full h-full">
        <label
          htmlFor="닉네임"
          className="overflow-hidden absolute w-px h-px text-[0px]"
        >
          닉네임
        </label>
        <input
          id="닉네임"
          type="text"
          placeholder="한/영, 숫자를 조합한 2~15자의 닉네임"
          autoComplete="off"
          minLength={2}
          maxLength={15}
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value)
            setIsValidNick(false)
          }}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        />
        {nickname && (
          <TiDelete
            className="w-4 h-4 absolute right-[105px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              setNickname('')
              setIsValidNick(false)
            }}
          />
        )}
        <div
          aria-label="닉네임 중복확인"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 px-5 py-3 rounded-3xl text-sm text-white"
        >
          <button id="닉네임 중복확인" type="button" onClick={handleNick}>
            중복확인
          </button>
        </div>
      </span>
      <BasicAlert message={message} />
    </div>
  )
}
