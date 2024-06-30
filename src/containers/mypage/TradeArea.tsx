import Link from 'next/link'
import { BiData } from 'react-icons/bi'
import { FaPen } from 'react-icons/fa'
import { FaBoxArchive } from 'react-icons/fa6'

export default function TradeArea() {
  return (
    <div className="mx-7 my-7 rounded-3xl bg-slate-100 px-2 py-2">
      <span className="text-xs pl-4 border-b-2">나의 거래</span>
      <div className="mt-1">
        <Link
          href="/mypage/bid"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <BiData className="w-4 h-4 mr-3" />
          입찰한 상품
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link
          href="/mypage/sell"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <FaBoxArchive className="w-4 h-4 mr-3" />
          등록한 상품
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link
          href="/mypage/winning-bid"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <FaBoxArchive className="w-4 h-4 mr-3" />
          낙찰된 상품
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link
          href="/mypage/reviews"
          className="hover:bg-gray-200 mx-4 my-5 flex items-center"
        >
          <FaPen className="w-4 h-4 mr-3" />
          후기
        </Link>
      </div>
    </div>
  )
}
