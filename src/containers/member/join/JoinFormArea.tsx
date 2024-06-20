'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import EasyForm from '@/containers/member/join/EasyForm'
import FullForm from '@/containers/member/join/FullForm'
import JoinSuccessModal from '@/containers/member/join/JoinSuccessModal'
import {
  useErrorStore,
  useJoinStore,
  useModalStore,
  usePageStore,
} from '@/containers/member/join/store'

export default function JoinForm() {
  const params = useSearchParams()
  const { resetJoinState } = useJoinStore()
  const { resetErrorState } = useErrorStore()
  const { setCurrentIdx } = usePageStore()
  const { isOpen } = useModalStore()

  useEffect(() => {
    resetJoinState()
    resetErrorState()
    setCurrentIdx(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-[calc(100%-80px)]">
        {params ? <EasyForm /> : <FullForm />}
      </form>
      {isOpen && <JoinSuccessModal />}
    </div>
  )
}
