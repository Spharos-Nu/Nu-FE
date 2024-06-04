import { create } from 'zustand'

export type TagItem = {
  id: number
  name: string
}

export type ImageItem = {
  id: number
  url: File
  previewUrl: string
}

interface TagState {
  tagItems: TagItem[]
  addTags(item: TagItem): void
  removeTags(item: TagItem): void
}

interface ImageState {
  imageItems: ImageItem[]
  addImages(item: ImageItem): void
  removeImages(item: ImageItem): void
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

export const useImageStore = create<ImageState>((set) => ({
  imageItems: [],
  addImages: (item: ImageItem) =>
    set((state) => ({ imageItems: [...state.imageItems, item] })),
  removeImages: (item: ImageItem) =>
    set((state) => ({
      imageItems: state.imageItems.filter((image) => image.id !== item.id),
    })),
}))
