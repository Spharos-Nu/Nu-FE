import Image from 'next/image'
import exImg from '@/dummydata/banner1.png'
import { SoonAndHitsType, Tag } from '@/types/SoonAndHitsType'
import LikeFalse from '@/../public/svgs/icon/likeFalse.svg'
import TagItem from './TagItem'

export default function SoonAndHitsItem({ item }: { item: SoonAndHitsType }) {
  return (
    <div className="border rounded-2xl">
      <div className="relative">
        <Image
          src={exImg}
          alt={item.goodsCode}
          width={400}
          height={0}
          className="rounded-t-2xl h-auto object-cover"
        />
        <p className="absolute top-3 left-3 bg-[#F9B23C] rounded-full text-white px-[5px] py-[2px] text-[12px] leading-[16px]">
          New
        </p>
        <p className="absolute top-3 left-12 bg-black bg-opacity-25 text-white px-[5px] py-[2px] rounded-full text-[12px] leading-[16px]">
          coming soon
        </p>
        <div className="absolute bottom-2 right-2">
          <LikeFalse />
        </div>
      </div>
      <div className="px-[20px] py-[20px]">
        <p className="text-[21px]">{item.goodsName}</p>
        <div className="whitespace-nowrap overflow-x-auto flex">
          {item.tag.map((list: Tag) => (
            <TagItem key={list.tagId} tag={list} />
          ))}
        </div>
        <p className="text-[22px]">{item.minPrice.toLocaleString()}원</p>
      </div>
    </div>
  )
}
