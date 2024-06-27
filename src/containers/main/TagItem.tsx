import { TagType } from '@/types/mainType'

export default function TagItem({ tag }: { tag: TagType }) {
  return <p className="pr-[3px] text-[14px] text-[#a2a2a2]">{tag.name}</p>
}
