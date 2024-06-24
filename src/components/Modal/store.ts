import { create } from 'zustand'

interface BasicAlertState {
  isOpen: boolean
  isClosed: boolean
  message: string

  setAlert: (isOpen: boolean, message: string) => void
  setIsClosed: (isClose: boolean) => void
}

interface SelectAlertState {
  isOpen: boolean
  message: string
  isApproved: boolean

  setAlert: (isOpen: boolean, message: string) => void
  setIsApproved: (isApproved: boolean) => void
}

export const useBasicAlertStore = create<BasicAlertState>((set) => ({
  isOpen: false,
  isClosed: false,
  message: '',

  setAlert: (isOpen: boolean, message: string) => set({ isOpen, message }),
  setIsClosed: (isClosed: boolean) => set({ isClosed }),
}))

export const useSelectAlertStore = create<SelectAlertState>((set) => ({
  isOpen: false,
  message: '',
  isApproved: false,

  setAlert: (isOpen: boolean, message: string) => set({ isOpen, message }),
  setIsApproved: (isApproved: boolean) => set({ isApproved }),
}))
