import FirstBtnArea from '@/containers/member/join/FirstBtnArea'
import IdInput from '@/containers/member/join/IdInput'
import NicknameInput from '@/containers/member/join/NicknameInput'
import PhoneVerification from '@/containers/member/join/PhoneVerification'
import ProfileImgArea from '@/containers/member/join/ProfileImgArea'
import Pwd2Input from '@/containers/member/join/Pwd2Input'
import PwdInput from '@/containers/member/join/PwdInput'
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
import { uploadProfileImage } from '@/utils/uploadImage'

export default function FullForm() {
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
  const { currentIdx } = usePageStore()
  const { setCurrentFocus } = useFocusStore()
  const { setIsOpen } = useModalStore()

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

  // eslint-disable-next-line consistent-return
  const handleJoin = async () => {
    const isValidated = secondValidCheck()

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

  return (
    <div className="w-full flex-shrink-0">
      {currentIdx === 0 ? (
        <>
          <ProfileImgArea />
          <SelectCategory />
          <IdInput />
          <NicknameInput />
          <FirstBtnArea />
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <DuckOne />
          </div>
          <PwdInput />
          <Pwd2Input />
          <PhoneVerification />
          <SecondBtnArea onFormValidate={handleJoin} />
        </>
      )}
    </div>
  )
}
