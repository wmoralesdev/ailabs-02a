import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GeistPixelSquare } from 'geist/font/pixel'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from './providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zero to Agent | Ciudad de Guatemala',
  description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para Guatemala. Workshop + Hackathon Global. 2 de Mayo, 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Zero to Agent | Ciudad de Guatemala',
    description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para Guatemala.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero to Agent | Ciudad de Guatemala',
    description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para Guatemala.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background ${GeistPixelSquare.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground font-sans antialiased">
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
