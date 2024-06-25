'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import BasicAlert from '@/components/Modal/BasicAlert'
import { useBasicAlertStore } from '@/components/Modal/store'
import NewPwdInput from '@/containers/mypage/update-password/NewPwdInput'
import NewPwdInput2 from '@/containers/mypage/update-password/NewPwdInput2'
import PwdInput from '@/containers/mypage/update-password/PwdInput'
import {
  usePasswordErrorStore,
  usePasswordStore,
} from '@/containers/mypage/update-password/store'
import { pwdValidCheck } from '@/utils/joinValidateCheck'

export default function ChangePasswordForm() {
  const router = useRouter()
  const { data: session } = useSession()
  const { currentPassword, newPassword, newPassword2, resetPassword } =
    usePasswordStore()
  const {
    setSamePassword,
    setNotValidPassword,
    setNotMatchPassword,
    resetError,
  } = usePasswordErrorStore()
  const { message, setAlert, isClosed } = useBasicAlertStore()

  const showAlert = (alertMessage: string) => {
    setAlert(true, alertMessage)
  }

  const handleSubmit = async () => {
    if (!pwdValidCheck(newPassword)) return setNotValidPassword(true)
    if (newPassword !== newPassword2) return setNotMatchPassword(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth/pwd`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    })

    const data = await res.json()
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
      <form className="h-full mx-5 my-5 relative">
        <PwdInput />
        <NewPwdInput />
        <NewPwdInput2 />
        <button
          type="button"
          className="w-full h-14 rounded-3xl bg-sky-600 text-white my-10"
          onClick={handleSubmit}
        >
          변경 완료
        </button>
      </form>
      <BasicAlert message={message} />
    </div>
  )
}
