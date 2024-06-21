import { create } from 'zustand'

interface ModalState {
  noti: boolean
  search: boolean

  setNoti: (noti: boolean) => void
  setSearch: (search: boolean) => void
}

export const useHeaderModalState = create<ModalState>((set) => ({
  noti: false,
  search: false,

  setNoti: (noti) => set({ noti }),
  setSearch: (search) => set({ search }),
}))
