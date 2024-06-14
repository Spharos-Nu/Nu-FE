import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'
import RegistrationBtn from '@/components/layout/RegistrationBtn'
import UpNav from '@/components/layout/UpNav'

export default function GoodsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Nav />
      <aside>
        <RegistrationBtn />
        <UpNav />
      </aside>
    </>
  )
}
