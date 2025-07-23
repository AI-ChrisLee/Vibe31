import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CountdownBanner } from '@/components/CountdownBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { CookieConsent } from '@/components/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['500', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '[Your Product Name] - [Your Value Proposition]',
  description: '[Your product description - what transformation you offer]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: '[Your Product Name] - [Your Value Proposition]',
    description: '[Your compelling description for social sharing]',
    type: 'website',
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
        <CountdownBanner />
        <div className="pt-[40px]">
          {children}
        </div>
        <CookieConsent />
      </body>
    </html>
  )
}