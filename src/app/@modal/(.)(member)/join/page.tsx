import JoinSuccessModal from '@/containers/member/join/JoinSuccessModal'
import ProstrateDuck from '@/public/svgs/duck/prostrateDuck.svg'
import Modal from './modal'

export default function Page() {
  return (
    <Modal>
      <ProstrateDuck />
      <JoinSuccessModal />
    </Modal>
  )
}
