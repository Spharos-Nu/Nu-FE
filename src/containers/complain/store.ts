import { create } from 'zustand'

interface ComplainState {
  selectedComplaint: string
  complainContent: string
  setSelectedComplaint: (complaint: string) => void
  setComplainContent: (content: string) => void

  resetComplainState: () => void
}

export const useComplainStore = create<ComplainState>((set) => ({
  selectedComplaint: '',
  complainContent: '',
  setSelectedComplaint: (selectedComplaint) => set({ selectedComplaint }),
  setComplainContent: (complainContent) => set({ complainContent }),

  resetComplainState: () => set({ selectedComplaint: '', complainContent: '' }),
}))
