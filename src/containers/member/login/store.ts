import { create } from 'zustand'

interface LoginState {
  userId: string
  password: string

  isId: boolean
  isPwd: boolean
  isChecked: boolean

  setUserId: (userId: string) => void
  setPassword: (password: string) => void

  setIsId: (isId: boolean) => void
  setIsPwd: (isPwd: boolean) => void
  setIsChecked: (isChecked: boolean) => void
}

export const useLoginStore = create<LoginState>((set) => ({
  userId: '',
  password: '',

  isId: false,
  isPwd: false,
  isChecked: false,

  setUserId: (userId) => set({ userId }),
  setPassword: (password) => set({ password }),

  setIsId: (isId) => set({ isId }),
  setIsPwd: (isPwd) => set({ isPwd }),
  setIsChecked: (isChecked) => set({ isChecked }),
}))
