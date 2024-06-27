import { ApiResponse } from '@/types/apiResponseType'

export const duplicationCheckNick = async (
  nickname: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users-n/duplication-check?inputParams=${nickname}`,
  )

  const data = await res.json()
  return data
}

export const duplicationCheckId = async (
  id: string,
): Promise<ApiResponse<null>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/auth-n/duplication-check?inputParams=${id}`,
  )

  const data = await res.json()
  return data
}

export const nickValidCheck = (nickname: string) => {
  const regex = /^[a-zA-Z가-힣0-9]{2,15}$/
  if (!regex.test(nickname)) {
    return false
  }
  return true
}

export const idValidCheck = (id: string) => {
  const regex = /^[a-zA-Z0-9]{6,15}$/
  if (!regex.test(id)) {
    return false
  }
  return true
}

export const pwdValidCheck = (pwd: string) => {
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,20}$/

  if (!regex.test(pwd)) {
    return false
  }
  return true
}

export const phoneValidCheck = (phoneNumber: string) => {
  const regex = /^(010|011|017|018|019)\d{7,8}$/
  if (!regex.test(phoneNumber)) {
    return false
  }
  return true
}
