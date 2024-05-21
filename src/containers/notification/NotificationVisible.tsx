'use client'

import { useState } from 'react'
import NotificationModal from './NotificationModal'
import Notification from '@/../public/svgs/header/notification.svg'

export default function NotificationVisible() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div
        className="content-center pr-[15px]"
        role="none"
        onClick={() => setVisible(true)}
      >
        <Notification />
      </div>
      {visible && <NotificationModal setVisible={setVisible} />}
    </>
  )
}
