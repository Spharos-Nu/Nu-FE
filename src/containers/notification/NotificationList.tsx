'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Pagination from '@/components/Pagination'
import { useToastStore } from '@/components/Toast/store'
import NotificationContent from '@/containers/notification/NotificationContent'
import { ApiResponse } from '@/types/apiResponseType'
import { NotiData, NotiListType } from '@/types/notiApiDataType'
import {
  deleteNotification,
  getNotification,
} from '@/utils/notificationApiActions'

export default function NotificationModal({
  data,
}: {
  data: ApiResponse<NotiData>
}) {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [notiList, setNotiList] = useState<NotiListType[]>([])
  const router = useRouter()
  const { showToast } = useToastStore()

  // eslint-disable-next-line consistent-return
  const deleteNoti = async (id: number) => {
    const value = { notificationId: [id.toString()] }
    const notiDelete = await deleteNotification(value)
    setNotiList(notiList.filter((noti) => noti.id !== id))

    if (notiDelete.status !== 200) {
      return showToast(notiDelete.message)
    }

    showToast('알림이 삭제되었습니다.')
  }

  useEffect(() => {
    const getFunction = async () => {
      const res = await getNotification(currentPage)
      if (res.status === 200) {
        setNotiList(res.result.notificationList)
      }
    }

    getFunction()
  }, [currentPage, notiList.length])

  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-full">
        <FaArrowLeft
          onClick={() => router.back()}
          className="absolute top-5 left-5 text-xl"
        />
        <h1 className="h-[60px] leading-[60px] text-center text-[23px] tracking-[-0.1rem] font-semibold">
          알림
        </h1>
        {!notiList.length ? (
          <div className="text-center">알림이 없습니다.</div>
        ) : (
          <div className="my-[20px] mx-[20px] overflow-scroll">
            {notiList.map((item) => (
              <NotificationContent
                key={item.id}
                item={item}
                deleteNoti={deleteNoti}
              />
            ))}
            {data.result.totalCount > 10 && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={data.result.maxPage}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
