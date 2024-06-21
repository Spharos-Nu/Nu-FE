'use client'

import { useSearchParams } from 'next/navigation'
import JoinSuccessModal from '@/containers/member/join/JoinSuccessModal'
import { useModalStore } from '@/containers/member/join/store'
import EasyForm from './EasyForm'
import FullForm from './FullForm'

export default function JoinFormArea() {
  const provider = useSearchParams().get('provider')

  const { isOpen } = useModalStore()

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-[calc(100%-80px)]">
        {provider ? <EasyForm /> : <FullForm />}
      </form>
      {isOpen && <JoinSuccessModal />}
    </div>
  )
}
