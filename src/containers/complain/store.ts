import { create } from 'zustand'

interface ComplainState {
  complainReason: string
  complainContent: string

  setComplainReason: (complaint: string) => void
  setComplainContent: (content: string) => void

  resetComplainState: () => void
}

export const useComplainStore = create<ComplainState>((set) => ({
  complainReason: '',
  complainContent: '',

  setComplainReason: (complainReason) => set({ complainReason }),
  setComplainContent: (complainContent) => set({ complainContent }),

  resetComplainState: () => set({ complainReason: '', complainContent: '' }),
}))
