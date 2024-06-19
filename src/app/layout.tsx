import type { Metadata, Viewport } from 'next'
import AuthProvider from '@/components/provider/AuthProvider'
import '@/styles/globals.css'
import '@/styles/fonts.css'

export const metadata: Metadata = {
  title: '굿즈는 덕들과 함께, 굿즈굿즈덕',
  description: '굿즈는 덕들과 함께, 굿즈굿즈덕',
  manifest: './manifest.ts',
  icons: {
    icon: '/icons/icon-512x512.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0284c7',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-regular bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
