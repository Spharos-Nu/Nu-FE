import { create } from 'zustand'

interface BasicAlertState {
  alertMessage: string
  isVisible: boolean

  isClosed: boolean

  showAlert: (message: string) => void
  hideAlert: () => void

  setIsClosed: (isClosed: boolean) => void
}

interface SelectAlertState {
  isOpen: boolean
  message: string
  isApproved: boolean

  setAlert: (isOpen: boolean, message: string) => void
  setIsApproved: (isApproved: boolean) => void
}

export const useBasicAlertStore = create<BasicAlertState>((set) => ({
  alertMessage: '',
  isVisible: false,

  isClosed: false,

  showAlert: (message) => set({ alertMessage: message, isVisible: true }),
  hideAlert: () => set({ alertMessage: '', isVisible: false, isClosed: true }),

  setIsClosed: (isClosed) => set({ isClosed }),
}))

export const useSelectAlertStore = create<SelectAlertState>((set) => ({
  isOpen: false,
  message: '',
  isApproved: false,

  setAlert: (isOpen: boolean, message: string) => set({ isOpen, message }),
  setIsApproved: (isApproved: boolean) => set({ isApproved }),
}))
