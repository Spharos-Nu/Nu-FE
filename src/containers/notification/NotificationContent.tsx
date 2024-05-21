import { NotificationType } from '@/types/NotificationType'
import Trash from '@/../public/svgs/icon/trash.svg'

export default function NotificationContent({
  data,
}: {
  data: NotificationType
}) {
  // const deleteNotification = async () => {
  //   try {
  //     // delete notification
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="bg-[#f7f7f7] my-[15px] px-[20px] py-[15px] rounded-3xl h-[80px]">
      <p className="text-[17px] leading-[20px]">{data.content}</p>
      <div className="flex justify-between">
        <p className="text-[14px] leading-[40px]">{data.created_at}</p>
        <div className="content-center">
          <Trash />
        </div>
      </div>
    </div>
  )
}
