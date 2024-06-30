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
    <div className="flex justify-center content-center items-center my-20">
      <IoChevronBackOutline
        onClick={handlePreviousPage}
        className="mx-5 text-xl"
      />
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
      <div className="w-8 h-8 flex justify-center items-center text-2xl">
        {currentPage + 1}
      </div>
      {currentPage < maxPage - 2 && (
        <div className="w-8 h-8 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-full h-full text-gray-200"
          >
            {currentPage + 2}
          </button>
        </div>
      )}
      {maxPage > 1 && maxPage - 1 !== currentPage && (
        <div className="w-8 h-8 flex justify-center items-center">
          <button
            type="button"
            onClick={() => setCurrentPage(maxPage - 1)}
            className="w-full h-full text-gray-300"
          >
            {maxPage}
          </button>
        </div>
      )}
      <IoChevronForwardOutline
        onClick={handleNextPage}
        className="mx-5 text-xl"
      />
    </div>
  )
}
