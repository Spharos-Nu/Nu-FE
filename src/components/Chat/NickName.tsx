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
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/v1/users-n/${userUuid}`,
      )
      const nickNameData = await response.json()
      // console.log('닉네임을 받아오는데 성공', nickNameData)
      setData(nickNameData.result)
    } catch (error) {
      // console.error('닉네임 가져오기 에러:', error)
    }
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
