'use server'

import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'

export const registerComplainGoods = async (
  goodsCode: string,
  complainReason: string,
  complainContent: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc/reports/goods/${goodsCode}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        complainReason,
        complainContent,
      }),
    },
  )

  const data = await res.json()
  return data
}

export const registerComplainuUsers = async (
  reportedUuid: string,
  complainReason: string,
  complainContent: string,
): Promise<ApiResponse<null>> => {
  const session = await getServerSession(options)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/etc/reports/users/${reportedUuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        complainReason,
        complainContent,
      }),
    },
  )

  const data = await res.json()
  return data
}
