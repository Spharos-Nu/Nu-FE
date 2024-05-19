import { create } from 'zustand'

interface JoinFirstState {
  favoriteCategory: string
  nickname: string
  isValidNick: boolean
  userId: string
  isValidId: boolean

  favoriteCategoryOptions: string[]

  setFavoriteCategory: (category: string) => void
  setNickname: (nickname: string) => void
  setIsValidNick: (isValidNick: boolean) => void
  setUserId: (userId: string) => void
  setIsValidId: (isValidId: boolean) => void

  resetFirstState: () => void
}

interface JoinSecondState {
  password: string
  phoneNumber: string
  isValidated: boolean

  setPassword: (password: string) => void
  setPhoneNumber: (phoneNumber: string) => void
  setIsValidated: (isVerified: boolean) => void

  resetSecondState: () => void
}

export const useFirstStore = create<JoinFirstState>((set) => ({
  favoriteCategory: '',
  nickname: '',
  isValidNick: false,
  userId: '',
  isValidId: false,

  favoriteCategoryOptions: ['아이돌', '애니메이션', '야구'],

  setFavoriteCategory: (category) => set({ favoriteCategory: category }),
  setNickname: (nickname) => set({ nickname }),
  setIsValidNick: (isValidNick) => set({ isValidNick }),
  setUserId: (userId) => set({ userId }),
  setIsValidId: (isValidId) => set({ isValidId }),

  resetFirstState: () =>
    set({
      favoriteCategory: '',
      nickname: '',
      isValidNick: false,
      userId: '',
      isValidId: false,
    }),
}))

export const useSecondStore = create<JoinSecondState>((set) => ({
  password: '',
  phoneNumber: '',
  isValidated: false,

  setPassword: (password) => set({ password }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setIsValidated: (isValidated) => set({ isValidated }),

  resetSecondState: () =>
    set({
      password: '',
      phoneNumber: '',
      isValidated: false,
    }),
}))
