import { TagType } from '@/types/mainType'

export default function TagItem({ tag }: { tag: TagType }) {
  return <p className="pr-[3px] text-[14px] text-zinc-400">#{tag.name}</p>
}
