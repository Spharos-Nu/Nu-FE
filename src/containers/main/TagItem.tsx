import { Tag } from '@/types/mainType'

export default function TagItem({ tag }: { tag: Tag }) {
  return <p className="pr-[3px] text-[14px] text-[#a2a2a2]">#{tag.tagName}</p>
}
