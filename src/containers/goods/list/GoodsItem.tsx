import Image from 'next/image'
import Link from 'next/link'
import banner from '@/dummydata/banner1.png'
import { GoodsCardType } from '@/types/goodsType'

export default function GoodsItem({
  code,
  goodsItemData,
}: {
  code: string
  goodsItemData: GoodsCardType
}) {
  const comment = '입찰이 종료된\n상품입니다.'
  return (
    <Link
      href={`/goods-detail?goodsCode=${goodsItemData.goodsCode}`}
      className={`border rounded-2xl w-[48%] sm:w-[30%] lg:w-[23%] xl:w-[18%] ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale'}`}
    >
      <p
        className={`absolute z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[17px] whitespace-pre-line ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? 'hidden' : ''}`}
      >
        {comment}
      </p>
      <Image
        src={banner}
        width={300}
        height={300}
        className={`rounded-t-2xl ${goodsItemData.tradingStatus === 0 || goodsItemData.tradingStatus === 1 ? '' : 'grayscale'}`}
        alt="굿즈 이미지"
      />
      <div className="px-[20px] py-[20px]">
        <p className="">
          {goodsItemData.goodsName}
          {code}
        </p>
        <p>{goodsItemData.minPrice}</p>
        {goodsItemData.tradingStatus === 0 && (
          <p>{goodsItemData.opendAt.split('T')[0]}</p>
        )}
        {goodsItemData.tradingStatus === 1 && (
          <p>{goodsItemData.closedAt.split('T')[0]}</p>
        )}
        {goodsItemData.tradingStatus >= 2 && <p>입찰종료</p>}
      </div>
    </Link>
  )
}
