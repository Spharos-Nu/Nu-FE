'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { join } from '@/app/api/auth/functions'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import { useFirstStore, useSecondStore } from './store'

export default function JoinForm() {
  const router = useRouter()
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const { favoriteCategory, nickname, userId } = useFirstStore()
  const { password, password2, phoneNumber, isValidated } = useSecondStore()

  const handleSwipeLeft = () => {
    setCurrentIdx(1)
  }

  const handleSwipeRight = () => {
    setCurrentIdx(0)
  }

  const handleJoin = async () => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,20}$/

    if (!password) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호를 입력해주세요.')
    }
    if (!regex.test(password)) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호의 형식이 올바르지 않습니다.')
    }
    if (!password2) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호를 확인해주세요.')
    }
    if (password !== password2) {
      // eslint-disable-next-line no-alert
      return alert('비밀번호가 일치하지 않습니다.')
    }
    if (!phoneNumber) {
      // eslint-disable-next-line no-alert
      return alert('핸드폰 번호를 입력해주세요.')
    }
    if (!isValidated) {
      // eslint-disable-next-line no-alert
      return alert('휴대폰 인증이 필요합니다.')
    }

    const data = await join(
      favoriteCategory,
      nickname,
      userId,
      password,
      phoneNumber,
    )

    if (data.status === 200) {
      // Todo: 모달 달아서, 모달 닫히면 router.push되도록
      router.push('/login')
    }

    // eslint-disable-next-line no-alert
    return alert(data.message)
  }

  return (
    <div className="w-full h-full flex">
      {currentIdx === 0 ? (
        <div className="w-full flex-shrink-0">
          <FirstForm onSwipeLeft={handleSwipeLeft} />
        </div>
      ) : (
        <div className="w-full flex-shrink-0">
          <SecondForm onSwipeRight={handleSwipeRight} handleJoin={handleJoin} />
        </div>
      )}
    </div>
  )
}
