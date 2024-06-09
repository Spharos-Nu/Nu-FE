import Link from 'next/link'
import { ApiResponse } from '@/types/apiResponseType'

export default function DuckPointArea({
  duckPointData,
}: {
  duckPointData: ApiResponse<number>
}) {
  const duckPoint = duckPointData.result

  return (
    <div className="mx-7 my-3 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4">duck point</span>
      <div className="flex mt-2 mx-4 justify-between items-center">
        <span className="text-xl">
          {(duckPoint ?? 100000)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
        <Link
          href="/duck-point/charge"
          className="flex text-xl text-white bg-slate-400 rounded-xl w-14 h-10 justify-center items-center"
        >
          <span className="text-xl">충전</span>
        </Link>
      </div>
      <Link
        className="mx-4 mt-4 flex items-center justify-center border-t border-gray-500 text-center py-2"
        href="/duck-point/details"
      >
        사용 내역
      </Link>
    </div>
  )
}
