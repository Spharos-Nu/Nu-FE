import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

type ConfirmModalProps = {
  onClose: () => void
  children: React.ReactNode
}

const ConfirmModal = ({ onClose, children }: ConfirmModalProps) => {
  // Escape 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // 모달 외부 클릭 시 닫기
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      onClose()
    }
  }
  // keyDown 이벤트 핸들러 추가
  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-2"
      onClick={handleClickOutside}
      onKeyDown={handleDivKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full sm:p-8 sm:rounded-2xl">
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default ConfirmModal
