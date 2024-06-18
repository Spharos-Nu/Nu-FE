import { create } from 'zustand'

interface JoinState {
  profileImage: File | null
  favoriteCategory: string
  nickname: string
  userId: string
  password: string
  password2: string
  phoneNumber: string

  isValidNick: boolean
  isValidId: boolean
  isValidPwd: boolean
  isValidPhone: boolean

  isVerified: boolean

  setProfileImage: (profileImage: File | null) => void
  setFavoriteCategory: (category: string) => void
  setNickname: (nickname: string) => void
  setUserId: (userId: string) => void
  setPassword: (password: string) => void
  setPassword2: (password2: string) => void
  setPhoneNumber: (phoneNumber: string) => void

  setIsValidNick: (isValidNick: boolean) => void
  setIsValidId: (isValidId: boolean) => void
  setIsValidPwd: (isValidPwd: boolean) => void
  setIsValidPhone: (isValidPhone: boolean) => void

  setIsVerified: (isVerified: boolean) => void

  resetJoinState: () => void
}

interface ErrorState {
  categoryNotSelected: boolean
  notValidNick: number
  notValidId: number
  notValidPassword: boolean
  notEqualPassword: boolean
  notValidPhone: number
  notVerified: boolean

  setCategoryNotSelected: (categoryNotSelected: boolean) => void
  setNotValidNick: (notValidNick: number) => void
  setNotValidId: (notValidId: number) => void
  setNotValidPassword: (notValidPassword: boolean) => void
  setNotEqualPassword: (notEqualPassword: boolean) => void
  setNotValidPhone: (notValidPhone: number) => void
  setNotVerified: (notVerified: boolean) => void

  resetErrorState: () => void
}

interface InputState {
  currentFocus: string

  setCurrentFocus: (currentFocus: string) => void
}

interface PageState {
  currentIdx: number

  setCurrentIdx: (currentIdx: number) => void
}

interface ModalState {
  isOpen: boolean

  setIsOpen: (isOpen: boolean) => void
}

interface PwdState {
  pwd: boolean
  pwd2: boolean

  setPwd: (pwd: boolean) => void
  setPwd2: (pwd2: boolean) => void
}

interface VerificationState {
  /** 메시지 전송여부 + 메시지 전송횟수 */
  isMessage: boolean
  cntMessage: number

  /** 인증번호 */
  verificationNumber: string

  /** 5회 인증 시도 시 disabled */
  disableTime: number

  /** message 보낸 후, 시간 흐르는 로직 */
  messageMinutes: number
  messageSeconds: number

  setIsMessage: (isMessage: boolean) => void
  setCntMessage: (cntMessage: number) => void

  setVerificationNumber: (verificationNumber: string) => void

  setDisableTime: (disableTime: number) => void

  setMessageMinutes: (messageMinutes: number) => void
  setMessageSeconds: (messageSeconds: number) => void
}

export const useJoinStore = create<JoinState>((set) => ({
  profileImage: null,
  favoriteCategory: '',
  nickname: '',
  userId: '',
  password: '',
  password2: '',
  phoneNumber: '',

  isValidNick: false,
  isValidId: false,
  isValidPwd: false,
  isValidPhone: false,

  isVerified: false,

  setProfileImage: (profileImage) => set({ profileImage }),
  setFavoriteCategory: (category) => set({ favoriteCategory: category }),
  setNickname: (nickname) => set({ nickname }),
  setUserId: (userId) => set({ userId }),
  setPassword: (password) => set({ password }),
  setPassword2: (password2) => set({ password2 }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),

  setIsValidNick: (isValidNick) => set({ isValidNick }),
  setIsValidId: (isValidId) => set({ isValidId }),
  setIsValidPwd: (isValidPwd) => set({ isValidPwd }),
  setIsValidPhone: (isValidPhone) => set({ isValidPhone }),

  setIsVerified: (isVerified) => set({ isVerified }),

  resetJoinState: () =>
    set({
      profileImage: null,
      favoriteCategory: '',
      nickname: '',
      userId: '',
      password: '',
      password2: '',
      phoneNumber: '',

      isValidNick: false,
      isValidId: false,
      isValidPwd: false,
      isValidPhone: false,

      isVerified: false,
    }),
}))

export const useErrorStore = create<ErrorState>((set) => ({
  categoryNotSelected: false,
  notValidNick: 0,
  notValidId: 0,
  notValidPassword: false,
  notEqualPassword: false,
  notValidPhone: 0,
  notVerified: false,

  setCategoryNotSelected: (categoryNotSelected) => set({ categoryNotSelected }),
  setNotValidNick: (notValidNick) => set({ notValidNick }),
  setNotValidId: (notValidId) => set({ notValidId }),
  setNotValidPassword: (notValidPassword) => set({ notValidPassword }),
  setNotEqualPassword: (notEqualPassword) => set({ notEqualPassword }),
  setNotValidPhone: (notValidPhone) => set({ notValidPhone }),
  setNotVerified: (notVerified) => set({ notVerified }),

  resetErrorState: () =>
    set({
      categoryNotSelected: false,
      notValidNick: 0,
      notValidId: 0,
      notValidPassword: false,
      notEqualPassword: false,
      notValidPhone: 0,
      notVerified: false,
    }),
}))

export const useFocusStore = create<InputState>((set) => ({
  currentFocus: '',

  setCurrentFocus: (currentFocus) => set({ currentFocus }),
}))

export const usePageStore = create<PageState>((set) => ({
  currentIdx: 0,

  setCurrentIdx: (currentIdx) => set({ currentIdx }),
}))

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,

  setIsOpen: (isOpen) => set({ isOpen }),
}))

export const usePwdStore = create<PwdState>((set) => ({
  pwd: true,
  pwd2: true,

  setPwd: (pwd) => set({ pwd }),
  setPwd2: (pwd2) => set({ pwd2 }),
}))

export const useVerificationStore = create<VerificationState>((set) => ({
  isMessage: false,
  cntMessage: 0,

  verificationNumber: '',

  disableTime: 0,

  /** message 보낸 후, 시간 흐르는 로직 */
  messageMinutes: 3,
  messageSeconds: 0,

  setIsMessage: (isMessage) => set({ isMessage }),
  setCntMessage: (cntMessage) => set({ cntMessage }),

  setVerificationNumber: (verificationNumber) => set({ verificationNumber }),

  setDisableTime: (disableTime) => set({ disableTime }),

  setMessageMinutes: (messageMinutes) => set({ messageMinutes }),
  setMessageSeconds: (messageSeconds) => set({ messageSeconds }),
}))
