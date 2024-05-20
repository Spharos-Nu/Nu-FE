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
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            >
              {/* Todo: select option 커스텀 */}
              <option value="" disabled selected>
                관심 카테고리를 선택해주세요.
              </option>
              {favoriteCategoryOptions.map((option) => (
                <option key={option} value={option}>
                  <span>{option}</span>
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
              placeholder="닉네임을 입력해주세요."
              autoComplete="off"
              maxLength={20}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            />
            {nickname && (
              // Todo: TiDelete 보이게
              <TiDelete
                className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setNickname('')
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
              placeholder="아이디를 입력해주세요."
              autoComplete="off"
              maxLength={20}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            />
            {userId && (
              <TiDelete
                className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setUserId('')
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
        <div
          aria-label="다음"
          className="w-full h-14 rounded-3xl mt-3 bg-sky-600"
        >
          <button
            type="button"
            className="w-full h-full text-white"
            onClick={checkData}
          >
            Next
          </button>
        </div>
      </form>
    </>
  )
}
