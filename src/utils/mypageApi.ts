import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { ProfileData } from '@/types/mypageDataType'

export const getProfile = async (): Promise<ApiResponse<ProfileData>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_MEMBER}/v1/user`, {
    headers: { Authorization: session?.user.accessToken },
  })

  const data: ApiResponse<ProfileData> = await res.json()
  return data
}
