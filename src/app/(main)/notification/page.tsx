import NotificationList from '@/containers/main/notification/NotificationList'
import { getNotification } from '@/utils/notificationApiActions'

export default async function Notification() {
  const data = await getNotification(0)

  return <NotificationList data={data} />
}
