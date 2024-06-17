'use client'

import { useEffect } from 'react'
import FirstBtnArea from '@/containers/member/join/FirstBtnArea'
import IdInput from '@/containers/member/join/IdInput'
import JoinSuccessModal from '@/containers/member/join/JoinSuccessModal'
import NicknameInput from '@/containers/member/join/NicknameInput'
import PhoneVerification from '@/containers/member/join/PhoneVerification'
import ProfileImgArea from '@/containers/member/join/ProfileImgArea'
import Pw2Input from '@/containers/member/join/Pwd2Input'
import PwInput from '@/containers/member/join/PwdInput'
import SecondBtnArea from '@/containers/member/join/SecondBtnArea'
import SelectCategory from '@/containers/member/join/SelectCategory'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  useModalStore,
  usePageStore,
} from '@/containers/member/join/store'
import DuckOne from '@/public/svgs/duck/duckOne.svg'
import { join } from '@/utils/authApiActions'
import { pwdValidCheck } from '@/utils/joinValidateCheck'
import { uploadImage } from '@/utils/uploadImage'

export default function JoinForm() {
  const {
    profileImage,
    favoriteCategory,
    nickname,
    userId,
    password,
    password2,
    phoneNumber,
    isVerified,
    resetJoinState,
  } = useJoinStore()
  const {
    setNotValidPassword,
    setNotEqualPassword,
    setNotValidPhone,
    setNotVerified,
    resetErrorState,
  } = useErrorStore()
  const { currentIdx, setCurrentIdx } = usePageStore()
  const { setCurrentFocus } = useFocusStore()
  const { isOpen, setIsOpen } = useModalStore()

  const secondValidCheck = () => {
    if (!password) {
      setNotValidPassword(true)
      setCurrentFocus('password')
      return false
    }
    if (!pwdValidCheck) {
      setNotValidPassword(true)
      setCurrentFocus('password')
      return false
    }
    if (!password2) {
      setNotEqualPassword(true)
      setCurrentFocus('password2')
      return false
    }
    if (password !== password2) {
      setNotEqualPassword(true)
      setCurrentFocus('password2')
      return false
    }
    if (!phoneNumber) {
      setNotValidPhone(1)
      setCurrentFocus('phoneNumber')
      return false
    }
    if (!isVerified) {
      setNotVerified(true)
      setCurrentFocus('phoneNumber')
      return false
    }

    return true
  }

  const handleJoin = async () => {
    const isValidated = secondValidCheck()

    if (!isValidated) {
      return null
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

    if (data.status === 200) {
      return setIsOpen(true)
    }

    resetErrorState()
    return resetJoinState()
  }

  useEffect(() => {
    setCurrentIdx(currentIdx)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx])

  useEffect(() => {
    resetJoinState()
    resetErrorState()
    setCurrentIdx(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-[calc(100%-80px)]">
        {currentIdx === 0 ? (
          <div className="w-full flex-shrink-0">
            <ProfileImgArea />
            <SelectCategory />
            <NicknameInput />
            <IdInput />
            <FirstBtnArea />
          </div>
        ) : (
          <div className="w-full flex-shrink-0">
            <div className="flex justify-center items-center">
              <DuckOne />
            </div>
            <PwInput />
            <Pw2Input />
            <PhoneVerification />
            <SecondBtnArea onFormValidate={handleJoin} />
          </div>
        )}
      </form>
      {isOpen && <JoinSuccessModal />}
    </div>
  )
}
