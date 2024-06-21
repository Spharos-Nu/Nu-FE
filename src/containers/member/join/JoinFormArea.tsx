'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import EasyForm from '@/containers/member/join/EasyForm'
import FullForm from '@/containers/member/join/FullForm'
import JoinSuccessModal from '@/containers/member/join/JoinSuccessModal'
import {
  useErrorStore,
  useJoinStore,
  usePageStore,
} from '@/containers/member/join/store'

export default function JoinFormArea() {
  const provider = useSearchParams().get('provider')

  const { resetJoinState } = useJoinStore()
  const { resetErrorState } = useErrorStore()
  const { setCurrentIdx } = usePageStore()

  useEffect(() => {
    resetJoinState()
    resetErrorState()
    setCurrentIdx(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-[calc(100%-80px)]">
        {provider ? <EasyForm /> : <FullForm />}
      </form>
      <JoinSuccessModal />
    </div>
  )
}
