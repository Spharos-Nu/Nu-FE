import Nav from '@/components/layout/Nav'

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative w-full h-full">
      {children}
      <Nav />
    </main>
  )
}
