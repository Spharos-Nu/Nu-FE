import { useRouter } from 'next/navigation'
import { PiTrashLight } from 'react-icons/pi'
import { NotiListType } from '@/types/notiApiDataType'
import { deleteNotification } from '@/utils/notificationApiActions'

export default function NotificationContent({ item }: { item: NotiListType }) {
  const router = useRouter()

  // eslint-disable-next-line consistent-return
  const deleteNoti = async () => {
    const data = await deleteNotification(item.id)

    if (data.status !== 200) {
      return null
    }

    router.refresh()
  }

  return (
    <div className="bg-slate-100 my-[15px] px-[20px] py-[15px] rounded-3xl h-[80px]">
      <button
        type="button"
        className="w-full h-full"
        // onClick={}
        aria-label="페이지 이동 버튼"
      />
      <p className="text-[17px] leading-[20px]">{item.content}</p>
      <div className="flex justify-between">
        <p className="text-[14px] leading-[40px]">{item.createdAt}</p>
        <PiTrashLight className="w-5 h-5" onClick={deleteNoti} />
      </div>
    </div>
  )
}
