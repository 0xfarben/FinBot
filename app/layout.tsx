import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://chat.finforesight.dev'),
  title: {
    default: 'FinBot - AI-Powered Financial Analysis Assistant',
    template: '%s | FinBot by FinForesight'
  },
  description: 'Lightning Fast AI Chatbot delivering real-time stock analysis, interactive charts, financial data, and market insights powered by advanced artificial intelligence.',
  keywords: [
    'AI stock analysis',
    'real-time market data',
    'financial chatbot',
    'trading assistant',
    'investment research',
    'stock screener',
    'quantitative analysis',
    'AI-powered investing',
    'FinForesight AI',
    'financial technology'
  ],
  authors: [{ 
    name: 'FinForesight Team',
    url: 'https://finforesight.dev' 
  }],
  creator: 'FinForesight',
  publisher: 'FinForesight',
  applicationName: 'FinBot',
  category: 'Finance',
  alternates: {
    canonical: 'https://chat.finforesight.dev'
  },
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
        // url: 'https://iili.io/3NJppYg.png',
        url: 'https://iili.io/3NFziKP.png',
        // url: 'https://chat.finforesight.dev/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'FinBot AI analyzing stock market data with interactive charts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@finforesight',
    creator: '@finforesight',
    title: 'FinBot - AI-Powered Financial Analysis Assistant',
    description: 'Real-time market insights and stock analysis powered by AI',
    // images: ['https://iili.io/3NJppYg.png'],
    images: ['https://iili.io/3NFziKP.png'],
    
    // images: ['https://chat.finforesight.dev/images/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon-16x16.png',
    apple: '/images/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/images/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['finbot@finforesight.dev']
    }
  },
  assets: 'https://chat.finforesight.dev/assets',
  archives: ['https://blog.finforesight.dev'],
  bookmarks: ['https://app.finforesight.dev/login']
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light dark',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/GeistVariable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "FinBot",
            "url": "https://chat.finforesight.dev",
            "description": "AI-powered financial analysis assistant",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
        
        {/* Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={cn(
          'font-sans antialiased min-h-screen bg-background text-foreground',
          GeistSans.variable,
          GeistMono.variable
        )}
        itemScope
        itemType="https://schema.org/WebPage"
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
            <main className="flex flex-col flex-1" itemScope itemType="https://schema.org/FinancialService">
              {children}
            </main>
          </div>
        </Providers>
        
        {/* Performance Monitoring */}
        <Script
          strategy="lazyOnload"
          src="https://cdn.polyfill.io/v3/polyfill.min.js?features=IntersectionObserverEntry,IntersectionObserver,ResizeObserver"
        />
      </body>
    </html>
  )
}
