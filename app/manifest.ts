import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hakiva - Pendaftaran Merek & HAKI',
    short_name: 'Hakiva',
    description:
      'Hakiva adalah platform pendaftaran merek dan HAKI yang membantu Anda untuk melakukan pendaftaran dengan mudah dan efisien.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}