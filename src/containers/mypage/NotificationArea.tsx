'use client'

import { useState } from 'react'
import ToggleSwitch from '@/components/Btn/TogleSwitch'

export default function NotificationArea() {
  const [isAppNotificationOn, setIsAppNotificationOn] = useState(false)
  const [isKakaoNotificationOn, setIsKakaoNotificationOn] = useState(false)

  return (
    <div className="mx-7 my-4 rounded-3xl bg-slate-100 px-2 py-2">
      <div className="flex justify-center">
        <span className="text-xs pl-4">PUSH알림 설정</span>
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="flex justify-between items-center ">
        <div className="flex my-3 ml-3 text-black-500 hover:underline">
          앱 알림
        </div>
        <ToggleSwitch
          isOn={isAppNotificationOn}
          handleToggle={() => setIsAppNotificationOn(!isAppNotificationOn)}
        />
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="flex justify-between items-center ">
        <div className="flex my-3 ml-3 text-black-500 hover:underline">
          카카오 알림
        </div>
        <ToggleSwitch
          isOn={isKakaoNotificationOn}
          handleToggle={() => setIsKakaoNotificationOn(!isKakaoNotificationOn)}
        />
      </div>
    </div>
  )
}
