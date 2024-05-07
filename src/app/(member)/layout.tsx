export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="absolute w-full h-full">{children}</main>
}
