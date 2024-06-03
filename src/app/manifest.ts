import { MetadataRoute } from 'next'

export default function mainfest(): MetadataRoute.Manifest {
  return {
    name: '굿즈굿즈덕',
    short_name: '굿즈굿즈덕',
    description: '굿즈굿즈덕',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
