import MyPageHeader from '@/components/Header/MyPageHeader'
import Nav from '@/components/layout/Nav'

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="absolute w-full h-full">
      <MyPageHeader />
      {children}
      <Nav />
    </main>
  )
}
