'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FirstBtnArea from '@/containers/(member)/join/FirstBtnArea'
import IdInput from '@/containers/(member)/join/IdInput'
import NicknameInput from '@/containers/(member)/join/NicknameInput'
import PhoneVerification from '@/containers/(member)/join/PhoneVerification'
import ProfileImgArea from '@/containers/(member)/join/ProfileImgArea'
import Pw2Input from '@/containers/(member)/join/Pw2Input'
import PwInput from '@/containers/(member)/join/PwInput'
import SecondBtnArea from '@/containers/(member)/join/SecondBtnArea'
import SelectCategory from '@/containers/(member)/join/SelectCategory'
import { useFirstStore, useSecondStore } from '@/containers/(member)/join/store'
import { join } from '@/utils/memberApi'
import { uploadImage } from '@/utils/uploadImage'
import DuckOne from '@/../public/svgs/duck/duckone.svg'

export default function JoinForm() {
  const router = useRouter()
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const { profileImage, favoriteCategory, nickname, userId, resetFirstState } =
    useFirstStore()
  const { password, password2, phoneNumber, isValidated, resetSecondState } =
    useSecondStore()

  const handleSwipeLeft = () => {
    setCurrentIdx(1)
  }

  const handleSwipeRight = () => {
    setCurrentIdx(0)
  }

  const handleJoin = async () => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,20}$/

    if (!password) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호를 입력해주세요.')
    }
    if (!regex.test(password)) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호의 형식이 올바르지 않습니다.')
    }
    if (!password2) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호를 확인해주세요.')
    }
    if (password !== password2) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호가 일치하지 않습니다.')
    }
    if (!phoneNumber) {
      // eslint-disable-next-line no-alert
      return alert('핸드폰 번호를 입력해주세요.')
    }
    if (!isValidated) {
      // eslint-disable-next-line no-alert
      return alert('휴대폰 인증이 필요합니다.')
    }

    const profileImgUrl = await uploadImage(profileImage)

    const data = await join(
      profileImgUrl,
      favoriteCategory,
      nickname,
      userId,
      password,
      phoneNumber,
    )

    resetFirstState()
    resetSecondState()

    if (data.status === 201) {
      // Todo: 모달 달아서, 모달 닫히면 router.push되도록
      router.push('/login')
    }

    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  return (
    <div className="w-full h-full flex">
      {currentIdx === 0 ? (
        <div className="w-full flex-shrink-0">
          <ProfileImgArea />
          <form className="mx-10 mt-8">
            <SelectCategory />
            <NicknameInput />
            <IdInput />
            <FirstBtnArea onSwipeLeft={handleSwipeLeft} />
          </form>
        </div>
      ) : (
        <div className="w-full flex-shrink-0">
          <div className="flex justify-center items-center">
            <DuckOne />
          </div>
          <form className="mx-10 mt-8">
            <PwInput />
            <Pw2Input />
            <PhoneVerification />
            <SecondBtnArea
              onSwipeRight={handleSwipeRight}
              onJoin={handleJoin}
            />
          </form>
        </div>
      )}
    </div>
  )
}
