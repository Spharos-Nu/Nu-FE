import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function Pagination({
  currentPage,
  setCurrentPage,
  maxPage,
}: {
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  maxPage: number
}) {
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="bottom-0 flex justify-center content-center items-center">
      <IoChevronBackOutline onClick={handlePreviousPage} className="text-3xl" />
      {currentPage > 0 && (
        <div className="w-12 h-12 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(0)}
            className="w-full h-full text-gray-400"
          >
            1
          </button>
        </div>
      )}
      {currentPage > 2 && (
        <div className="w-12 h-12 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
            className="w-full h-full text-gray-400"
          >
            {currentPage}
          </button>
        </div>
      )}
      <div className="w-12 h-12 flex justify-center items-center border-black border-[2px] text-2xl">
        {currentPage + 1}
      </div>
      {currentPage < maxPage - 2 && (
        <div className="w-12 h-12 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-full h-full text-gray-400"
          >
            {currentPage + 2}
          </button>
        </div>
      )}
      {maxPage > 0 && (
        <div className="w-12 h-12 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(maxPage)}
            className="w-full h-full text-gray-400"
          >
            {maxPage}
          </button>
        </div>
      )}
      <IoChevronForwardOutline onClick={handleNextPage} className="text-3xl" />
    </div>
  )
}
