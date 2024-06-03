import type { Metadata, Viewport } from 'next'
import AuthProvider from '@/components/provider/AuthProvider'
import '@/styles/globals.css'
import '@/styles/fonts.css'

export const metadata: Metadata = {
  title: '굿즈는 덕들과 함께, 굿즈굿즈덕',
  description: '굿즈는 덕들과 함께, 굿즈굿즈덕',
  manifest: '/manifest.webmanifest',
  icons: [
    { rel: 'icon', url: '/assets/icon-192x192.png', sizes: '192x192' },
    { rel: 'icon-256', url: '/assets/icon-256x256.png', sizes: '256x256' },
    { rel: 'icon-384', url: '/assets/icon-384x384.png', sizes: '384x384' },
    { rel: 'icon-512', url: '/assets/icon-512x512.png', sizes: '512x512' },
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0284c7',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-regular bg-white">
        <AuthProvider>
          {children}
          {modal}
          <div id="modal-root" />
        </AuthProvider>
      </body>
    </html>
  )
}
