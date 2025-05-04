import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL('https://chat.finforesight.dev'),
  title: {
    default: 'FinBot - AI-Powered Financial Analysis Assistant',
    template: '%s | FinBot by FinForesight'
  },
  description:
    'Lightning Fast AI Chatbot that Responds With Live Interactive Stock Charts, Financials, News, Screeners, and More. Get real-time market insights and stock analysis powered by advanced AI.',
  keywords: [
    'AI chatbot',
    'stock analysis',
    'financial analysis',
    'market insights',
    'trading',
    'stock charts',
    'real-time data',
    'FinForesight',
    'FinBot'
  ],
  authors: [{ name: 'FinForesight Team' }],
  creator: 'FinForesight',
  publisher: 'FinForesight',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chat.finforesight.dev',
    title: 'FinBot - AI-Powered Financial Analysis Assistant',
    description: 'Get real-time market insights and stock analysis powered by advanced AI.',
    siteName: 'FinBot by FinForesight',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'FinBot - AI Financial Analysis Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinBot - AI-Powered Financial Analysis Assistant',
    description: 'Get real-time market insights and stock analysis powered by advanced AI.',
    images: ['/twitter-image.png'],
    creator: '@finforesight',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon-16x16.png',
    apple: '/images/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased min-h-screen bg-background text-foreground',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
