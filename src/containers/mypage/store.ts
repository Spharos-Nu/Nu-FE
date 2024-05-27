import { create } from 'zustand'

interface TabState {
  currentState: number

  setState: (bid: number) => void
}

export const BidTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const SellTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const WinningTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))

export const ReviewTabStore = create<TabState>((set) => ({
  currentState: 0,

  setState: (currentState) => set({ currentState }),
}))
