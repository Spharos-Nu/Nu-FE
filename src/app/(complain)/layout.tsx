import ComplainHeader from '@/containers/complain/ComplainHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ComplainHeader />
      {children}
    </>
  )
}
