'use client'

import Link from 'next/link'
import { IoShareSocialOutline } from 'react-icons/io5'
import BackBtn from '@/components/Btn/BackBtn'
import { useToastStore } from '@/components/Toast/store'
import { useNavStore } from '@/components/layout/store'
import Home from '@/public/svgs/icon/homeColor.svg'

export default function DetailHeader() {
  const { showToast } = useToastStore()
  const { currentPage } = useNavStore()

  const copyUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    showToast('URL이 복사 되었습니다.')
  }

  return (
    <header className="relative flex h-[60px] text-[#2B74B9]">
      <BackBtn />
      <div className="flex absolute top-1/2 right-[15px] -translate-y-1/2">
        <Link href={`/${currentPage}`} className="pr-[13px]">
          <Home />
        </Link>
        <IoShareSocialOutline
          className="w-[29px] h-[29px] text-[#2B74B9]"
          onClick={() => copyUrl()}
        />
      </div>
    </header>
  )
}
