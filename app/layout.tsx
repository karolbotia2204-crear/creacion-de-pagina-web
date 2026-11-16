import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diego & Sofía | Nuestra boda',
  description:
    'Invitación personalizada a la boda de Diego y Sofía · Sábado 18 de diciembre de 2027 · Piedecuesta, Santander.',
  generator: 'v0.app',
  openGraph: {
    title: 'Diego & Sofía | ¡Nos casamos!',
    description: 'Sábado 18 de diciembre de 2027 · Piedecuesta, Santander, Colombia',
    images: ['/nuestra-historia.jpg'],
    locale: 'es_CO',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f1e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
