'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiSearch, FiBell } from 'react-icons/fi'
import { SlArrowRight } from 'react-icons/sl'
import { useHeaderModalState } from '@/components/layout/store'
import Category from '@/containers/category/Category'
import SearchModal from '@/containers/main/search/SearchModal'
import Logo from '@/public/svgs/header/logo.svg'
// import { getNotiCount } from '@/utils/notificationApiActions'

export default function Header() {
  // const [num, setNum] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)
  const pathname = usePathname()
  const { search, setSearch } = useHeaderModalState()

  // useEffect(() => {
  //   const getCount = async () => {
  //     const data = await getNotiCount()

  //     if (data.status === 200) {
  //       setNum(data.result)
  //     }
  //   }

  //   getCount()
  // }, [])

  if (pathname.startsWith(`/goods/`) || pathname === '/') return null

  return (
    <header className="static mt-5 flex justify-between leading-[50px]">
      <button
        type="button"
        aria-label="logo-button"
        className="flex justify-center items-cente pl-5"
        onClick={() => setVisible(true)}
      >
        <h1 className="flex hover:bg-gray-200">
          <Logo />
        </h1>
        <div className="flex flex-col items-center w-10 h-full justify-center gap-1 pl-1 pr-1 hover:bg-gray-200">
          <SlArrowRight className="text-xl text-gray-500" />
          <div className="leading-3 text-[10px] text-gray-400">more</div>
        </div>
      </button>
      {visible && <Category setVisible={setVisible} />}
      <div className="flex justify-center items-center mr-3">
        <Link
          href="/notification"
          className="hover:bg-gray-200 relative w-full h-full flex justify-center items-center"
        >
          <FiBell className="text-sky-600 text-3xl" />
          {/* {num > 0 && (
            <span className="flex justify-center items-center rounded-full absolute top-3 right-[10px] w-[18px] h-[18px] z-10 bg-red-500 text-center text-white text-xs">
              {num}
            </span>
          )} */}
        </Link>
        <FiSearch
          onClick={() => setSearch(true)}
          className="hover:bg-gray-200 w-full h-full text-sky-600 text-4xl mx-3"
        />
      </div>
      {search && <SearchModal />}
    </header>
  )
}
