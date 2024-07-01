import { create } from 'zustand'

interface ModalState {
  search: boolean

  setSearch: (search: boolean) => void
}

export const useHeaderModalState = create<ModalState>((set) => ({
  search: false,

  setSearch: (search) => set({ search }),
}))
