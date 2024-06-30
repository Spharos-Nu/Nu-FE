'use client'

import { useEffect, useState } from 'react'

interface NickNameProps {
  userUuid: string
}

interface NicknameData {
  nickname: string
}

export default function NickName({ userUuid }: NickNameProps) {
  const [data, setData] = useState<NicknameData | null>(null)

  const fetchNickname = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/users-n/${userUuid}`,
    )
    const nickNameData = await response.json()
    setData(nickNameData.result)
  }

  useEffect(() => {
    if (userUuid && userUuid !== undefined) {
      fetchNickname()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUuid])

  return (
    <div>
      <span className="text-orange-500">{data?.nickname}</span>Duck
    </div>
  )
}
