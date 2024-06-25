import { create } from 'zustand'

interface ProfileState {
  profileImage: File | null
  nickname: string
  favoriteCategory: string

  isValidNick: boolean

  setProfileImage: (profileIamge: File | null) => void
  setNickname: (nickname: string) => void
  setFavoriteCategory: (favoriteCategory: string) => void

  setIsValidNick: (isValidNick: boolean) => void

  resetProfile: () => void
}

interface ErrorState {
  nicknameError: number

  setNicknameError: (nicknameError: number) => void
}

export const useProfileStore = create<ProfileState>((set) => ({
  profileImage: null,
  nickname: '',
  favoriteCategory: '',

  isValidNick: true,

  setProfileImage: (profileImage) => set({ profileImage }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteCategory: (favoriteCategory) => set({ favoriteCategory }),

  setIsValidNick: (isValidNick) => set({ isValidNick }),

  resetProfile: () =>
    set({
      profileImage: null,
      nickname: '',
      favoriteCategory: '',

      isValidNick: true,
    }),
}))

export const useErrorStore = create<ErrorState>((set) => ({
  nicknameError: 0,

  setNicknameError: (nicknameError) => set({ nicknameError }),
}))
