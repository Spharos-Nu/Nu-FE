'use client'

import { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { useFirstStore } from './store'
import BasicProfileDuck from '@/../public/svgs/duck/basicProfileDuck.svg'
import ProfileImgBtn from '@/../public/svgs/icon/profileImgBtn.svg'

export default function FirstForm() {
  const [profileImg, setProfileImg] = useState<boolean>(false)
  const {
    favoriteCategory,
    nickname,
    userId,
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

  const duplicationCheckNick = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/duplication-check/nick?inputParams=${nickname}`,
    )

    const data = await res.json()
    if (data.status === 200) {
      setIsValidNick(true)
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  const duplicationCheckId = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/users/duplication-check/id?inputParams=${userId}`,
    )

    const data = await res.json()
    if (data.status === 200) {
      setIsValidId(true)
    }
    // eslint-disable-next-line no-alert
    return alert(data.message)
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
          <span className="flex relative w-full h-full">
            <label
              htmlFor="관심 카테고리"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              관심 카테고리
            </label>
            <select
              id="관심 카테고리"
              value={favoriteCategory}
              onChange={handleFavoriteCategory}
              className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm"
            >
              <option value="" className="">
                관심 카테고리를 선택해주세요.
              </option>
              {favoriteCategoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
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
              <button
                id="닉네임 중복확인"
                type="button"
                onClick={duplicationCheckNick}
              >
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
              <button
                id="아이디 중복확인"
                type="button"
                onClick={duplicationCheckId}
              >
                중복확인
              </button>
            </div>
          </span>
        </div>
        <div
          aria-label="다음"
          className="w-full h-14 rounded-3xl mt-3 bg-sky-600"
        >
          <button type="button" className="w-full h-full text-white">
            Next
          </button>
        </div>
      </form>
    </>
  )
}
