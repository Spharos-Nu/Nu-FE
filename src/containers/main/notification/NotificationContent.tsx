import { useRouter } from 'next/navigation'
import { PiTrashLight } from 'react-icons/pi'
import { NotiListType } from '@/types/notiApiDataType'

export default function NotificationContent({
  item,
  deleteNoti,
}: {
  item: NotiListType
  deleteNoti: (id: number) => void
}) {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push(item.link)
  }

  return (
    <div className="relative bg-slate-100 my-[20px] px-[20px] py-[15px] rounded-3xl">
      <PiTrashLight
        className="absolute w-5 h-5 right-4 bottom-4"
        onClick={() => deleteNoti(item.id)}
      />
      <button
        type="button"
        className="w-full h-full text-left"
        onClick={handleButtonClick}
        aria-label="페이지 이동 버튼"
      >
        <p className="text-[17px] leading-[20px]">{item.title}</p>
        <p className="text-[14px] leading-[20px] mt-[10px]">{item.content}</p>
        <p className="text-[14px] leading-[10px] mt-[10px]">{item.createdAt}</p>
      </button>
    </div>
  )
}
