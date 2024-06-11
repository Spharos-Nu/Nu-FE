import { create } from 'zustand'

interface TradingState {
  currentStatus: number
  page: number

  setStatus: (currentStatus: number) => void
  setPage: (page: number) => void
}

interface ProfileState {
  profileImage: File | null
  nickname: string
  favoriteCategory: string

  setProfileImage: (profileIamge: File | null) => void
  setNickname: (nickname: string) => void
  setFavoriteCategory: (favoriteCategory: string) => void
}

export const useBidStore = create<TradingState>((set) => ({
  currentStatus: 0,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => ({ page }),
}))

export const useSellStore = create<TradingState>((set) => ({
  currentStatus: 0,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => ({ page }),
}))

export const useWinningStore = create<TradingState>((set) => ({
  currentStatus: 0,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => ({ page }),
}))

export const useReviewStore = create<TradingState>((set) => ({
  currentStatus: 0,
  page: 0,

  setStatus: (currentStatus) => set({ currentStatus }),
  setPage: (page) => ({ page }),
}))

export const useUpdateProfileStore = create<ProfileState>((set) => ({
  profileImage: null,
  nickname: '',
  favoriteCategory: '',

  setProfileImage: (profileImage) => set({ profileImage }),
  setNickname: (nickname) => set({ nickname }),
  setFavoriteCategory: (favoriteCategory) => set({ favoriteCategory }),
}))
