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
  title: 'Vibe31 - Join the Waitlist | Build 3 AI Apps in 1 Month',
  description: 'Master AI tools that replace $300K developers. Build viral apps in 48 hours. Limited to 30 founding members.',
  keywords: ['AI development', 'AI apps', 'no-code AI', 'AI tools', 'build AI apps', 'Cursor AI', 'Claude AI'],
  openGraph: {
    title: 'Vibe31 - Join the Waitlist | Build 3 AI Apps in 1 Month',
    description: 'Master AI tools that replace $300K developers. Build viral apps in 48 hours. Limited to 30 founding members.',
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
        {/* <CountdownBanner /> */}
        <div className="">
          {children}
        </div>
        {/* <CookieConsent /> */}
      </body>
    </html>
  )
}