import Header from '@/components/layout/Header'
import Nav from '@/components/layout/Nav'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  )
}
