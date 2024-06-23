'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'

export const deleteNotification = async (
  id: number,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/notification`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: session?.user.accessToken,
    },
    body: JSON.stringify({ id }),
  })

  const data: ApiResponse<null> = await res.json()
  return data
}
