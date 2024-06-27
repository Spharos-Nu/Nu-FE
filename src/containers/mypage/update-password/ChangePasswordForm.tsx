'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useBasicAlertStore } from '@/components/Modal/store'
import NewPwdInput from '@/containers/mypage/update-password/NewPwdInput'
import NewPwdInput2 from '@/containers/mypage/update-password/NewPwdInput2'
import PwdInput from '@/containers/mypage/update-password/PwdInput'
import {
  usePasswordErrorStore,
  usePasswordStore,
} from '@/containers/mypage/update-password/store'
import { updatePassword } from '@/utils/authApiActions'
import { pwdValidCheck } from '@/utils/joinValidateCheck'

export default function ChangePasswordForm() {
  const router = useRouter()
  const { currentPassword, newPassword, newPassword2, resetPassword } =
    usePasswordStore()
  const {
    setSamePassword,
    setNotValidPassword,
    setNotMatchPassword,
    resetError,
  } = usePasswordErrorStore()
  const { showAlert, isClosed } = useBasicAlertStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!pwdValidCheck(newPassword)) return setNotValidPassword(true)
    if (newPassword !== newPassword2) return setNotMatchPassword(true)

    const data = await updatePassword(currentPassword, newPassword)

    if (data.status === 409) return setSamePassword(true)
    if (data.status === 200) {
      resetPassword()
      resetError()
    }
    return showAlert(data.message)
  }

  useEffect(() => {
    if (isClosed) router.push('/mypage')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosed])

  return (
    <div className="w-screen h-screen">
      <form className="h-full mx-5 my-5 relative" onSubmit={handleSubmit}>
        <PwdInput />
        <NewPwdInput />
        <NewPwdInput2 />
        <button
          type="submit"
          className="w-full h-14 rounded-3xl bg-sky-600 text-white my-10"
        >
          변경 완료
        </button>
      </form>
    </div>
  )
}
