'use client'

import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Pagination from '@/components/Pagination'
import { useToastStore } from '@/components/Toast/store'
import { useHeaderModalState } from '@/components/layout/store'
import NotificationContent from '@/containers/main/notification/NotificationContent'
import { NotiData, NotiListType } from '@/types/notiApiDataType'
import {
  deleteNotification,
  getNotification,
} from '@/utils/notificationApiActions'

export default function NotificationModal() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [data, setData] = useState<NotiData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    notificationList: [],
    isLast: false,
  })
  const [notiList, setNotiList] = useState<NotiListType[]>([])
  const { setNoti } = useHeaderModalState()
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
        setData(res.result)
        setNotiList(res.result.notificationList)
      }
    }

    getFunction()
  }, [currentPage, notiList.length])

  return (
    <div className="w-screen h-screen z-30 top-0 left-0 fixed bg-white">
      <div className="w-full h-full overflow-scroll">
        <FaArrowLeft
          onClick={() => setNoti(false)}
          className="absolute top-5 left-5 text-xl"
        />
        <h1 className="h-[60px] leading-[60px] text-center text-[23px] tracking-[-0.1rem] font-semibold">
          알림
        </h1>
        <div className="my-[20px] mx-[20px]">
          {!notiList.length ? (
            <div className="text-center">알림이 없습니다.</div>
          ) : (
            <>
              {notiList.map((item) => (
                <NotificationContent
                  key={item.id}
                  item={item}
                  deleteNoti={deleteNoti}
                />
              ))}
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={data.maxPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
