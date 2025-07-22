import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CountdownBanner } from '@/components/CountdownBanner'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['500', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vibe31 - Build $10K Products in 48 Hours',
  description: 'Master the Vibe Building system. Transform your agency from service provider to product builder. 29-day intensive starting July 31.',
  keywords: ['agency transformation', 'product building', 'vibe building', '48 hour builds', 'agency products'],
  openGraph: {
    title: 'Vibe31 - Build $10K Products in 48 Hours',
    description: 'Transform your struggling agency into a product powerhouse this summer.',
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
        <CountdownBanner />
        <div className="pt-[40px]">
          {children}
        </div>
      </body>
    </html>
  )
}