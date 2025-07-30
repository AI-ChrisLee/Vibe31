import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Vibe 31 Waitlist - Learn to Build Profitable Micro SaaS in 31 Hours',
  description: 'Get exclusive access to the Vibe 31 playbook. Learn how to build profitable micro SaaS products in just 31 hours using Cursor, Claude, and coffee. Join successful indie hackers shipping real products.',
  keywords: 'micro saas, indie hacker, build saas fast, cursor ai, claude ai, saas playbook, 31 hour build, profitable saas, ship fast',
  openGraph: {
    title: 'Join the Vibe 31 Waitlist - Build Profitable Micro SaaS Fast',
    description: 'Learn the exact playbook to build and ship profitable micro SaaS products in 31 hours. No sprints, just shipping.',
    url: 'https://vibe31.com/waitlist',
    siteName: 'Vibe 31',
    images: [
      {
        url: '/hero-image.gif',
        width: 500,
        height: 333,
        alt: 'Building micro SaaS in 31 hours',
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Vibe 31 - Build Profitable Micro SaaS in 31 Hours',
    description: 'Get the playbook to build profitable micro SaaS fast. Cursor + Claude + Coffee = Shipping.',
    creator: '@aichrislee',
    images: ['/hero-image.gif'],
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
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}