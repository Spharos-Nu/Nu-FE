'use client'

import { useState } from 'react'
import BelowArrow from '@/../public/svgs/header/below_arrow.svg'
import Category from '@/containers/category/Category'

export default function CategorySelection() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        role="none"
        className="pl-[10px] content-center"
      >
        <BelowArrow />
      </div>
      {visible && <Category setVisible={setVisible} />}
    </>
  )
}
