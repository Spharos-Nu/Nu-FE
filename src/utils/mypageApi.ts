import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { ApiResponse } from '@/types/apiResponseType'
import { ProfileData } from '@/types/mypageDataType'

export const getProfile = async (): Promise<ApiResponse<ProfileData>> => {
  const session = await getServerSession(options)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
    headers: { Authorization: session?.user.accessToken },
  })

  const data: ApiResponse<ProfileData> = await res.json()
  return data
}

// export const getMannerDuck = async (): Promise<ApiResponse<MannerDuckData>> => {
//   const session = await getServerSession(options)

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API}/v1/users/manner-duck`,
//     {
//       headers: { Authorization: session?.user.accessToken },
//     },
//   )

//   const data: ApiResponse<MannerDuckData> = await res.json()
//   return data
// }

// export const getDuckPoint = async (): Promise<ApiResponse<null>> => {
//   const session = await getServerSession(options)

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API}/v1/users/duckpoint`,
//     {
//       headers: { Authorization: session?.user.accessToken },
//     },
//   )

//   const data: ApiResponse<null> = await res.json()
//   return data
// }
