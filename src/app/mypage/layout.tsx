import MyPageHeader from '@/components/Header/MyPageHeader'
import Nav from '@/components/layout/Nav'

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative w-full h-full">
      <MyPageHeader />
      {children}
      <Nav />
    </main>
  )
}
