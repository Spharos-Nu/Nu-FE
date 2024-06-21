import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import NicknameInput from '@/containers/member/join/NicknameInput'
import PhoneVerification from '@/containers/member/join/PhoneVerification'
import ProfileImgArea from '@/containers/member/join/ProfileImgArea'
import SelectCategory from '@/containers/member/join/SelectCategory'
import {
  useErrorStore,
  useFocusStore,
  useJoinStore,
  useModalStore,
} from '@/containers/member/join/store'
import { join } from '@/utils/authApiActions'
import { nickValidCheck } from '@/utils/joinValidateCheck'
import { uploadProfileImage } from '@/utils/uploadImage'

export default function EasyForm() {
  const router = useRouter()
  const id = useSearchParams().get('id')
  const provider = useSearchParams().get('provider')

  const {
    profileImage,
    favoriteCategory,
    nickname,
    userId,
    password,
    phoneNumber,

    isValidNick,
    isVerified,

    setUserId,
    setPassword,
    resetJoinState,
  } = useJoinStore()
  const {
    setCategoryNotSelected,
    setNotValidNick,
    setNotValidPhone,
    setNotVerified,
    resetErrorState,
  } = useErrorStore()
  const { setCurrentFocus } = useFocusStore()
  const { setIsOpen } = useModalStore()

  const validCheck = () => {
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
    if (!isValidNick) {
      if (!nickValidCheck) {
        setNotValidNick(1)
      } else {
        setNotValidNick(3)
      }

      setCurrentFocus('nickname')
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

  // eslint-disable-next-line consistent-return
  const handleJoin = async () => {
    const isValidated = validCheck()

    if (!isValidated) {
      return null
    }

    const profileImageUrl = await uploadProfileImage(profileImage)
    const data = await join(
      profileImageUrl,
      favoriteCategory,
      nickname,
      userId,
      password,
      phoneNumber,
    )

    if (data.status === 201) {
      setIsOpen(true)
    }

    resetJoinState()
    resetErrorState()
  }

  useEffect(() => {
    setUserId(id!)
    setPassword(provider!)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full flex-shrink-0">
      <ProfileImgArea />
      <SelectCategory />
      <NicknameInput />
      <PhoneVerification />
      <span className="w-full flex justify-between">
        <div
          aria-label="이전"
          className="w-[47%] h-14 rounded-3xl mt-3 border-[3px] border-sky-600"
        >
          <button
            id="이전"
            type="button"
            className="w-full h-full text-sky-600"
            onClick={() => router.back()}
          >
            Previous
          </button>
        </div>
        <div
          aria-label="회원가입"
          className="w-[47%] h-14 rounded-3xl mt-3 bg-sky-600"
        >
          <button
            id="회원가입"
            type="button"
            className="w-full h-full text-white"
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
      </span>
    </div>
  )
}
