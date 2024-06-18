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

interface GoodsState {
  goodsName: string
  category: string
  description: string
  minPrice: number
  biddingPeriod: string
  biddingTime: string
  biddingDuration: string
  tradeType: string

  setGoodsName: (goodsName: string) => void
  setCategory: (category: string) => void
  setDescription: (description: string) => void
  setMinPrice: (minPrice: number) => void
  setBiddingPeriod: (biddingPeriod: string) => void
  setBiddingTime: (biddingTime: string) => void
  setBiddingDuration: (biddingDuration: string) => void
  setTradeType: (tradeType: string) => void
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

export const useGoodsStore = create<GoodsState>((set) => ({
  goodsName: '',
  category: '',
  description: '',
  minPrice: 0,
  biddingPeriod: '',
  biddingTime: '',
  biddingDuration: '',
  tradeType: '',

  setGoodsName: (goodsName: string) => set({ goodsName }),
  setCategory: (category: string) => set({ category }),
  setDescription: (description: string) => set({ description }),
  setMinPrice: (minPrice: number) => set({ minPrice }),
  setBiddingPeriod: (biddingPeriod: string) => set({ biddingPeriod }),
  setBiddingTime: (biddingTime: string) => set({ biddingTime }),
  setBiddingDuration: (biddingDuration: string) => set({ biddingDuration }),
  setTradeType: (tradeType: string) => set({ tradeType }),
}))

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
