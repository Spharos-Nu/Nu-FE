import Nav from '@/components/layout/Nav'
import SubHeader from '@/components/layout/SubHeader'

export default function ChatListLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pageTitle = '채팅방'
  return (
    <>
      <SubHeader pageTitle={pageTitle} />
      {children}
      <Nav />
    </>
  )
}
