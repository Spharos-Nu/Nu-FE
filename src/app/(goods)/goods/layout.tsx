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
    <main>
      <Header />
      {children}
      <Nav />
      <RegistrationBtn />
      <UpNav />
    </main>
  )
}
