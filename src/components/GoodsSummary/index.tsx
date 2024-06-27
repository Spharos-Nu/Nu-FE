'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BiddingType } from '@/types/goodsApiDataType'

export default function GoodsSummary({
  goodsList,
}: {
  goodsList: BiddingType
}) {
  // const [data, setData] = useState<BiddingType>({
  //   goodsCode: '',
  //   name: '',
  //   price: 0,
  //   thumbnail: '',
  // })
  // const [like, setLike] = useState<boolean>(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getGoodsSummary(goodsCode)
  //     if (res.status === 200) {
  //       setData(res.result)
  //     }

  //     const res2 = await getLike(goodsCode)
  //     if (res2.status === 200) {
  //       if (res2.result) {
  //         setLike(true)
  //       } else {
  //         setLike(false)
  //       }
  //     }
  //   }

  //   fetchData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <Link href={`/goods/goodsCode=${goodsList.goodsCode}`} className="relative">
      <Image
        src={goodsList.thumbnail}
        alt="썸네일"
        className="rounded-t-xl w-full h-full aspect-square object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="rounded-b-xl">
        <p className="truncate">{goodsList.name}</p>
        <div className="grid grid-cols-3 gap-1">
          {/* <div className="col-span-2 px-3 py-1">
            <span className="rounded-2xl bg-sky-200 text-sky-500 text-center">
              {goodsList.tradingStatus === 0 ? data.openedAt : data.closedAt}
            </span>
          </div> */}
          <div>
            <span className="rounded-2xl bg-sky-600 text-center">
              {goodsList.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
          </div>
        </div>
      </div>
      {/* {like ? (
        <GoHeartFill className="text-white absolute right-3 top-3" />
      ) : (
        <GoHeart className="text-red-500 absolute right-3 top-3" />
      )} */}
    </Link>
  )
}
