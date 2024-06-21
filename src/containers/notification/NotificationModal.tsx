'use client'

import { FaArrowLeft } from 'react-icons/fa'
import { useHeaderModalState } from '@/components/layout/store'
import notiData from '@/dummydata/notification.json'
import { NotificationType } from '@/types/headerType'
import NotificationContent from './NotificationContent'

export default function NotificationModal() {
  const data = notiData.noti_list
  const { setNoti } = useHeaderModalState()

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <FaArrowLeft onClick={() => setNoti(false)} />
      <h1 className="h-[60px] leading-[60px] text-center text-[23px] tracking-[-0.1rem] font-semibold">
        알림
      </h1>
      <div className="my-[20px] mx-[20px]">
        {data.length > 0 ? (
          data.map((item: NotificationType) => (
            <NotificationContent key={item.id} data={item} />
          ))
        ) : (
          <div className="text-center">알림이 없습니다.</div>
        )}
      </div>
    </div>
  )
}
