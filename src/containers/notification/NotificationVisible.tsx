'use client'

import { useState } from 'react'
import Notification from '@/public/svgs/header/notification.svg'
import NotificationModal from './NotificationModal'

export default function NotificationVisible() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div
        className="content-center pr-[10px]"
        role="none"
        onClick={() => setVisible(true)}
      >
        <Notification />
      </div>
      {visible && <NotificationModal setVisible={setVisible} />}
    </>
  )
}
