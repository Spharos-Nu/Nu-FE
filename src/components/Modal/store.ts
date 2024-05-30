import { create } from 'zustand'

interface AlertState {
  isOpen: boolean
  isApproved: boolean

  setIsOpen: (isOpen: boolean) => void
  setIsApproved: (isApproved: boolean) => void
}

export const AlertStore = create<AlertState>((set) => ({
  isOpen: false,
  isApproved: false,

  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setIsApproved: (isApproved: boolean) => set({ isApproved }),
}))
