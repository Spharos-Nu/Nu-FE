'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { NotiData } from '@/types/notiApiDataType'

export const getNotiCount = async (): Promise<ApiResponse<number>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/notification/unread`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<number> = await res.json()
  return data
}

export const getNotification = async (
  page: number,
): Promise<ApiResponse<NotiData>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/notification?page=${page}`,
    {
      headers: { Authorization: session?.user.accessToken },
    },
  )

  const data: ApiResponse<NotiData> = await res.json()
  return data
}

export const deleteNotification = async (
  notificationId: object,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/notification`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify(notificationId),
  })

  const data: ApiResponse<null> = await res.json()
  return data
}

export const saveDeviceToken = async (
  token: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/notification/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        uuid: session?.user.uuid,
        token,
      }),
    },
  )

  const data = await res.json()
  return data
}
