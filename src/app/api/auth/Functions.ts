interface DataResponse {
  status: number
  result: unknown
  message: string
}

export const join = async (
  profileImage: string,
  favoriteCategory: string,
  nickname: string,
  userId: string,
  password: string,
  phoneNumber: string,
): Promise<DataResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profileImage,
      favoriteCategory,
      nickname,
      userId,
      password,
      phoneNumber,
    }),
  })

  const data = await res.json()
  return data
}

export const duplicationCheckNick = async (
  nickname: string,
): Promise<DataResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duplication-check/nick?inputParams=${nickname}`,
  )

  const data = await res.json()
  return data
}

export const duplicationCheckId = async (id: string): Promise<DataResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/duplication-check/id?inputParams=${id}`,
  )

  const data = await res.json()
  return data
}

export const verification = async (
  phoneNumber: string,
  verificationNumber: string,
): Promise<DataResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/verification`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        verificationNumber,
      }),
    },
  )

  const data = await res.json()
  return data
}

export const verificationConfirm = async (
  phoneNumber: string,
  verificationNumber: string,
): Promise<DataResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/users/verification/confirm`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber,
        verificationNumber,
      }),
    },
  )

  const data = await res.json()
  return data
}
