import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import MainCategory from '@/containers/main/MainCategory'
import { options } from '../api/auth/[...nextauth]/options'

export default async function CategoryPage() {
  const session = await getServerSession(options)

  if (session) {
    const category = session.user.favoriteCategory
    if (category === '아이돌') redirect('/idol')
    else if (category === '야구') redirect('/baseball')
    else if (category === '애니메이션') redirect('/animation')
  }

  return <MainCategory />
}
