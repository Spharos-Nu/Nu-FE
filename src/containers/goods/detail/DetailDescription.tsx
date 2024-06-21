import Duck from '@/public/svgs/duck/descriptionDuck.svg'
import { GoodsDetailType, TagType } from '@/types/goodsType'

export default function DetailDescription({
  goodsDetail,
  tags,
}: {
  goodsDetail: GoodsDetailType
  tags: TagType[]
}) {
  return (
    <div className="relative pt-[50px] px-[15px]">
      <div className="absolute z-10 left-1/2 -translate-x-1/2">
        <Duck />
      </div>
      <div className="mt-[60px] py-[60px] px-[20px] text-[18px] bg-[#f8f7f7] rounded-2xl">
        {goodsDetail.description}
        <div className="mt-[10px]">
          {tags.map((item) => (
            <span key={item.id} className="mr-[10px] text-[17px] text-zinc-400">
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
