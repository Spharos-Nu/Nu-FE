import { create } from 'zustand'

interface TabState {
  currentState: number

  setState: (bid: number) => void
}

interface ProfileState {
  profileImage: File | null
  nickname: string
  favoriteCategory: string

  setProfileImage: (profileIamge: File | null) => void
  setNickname: (nickname: string) => void
  setFavoriteCategory: (favoriteCategory: string) => void
}

export const useBidTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const useSellTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const useWinningTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const useReviewTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const useUpdateProfileStore = create<ProfileState>((set) => ({
  profileImage: null,
  nickname: '',
  favoriteCategory: '',

  setProfileImage: (profileImage) => set({ profileImage }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteCategory: (favoriteCategory) => set({ favoriteCategory }),
}))
