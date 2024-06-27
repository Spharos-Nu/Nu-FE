'use client'

import { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import Category from '@/containers/category/Category'

export default function CategorySelection() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <SlArrowDown
        onClick={() => setVisible(true)}
        className="w-[25px] h-[25px] pl-[10px] content-center items-center text-sky-600"
      />
      {visible && <Category setVisible={setVisible} />}
    </>
  )
}
