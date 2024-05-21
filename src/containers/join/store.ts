import { create } from 'zustand'

interface JoinFirstState {
  profileImgUrl: string
  favoriteCategory: string
  nickname: string
  isValidNick: boolean
  userId: string
  isValidId: boolean

  favoriteCategoryOptions: string[]

  setProfileImgUrl: (profileImgUrl: string) => void
  setFavoriteCategory: (category: string) => void
  setNickname: (nickname: string) => void
  setIsValidNick: (isValidNick: boolean) => void
  setUserId: (userId: string) => void
  setIsValidId: (isValidId: boolean) => void

  resetFirstState: () => void
}

interface JoinSecondState {
  password: string
  password2: string
  phoneNumber: string
  isValidated: boolean

  setPassword: (password: string) => void
  setPassword2: (password2: string) => void
  setPhoneNumber: (phoneNumber: string) => void
  setIsValidated: (isVerified: boolean) => void

  resetSecondState: () => void
}

export const useFirstStore = create<JoinFirstState>((set) => ({
  profileImgUrl: '',
  favoriteCategory: '',
  nickname: '',
  isValidNick: false,
  userId: '',
  isValidId: false,

  favoriteCategoryOptions: ['아이돌', '애니메이션', '야구'],

  setProfileImgUrl: (profileImgUrl) => set({ profileImgUrl }),
  setFavoriteCategory: (category) => set({ favoriteCategory: category }),
  setNickname: (nickname) => set({ nickname }),
  setIsValidNick: (isValidNick) => set({ isValidNick }),
  setUserId: (userId) => set({ userId }),
  setIsValidId: (isValidId) => set({ isValidId }),

  resetFirstState: () =>
    set({
      profileImgUrl: '',
      favoriteCategory: '',
      nickname: '',
      isValidNick: false,
      userId: '',
      isValidId: false,
    }),
}))

export const useSecondStore = create<JoinSecondState>((set) => ({
  password: '',
  password2: '',
  phoneNumber: '',
  isValidated: false,

  setPassword: (password) => set({ password }),
  setPassword2: (password2) => set({ password2 }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setIsValidated: (isValidated) => set({ isValidated }),

  resetSecondState: () =>
    set({
      password: '',
      password2: '',
      phoneNumber: '',
      isValidated: false,
    }),
}))
