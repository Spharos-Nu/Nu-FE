import { create } from 'zustand'

export type TagItem = {
  id: number
  name: string
}

interface TagState {
  tagItems: TagItem[]
  addTags(item: TagItem): void
  removeTags(item: TagItem): void
}

export const useTagStore = create<TagState>((set) => ({
  tagItems: [],
  addTags: (item: TagItem) =>
    set((state) => ({ tagItems: [...state.tagItems, item] })),
  removeTags: (item: TagItem) =>
    set((state) => ({
      tagItems: state.tagItems.filter((tag) => tag.id !== item.id),
    })),
}))
