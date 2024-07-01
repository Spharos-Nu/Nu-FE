import Image from 'next/image'
import { useRef, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { useBasicAlertStore } from '@/components/Modal/store'
import { useJoinStore } from '@/containers/member/join/store'
import ProfileImgBtn from '@/public/svgs/icon/profileImgBtn.svg'

export default function ProfileImgArea() {
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const { setProfileImage } = useJoinStore()
  const { showAlert } = useBasicAlertStore()

  const handleButtonClick = () => {
    imageInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setProfileImage(selectedFile)
      } else {
        showAlert('유효하지 않은 파일 형식입니다.')
      }
    }
  }

  return (
    <div className="flex justify-center items-center my-5">
      <div
        className={`flex w-32 h-32 relative rounded-full ${previewUrl && 'border-[3px] border-sky-600'}`}
      >
        {previewUrl ? (
          <Image
            className="rounded-full"
            src={previewUrl}
            alt="사진 프리뷰"
            onClick={handleButtonClick}
            width={128}
            height={128}
          />
        ) : (
          <Image
            className="rounded-full"
            src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicProfileDuck.png`}
            alt="사진 프리뷰"
            onClick={handleButtonClick}
            width={128}
            height={128}
          />
        )}
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          ref={imageInputRef}
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
            setPreviewUrl('')
            setProfileImage(null)
          }}
        />
      </div>
    </div>
  )
}
