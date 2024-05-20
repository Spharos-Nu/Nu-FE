import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import {
  duplicationCheckNick,
  duplicationCheckId,
} from '@/app/api/auth/Functions'
import { useFirstStore } from './store'
import BasicProfileDuck from '@/../public/svgs/duck/basicProfileDuck.svg'
import ProfileImgBtn from '@/../public/svgs/icon/profileImgBtn.svg'

export default function FirstForm({
  onSwipeLeft,
}: {
  onSwipeLeft: () => void
}) {
  const router = useRouter()
  const [profileImg, setProfileImg] = useState<boolean>(false)
  const {
    favoriteCategory,
    nickname,
    isValidNick,
    userId,
    isValidId,
    favoriteCategoryOptions,
    setFavoriteCategory,
    setNickname,
    setIsValidNick,
    setUserId,
    setIsValidId,
  } = useFirstStore()

  const handleFavoriteCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFavoriteCategory(e.target.value)
  }

  const handleNick = async () => {
    const regex = /^[a-zA-Z가-힣0-9]{2,10}$/
    if (!regex.test(nickname)) {
      // eslint-disable-next-line no-alert
      return alert('2~10자의 올바른 닉네임을 입력해주세요.')
    }

    const data = await duplicationCheckNick(nickname)

    if (data.status === 200) {
      setIsValidNick(true)
      // Todo: 욕설 닉네임 유효성 검증?
      // eslint-disable-next-line no-alert
      return alert(
        `${data.message}\n욕설 혹은 비속어를 포함하는 닉네임은 제재 대상이 될 수 있습니다.`,
      )
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

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

  const checkData = () => {
    if (favoriteCategory === '') {
      // eslint-disable-next-line no-alert
      return alert('관심 카테고리를 선택해주세요.')
    }
    if (nickname === '') {
      // eslint-disable-next-line no-alert
      return alert('닉네임을 입력해주세요.')
    }
    if (!isValidNick) {
      // eslint-disable-next-line no-alert
      return alert('닉네임 중복확인을 진행해주세요.')
    }
    if (userId === '') {
      // eslint-disable-next-line no-alert
      return alert('아이디를 입력해주세요.')
    }
    if (!isValidId) {
      // eslint-disable-next-line no-alert
      return alert('닉네임 중복확인을 진행해주세요.')
    }

    return onSwipeLeft()
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex w-32 relative">
          {!profileImg ? (
            <BasicProfileDuck className="w-full max-w-32" />
          ) : (
            <BasicProfileDuck className="w-full max-w-32" />
          )}
          <ProfileImgBtn
            className="absolute bottom-0 right-0 z-10"
            onClick={() => setProfileImg(true)}
          />
        </div>
      </div>
      <form className="mx-10 mt-8">
        <div className="w-full h-14 rounded-3xl">
          <span
            className="flex relative w-full h-full"
            aria-label="favoriteCategory"
          >
            <select
              id="favoriteCategory"
              value={favoriteCategory}
              onChange={handleFavoriteCategory}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
            >
              {/* Todo: select option 커스텀 */}
              <option value="" disabled selected>
                관심 카테고리를 선택해주세요.
              </option>
              {favoriteCategoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-5 top-4 text-sky-600 pointer-events-none" />
          </span>
        </div>
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
              placeholder="한/영, 숫자를 조합한 2~10자의 닉네임"
              autoComplete="off"
              minLength={2}
              maxLength={10}
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
        </div>
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
        <span className="w-full flex justify-between">
          <div
            aria-label="이전"
            className="w-[49%] h-14 rounded-3xl mt-3 bg-white border-[3px] border-sky-600"
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
          <div
            aria-label="다음"
            className="w-[49%] h-14 rounded-3xl mt-3 bg-sky-600"
          >
            <button
              type="button"
              className="w-full h-full text-white"
              onClick={checkData}
            >
              Next
            </button>
          </div>
        </span>
      </form>
    </>
  )
}
