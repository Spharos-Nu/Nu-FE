'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ConfirmModal from '@/components/Chat/ConfirmModal'

function Button({
  children,
  onClick,
  className,
  style,
}: {
  children: React.ReactNode
  onClick: () => void
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`px-4 py-2 text-white transition-colors ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}

function GoToReviewBtn({
  goodsCode,
  receiverUuid,
}: {
  goodsCode: string
  receiverUuid: string
}) {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleConfirmTransaction = () => {
    // 거래 확정 로직
    router.push(`/review?goodsCode=${goodsCode}&receiverUuid=${receiverUuid}`)
    setShowModal(false)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-gray-400 hover:bg-blue-600"
      >
        거래가 완료되셨나요? 확정하러 가기
      </Button>
      {showModal && (
        <ConfirmModal onClose={handleCloseModal}>
          <div className="flex flex-col gap-3">
            <div className="text-center text-[15px]">
              <h3>정말 거래를 확정하시겠어요?</h3>
              <p>확정 시, 거래 상태가 확정되고 리뷰 작성 페이지로 갑니다.</p>
            </div>
            <div className="flex justify-center gap-3">
              <Button
                className="w-40 h-10 bg-sky-500 hover:bg-sky-700 rounded-md text-[14px]"
                onClick={handleCloseModal}
              >
                아직 거래중이에요
              </Button>
              <Button
                className="w-40 h-10 bg-green-500 hover:bg-green-700 rounded-md text-[14px]"
                onClick={handleConfirmTransaction}
              >
                거래가 잘 끝났어요
              </Button>
            </div>
          </div>
        </ConfirmModal>
      )}
    </>
  )
}

export default GoToReviewBtn
