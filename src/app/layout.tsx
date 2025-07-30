import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { CountdownBanner } from '@/components/CountdownBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
// import { CookieConsent } from '@/components/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['500', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vibe 31 - Build Profitable Micro SaaS in 31 Hours',
  description: 'Learn to build profitable micro SaaS products in just 31 hours. Get the playbook, tools, and strategies used by successful indie hackers.',
  keywords: ['micro saas', 'indie hacker', 'build saas', 'cursor ai', 'claude ai', 'ship fast', 'saas playbook'],
  metadataBase: new URL('https://vibe31.com'),
  openGraph: {
    title: 'Vibe 31 - Build Profitable Micro SaaS in 31 Hours',
    description: 'Learn to build profitable micro SaaS products in just 31 hours. Get the playbook, tools, and strategies.',
    type: 'website',
    siteName: 'Vibe 31',
    images: [
      {
        url: '/hero-image.gif',
        width: 500,
        height: 333,
        alt: 'Building micro SaaS in 31 hours',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@aichrislee',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen bg-white antialiased">
        <GoogleAnalytics />
        {/* <CountdownBanner /> */}
        <div className="">
          {children}
        </div>
        {/* <CookieConsent /> */}
      </body>
    </html>
  )
}