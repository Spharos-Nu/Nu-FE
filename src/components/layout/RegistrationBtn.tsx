'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoPlus } from 'react-icons/go'

export default function RegistrationBtn() {
  const pathname = usePathname()

  if (pathname.startsWith(`/goods/`) || pathname === '/') return null

  return (
    <Link
      href="/registration"
      className="hover:bg-blue-700 bg-sky-600 flex fixed z-20 rounded-full right-[20px] bottom-[110px] w-[50px] h-[50px] content-center shadow-[0px_5px_5px_2px_rgba(0,0,0,0.07)]"
    >
      <GoPlus className="w-[35px] h-[35px] m-auto flex justify-center items-center text-white" />
    </Link>
  )
}
