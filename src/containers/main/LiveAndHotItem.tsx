import Image from 'next/image'
import Link from 'next/link'
import exImg from '@/dummydata/banner1.png'
import LikeFalse from '@/public/svgs/icon/likeFalse.svg'
import { LiveAndHotType } from '@/types/mainType'

export default function LiveAndHotItem({ item }: { item: LiveAndHotType }) {
  return (
    <Link
      href={`/goods-detail?code=${item.goodsCode}`}
      className="border rounded-xl mr-[20px] last:mr-0 inline-block bg-clip-content relative"
    >
      <Image
        src={exImg}
        alt={item.goodsName}
        width={300}
        height={0}
        className="rounded-t-lg h-auto max-h-[180px] overflow-hidden object-cover"
      />
      <LikeFalse className="absolute top-0 right-0 mt-[10px] mr-[10px]" />
      <div className="py-[20px] px-[20px]">
        <p className="text-[#666666] text-[17px]">{item.goodsName}</p>
        <div className="flex justify-between pt-[20px]">
          <p className="bg-[#5D5FEF] bg-opacity-15 px-[22px] py-[8px] text-[#5D5FEF] rounded-full text-[17px] font-bold">
            2d 3h 12m 36s
          </p>
          <div className="bg-[#2B74B9] text-white rounded-full px-[20px] py-[8px]">
            {item.minPrice.toLocaleString()}원
          </div>
        </div>
      </div>
    </Link>
  )
}
