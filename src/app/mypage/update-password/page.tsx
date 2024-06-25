import ChangePasswordForm from '@/containers/mypage/update-password/ChangePasswordForm'
// import { updatePassword } from '@/utils/authApiActions'

export default async function UpdatePassword() {
  // const updatePass = async (updateForm: FormData) => {
  //   'use server'

  //   const payload = {
  //     currentPassword: updateForm.get('currentPassword')!,
  //     newPassword: updateForm.get('newPassword'),
  //   }

  //   const res = await updatePassword(
  //     payload.currentPassword,
  //     payload.newPassword!,
  //   )
  //   console.log(res)
  // }

  return <ChangePasswordForm />
}
