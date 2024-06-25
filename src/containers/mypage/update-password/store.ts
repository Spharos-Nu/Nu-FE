import { create } from 'zustand'

interface PasswordType {
  currentPassword: string
  newPassword: string
  newPassword2: string

  setCurrentPassword: (currentPassword: string) => void
  setNewPassword: (newPassword: string) => void
  setNewPassword2: (newPassword2: string) => void

  resetPassword: () => void
}

interface ErrorType {
  samePassword: boolean
  notValidPassword: boolean
  notMatchPassword: boolean

  setSamePassword: (samePassword: boolean) => void
  setNotValidPassword: (notValidPassword: boolean) => void
  setNotMatchPassword: (notMatchPassword: boolean) => void

  resetError: () => void
}

export const usePasswordStore = create<PasswordType>((set) => ({
  currentPassword: '',
  newPassword: '',
  newPassword2: '',

  setCurrentPassword: (currentPassword) => set({ currentPassword }),
  setNewPassword: (newPassword) => set({ newPassword }),
  setNewPassword2: (newPassword2) => set({ newPassword2 }),

  resetPassword: () =>
    set({
      currentPassword: '',
      newPassword: '',
      newPassword2: '',
    }),
}))

export const usePasswordErrorStore = create<ErrorType>((set) => ({
  samePassword: false,
  notValidPassword: false,
  notMatchPassword: false,

  setSamePassword: (samePassword) => set({ samePassword }),
  setNotValidPassword: (notValidPassword) => set({ notValidPassword }),
  setNotMatchPassword: (notMatchPassword) => set({ notMatchPassword }),

  resetError: () =>
    set({
      samePassword: false,
      notValidPassword: false,
      notMatchPassword: false,
    }),
}))
