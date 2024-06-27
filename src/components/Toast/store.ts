import { create } from 'zustand'

interface ToastState {
  toastMessage: string
  isVisible: boolean

  showToast: (message: string) => void
  hideToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  toastMessage: '',
  isVisible: false,

  showToast: (message) => set({ toastMessage: message, isVisible: true }),
  hideToast: () => set({ toastMessage: '', isVisible: false }),
}))
