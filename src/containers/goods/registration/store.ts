import { create } from 'zustand'

export interface TagItem {
  id: number
  name: string
}

export interface ImageItem {
  id: number
  url: File
  previewUrl: string
}

interface GoodsState {
  goodsName: string
  categoryId: number
  description: string
  minPrice: string
  biddingPeriod: string
  biddingTime: string
  biddingDuration: string
  wishTradeType: string

  setGoodsName: (goodsName: string) => void
  setCategory: (categoryId: number) => void
  setDescription: (description: string) => void
  setMinPrice: (minPrice: string) => void
  setBiddingPeriod: (biddingPeriod: string) => void
  setBiddingTime: (biddingTime: string) => void
  setBiddingDuration: (biddingDuration: string) => void
  setTradeType: (wishTradeType: string) => void

  resetGoodsState: () => void
}

interface TagState {
  tags: TagItem[]
  addTags(item: TagItem): void
  removeTags(item: TagItem): void
  resetTagsState: () => void
}

interface ImageState {
  imageItems: ImageItem[]
  addImages(item: ImageItem): void
  removeImages(item: ImageItem): void
  resetImagesState: () => void
}

export const useGoodsStore = create<GoodsState>((set) => ({
  goodsName: '',
  categoryId: -1,
  description: '',
  minPrice: '',
  biddingPeriod: '',
  biddingTime: '',
  biddingDuration: '',
  wishTradeType: '',

  setGoodsName: (goodsName: string) => set({ goodsName }),
  setCategory: (categoryId: number) => set({ categoryId }),
  setDescription: (description: string) => set({ description }),
  setMinPrice: (minPrice: string) => set({ minPrice }),
  setBiddingPeriod: (biddingPeriod: string) => set({ biddingPeriod }),
  setBiddingTime: (biddingTime: string) => set({ biddingTime }),
  setBiddingDuration: (biddingDuration: string) => set({ biddingDuration }),
  setTradeType: (wishTradeType: string) => set({ wishTradeType }),

  resetGoodsState: () =>
    set({
      goodsName: '',
      categoryId: -1,
      description: '',
      minPrice: '',
      biddingPeriod: '',
      biddingTime: '',
      biddingDuration: '',
      wishTradeType: '',
    }),
}))

export const useTagStore = create<TagState>((set) => ({
  tags: [],
  addTags: (item: TagItem) => set((state) => ({ tags: [...state.tags, item] })),
  removeTags: (item: TagItem) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== item.id),
    })),
  resetTagsState: () => set(() => ({ tags: [] })),
}))

export const useImageStore = create<ImageState>((set) => ({
  imageItems: [],
  addImages: (item: ImageItem) =>
    set((state) => ({ imageItems: [...state.imageItems, item] })),
  removeImages: (item: ImageItem) =>
    set((state) => ({
      imageItems: state.imageItems.filter((image) => image.id !== item.id),
    })),
  resetImagesState: () => set(() => ({ imageItems: [] })),
}))
