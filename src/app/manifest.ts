import { MetadataRoute } from 'next'

export default function mainfest(): MetadataRoute.Manifest {
  return {
    name: '굿즈굿즈덕',
    short_name: '굿즈굿즈덕',
    description: '굿즈는 덕들과 함께, 굿즈굿즈덕',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
