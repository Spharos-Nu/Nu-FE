'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io'
import { useHeaderModalState } from '@/components/layout/store'
import CategorySelection from '@/containers/category/CategorySelection'
import NotificationModal from '@/containers/notification/NotificationModal'
import SearchModal from '@/containers/search/SearchModal'
import Logo from '@/public/svgs/header/logo.svg'

export default function Header() {
  const pathname = usePathname()
  const { noti, setNoti, search, setSearch } = useHeaderModalState()

  if (pathname.startsWith(`/goods/`)) return null

  return (
    <header className="static my-[15px] flex justify-between leading-[50px]">
      <div className="flex h-[50px]">
        <h1 className="pl-[20px]">
          <Link href="/">
            <Logo />
          </Link>
        </h1>
        <CategorySelection />
      </div>
      <div className="flex justify-between">
        <IoMdNotificationsOutline
          onClick={() => setNoti(true)}
          className="text-sky-600"
        />
        <IoMdSearch onClick={() => setSearch(true)} className="text-sky-600" />
      </div>
      {noti && <NotificationModal />}
      {search && <SearchModal />}
    </header>
  )
}
