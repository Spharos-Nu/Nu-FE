'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io'
import { useHeaderModalState } from '@/components/layout/store'
import CategorySelection from '@/containers/category/CategorySelection'
import SearchModal from '@/containers/main/search/SearchModal'
import Logo from '@/public/svgs/header/logo.svg'
import { getNotiCount } from '@/utils/notificationApiActions'

export default function Header() {
  const [num, setNum] = useState<number>(0)
  const pathname = usePathname()
  const { search, setSearch } = useHeaderModalState()

  useEffect(() => {
    const getCount = async () => {
      const data = await getNotiCount()

      if (data.status === 200) {
        setNum(data.result)
      }
    }

    getCount()
  }, [])

  if (pathname.startsWith(`/goods/`) || pathname === '/') return null

  return (
    <header className="static my-[15px] flex justify-between leading-[50px]">
      <div className="flex justify-center items-center">
        <h1 className="pl-[20px]">
          <Link href="/">
            <Logo />
          </Link>
        </h1>
        <CategorySelection />
      </div>
      <div className="flex justify-center items-center mr-3">
        <Link
          href="/notification"
          className="relative w-full h-full flex justify-center items-center"
        >
          <IoMdNotificationsOutline className="text-sky-600 text-4xl mx-3" />
          {num > 0 && (
            <span className="flex justify-center items-center rounded-full absolute top-3 right-[10px] w-[18px] h-[18px] z-10 bg-red-500 text-center text-white text-xs">
              {num}
            </span>
          )}
        </Link>
        <IoMdSearch
          onClick={() => setSearch(true)}
          className="w-full h-full text-sky-600 text-4xl mx-3"
        />
      </div>
      {search && <SearchModal />}
    </header>
  )
}
