import { create } from 'zustand'

interface LocalCategoryState {
  categoryName: string

  setCategory: (categoryName: string) => void
}

export const useLocalCategoryStore = create<LocalCategoryState>((set) => ({
  categoryName: '',

  setCategory: (categoryName: string) => set({ categoryName }),
}))
