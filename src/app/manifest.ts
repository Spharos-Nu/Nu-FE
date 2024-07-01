import { MetadataRoute } from 'next'

export default function mainfest(): MetadataRoute.Manifest {
  return {
    name: '굿즈굿즈덕',
    short_name: '굿즈굿즈덕',
    description: '굿즈는 덕들과 함께, 굿즈굿즈덕',
    start_url: 'https://goodsgoodsduck.shop',
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
      {
        src: '/icons/icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        src: '/icons/icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/icons/icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        src: '/icons/icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        src: '/icons/icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
    ],
  }
}
