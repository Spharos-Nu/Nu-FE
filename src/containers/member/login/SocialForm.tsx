'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useToastStore } from '@/components/Toast/store'
import LoginContour from '@/public/svgs/loginContour.svg'
import { poppins } from '@/styles/fonts'

export default function SocialForm() {
  const params = useSearchParams().get('callbackUrl') || '/'
  const kakaoLogin = () => {
    signIn('kakao', {
      redirect: true,
      callbackUrl: params,
    })
  }

  const { showToast } = useToastStore()

  return (
    <div
      className={`${poppins.className} mt-8 mx-10 flex flex-wrap justify-center`}
    >
      <div className="flex items-center">
        <span className="inline-block">
          <LoginContour className="scale-x-[-1]" />
        </span>
        <span className="text-slate-500 mx-3 text-xs inline-block">
          Or continue with
        </span>
        <span className="inline-block">
          <LoginContour />
        </span>
      </div>
      <div className="mt-5 w-full flex justify-center items-center space-x-7">
        <button type="button" onClick={kakaoLogin}>
          <Image
            src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/kakaoLoginBtn.png`}
            alt="카카오 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            카카오
          </span>
        </button>
        <button type="button" onClick={() => showToast('준비 중입니다.')}>
          <Image
            src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/naverLoginBtn.png`}
            alt="네이버 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            네이버
          </span>
        </button>
        <button type="button" onClick={() => showToast('준비 중입니다.')}>
          <Image
            src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/googleLoginBtn.png`}
            alt="구글 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            구글
          </span>
        </button>
        <button type="button" onClick={() => showToast('준비 중입니다.')}>
          <Image
            src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/appleLoginBtn.png`}
            alt="애플 로그인"
            width={55}
            height={55}
          />
          <span className="overflow-hidden absolute w-px h-px text-[0px]">
            애플
          </span>
        </button>
      </div>
    </div>
  )
}
