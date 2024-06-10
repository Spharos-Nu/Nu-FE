import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function Pagination({
  currentPage,
  setCurrentPage,
  isLast,
}: {
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  isLast: boolean
}) {
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="bottom-0 flex justify-center content-center items-center">
      {currentPage !== 1 && (
        <IoChevronBackOutline onClick={handlePreviousPage} />
      )}
      <div className="flex justify-center items-center border-black border-[2px]">
        {currentPage}
      </div>
      {!isLast && <IoChevronForwardOutline onClick={handleNextPage} />}
    </div>
  )
}
