import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function Pagination({ currentPage }: { currentPage: number }) {
  return (
    <div className="bottom-0 flex justify-center content-center items-center">
      {currentPage !== 1 && <IoChevronBackOutline />}
      <div className="flex justify-center items-center border-black border-[2px]">
        {currentPage}
      </div>
      <IoChevronForwardOutline />
    </div>
  )
}
