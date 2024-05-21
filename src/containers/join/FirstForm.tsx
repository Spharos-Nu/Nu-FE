import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { uploadImage } from '@/utils/uploadImage'
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
  const [profileImg, setProfileImg] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const {
    favoriteCategory,
    nickname,
    isValidNick,
    userId,
    isValidId,
    setProfileImgUrl,
  } = useFirstStore()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()

      if (
        fileExtension === 'jpg' ||
        fileExtension === 'jpeg' ||
        fileExtension === 'png'
      ) {
        const reader = new FileReader()
        reader.onload = () => {
          setPreviewUrl(reader.result as string)
        }
        reader.readAsDataURL(selectedFile)
      } else {
        setProfileImg(null)
        setPreviewUrl(null)
      }
    }
  }

  const handleButtonClick = () => {
    document.getElementById('프로필 이미지')?.click()
  }

  const checkData = async () => {
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

    if (profileImg) {
      setProfileImgUrl(await uploadImage(profileImg, profileImg.name))
    }

    return onSwipeLeft()
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className={`flex w-32 h-32 relative rounded-full ${previewUrl && 'border-[3px] border-sky-600'}`}
        >
          {previewUrl ? (
            <Image
              className="max-w-32 max-h-32 rounded-full"
              src={previewUrl}
              alt="사진 프리뷰"
              onClick={handleButtonClick}
              width={128}
              height={128}
            />
          ) : (
            <BasicProfileDuck
              className="w-full max-w-32 rounded-full"
              onClick={handleButtonClick}
            />
          )}
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            id="프로필 이미지"
            onChange={handleFileChange}
            className="overflow-hidden absolute w-px h-px text-[0px]"
          />
          <ProfileImgBtn
            className="absolute bottom-0 right-0 z-10"
            onClick={handleButtonClick}
          />
          <MdCancel
            className="w-[34px] h-[34px] pr-0 absolute top-0 right-[-5px] z-10 text-sky-600 rounded-full bg-white"
            onClick={() => {
              setProfileImg(null)
              setPreviewUrl(null)
            }}
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
