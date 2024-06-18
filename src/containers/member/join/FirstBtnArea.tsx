import { useRouter } from 'next/navigation'
import {
  useErrorStore,
  useJoinStore,
  usePageStore,
  useFocusStore,
} from '@/containers/member/join/store'
import { idValidCheck, nickValidCheck } from '@/utils/joinValidateCheck'

export default function FirstBtnArea() {
  const router = useRouter()
  const { favoriteCategory, nickname, userId, isValidNick, isValidId } =
    useJoinStore()
  const { setCategoryNotSelected, setNotValidNick, setNotValidId } =
    useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { setCurrentFocus } = useFocusStore()

  const firstValidCheck = () => {
    if (!favoriteCategory) {
      setCategoryNotSelected(true)
      setCurrentFocus('favoriteCategory')
      return false
    }
    if (!nickname) {
      setNotValidNick(1)
      setCurrentFocus('nickname')
      return false
    }
    if (!userId) {
      setNotValidId(1)
      setCurrentFocus('userId')
      return false
    }
    if (!isValidNick) {
      if (!nickValidCheck) {
        setNotValidNick(1)
      } else {
        setNotValidNick(3)
      }

      setCurrentFocus('nickname')
      return false
    }
    if (!isValidId) {
      if (!idValidCheck) {
        setNotValidId(1)
      } else {
        setNotValidId(3)
      }

      setCurrentFocus('userId')
      return false
    }

    return true
  }

  const toNextPage = () => {
    const isValidated = firstValidCheck()
    if (isValidated) {
      return setCurrentIdx(1)
    }

    return null
  }

  return (
    <span className="w-full flex justify-between">
      <div
        aria-label="이전"
        className="w-[47%] h-14 rounded-3xl bg-white border-[3px] border-sky-600"
      >
        <button
          id="이전"
          type="button"
          className="w-full h-full text-sky-600"
          onClick={() => router.push('/login')}
        >
          Previous
        </button>
      </div>
      <div aria-label="다음" className="w-[47%] h-14 rounded-3xl bg-sky-600">
        <button
          type="button"
          className="w-full h-full text-white"
          onClick={toNextPage}
        >
          Next
        </button>
      </div>
    </span>
  )
}
