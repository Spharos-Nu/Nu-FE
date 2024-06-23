'use client'

import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHeaderModalState } from '@/components/layout/store'
import NotificationContent from '@/containers/notification/NotificationContent'
import { NotiData } from '@/types/notiApiDataType'
import { getNotification } from '@/utils/notificationApiActions'

export default function NotificationModal() {
  const [data, setData] = useState<NotiData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    notificationList: [],
    isLast: false,
  })
  const notiList = data.notificationList
  const { setNoti } = useHeaderModalState()

  useEffect(() => {
    const getFunction = async () => {
      const res = await getNotification(0)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    getFunction()
  }, [])

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <FaArrowLeft
        onClick={() => setNoti(false)}
        className="absolute top-5 left-5 text-xl"
      />
      <h1 className="h-[60px] leading-[60px] text-center text-[23px] tracking-[-0.1rem] font-semibold">
        알림
      </h1>
      <div className="my-[20px] mx-[20px]">
        {notiList.length > 0 ? (
          notiList.map((item) => (
            <NotificationContent key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center">알림이 없습니다.</div>
        )}
      </div>
    </div>
  )
}
