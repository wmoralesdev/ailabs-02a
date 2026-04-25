import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { GeistPixelSquare } from 'geist/font/pixel'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zero to Agent | San Salvador',
  description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para El Salvador. Workshop + Hackathon Global. 25 de Abril, 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Zero to Agent | San Salvador',
    description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para El Salvador.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-card-san%20salvador%20%282%29-8WLJnQTfLM8qpGSnIiSxBexG7URPiO.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero to Agent | San Salvador',
    description: 'Un evento de v0 by Vercel con Ai /abs como host fundador para El Salvador.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-card-san%20salvador%20%282%29-8WLJnQTfLM8qpGSnIiSxBexG7URPiO.png'],
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
      <body className="font-sans antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
