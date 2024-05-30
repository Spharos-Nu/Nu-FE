import { create } from 'zustand'

interface AlertState {
  isOpen: boolean
  message: string
  isApproved: boolean

  setAlert: (isOpen: boolean, message: string) => void
  setIsApproved: (isApproved: boolean) => void
}

export const useAlertStore = create<AlertState>((set) => ({
  isOpen: false,
  message: '',
  isApproved: false,

  setAlert: (isOpen: boolean, message: string) => set({ isOpen, message }),
  setIsApproved: (isApproved: boolean) => set({ isApproved }),
}))
