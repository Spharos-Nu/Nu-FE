import { useRouter } from 'next/navigation'
import { useState } from 'react'
import IdInput from './IdInput'
import NicknameInput from './NicknameInput'
import SelectCategory from './SelectCategory'
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
  const { favoriteCategory, nickname, isValidNick, userId, isValidId } =
    useFirstStore()

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
        <SelectCategory />
        <NicknameInput />
        <IdInput />
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
