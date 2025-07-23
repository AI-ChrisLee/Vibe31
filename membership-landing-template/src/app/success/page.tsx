'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { trackPurchase, type VariantType } from '@/lib/analytics'
import Link from 'next/link'

function getVariantFromCookie(): VariantType {
  if (typeof window === 'undefined') return 'C'
  
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === 'hero-variant' && ['A', 'B', 'C'].includes(value)) {
      return value as VariantType
    }
  }
  return 'C'
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  useEffect(() => {
    if (sessionId) {
      const variant = getVariantFromCookie()
      trackPurchase(variant, sessionId)
      
      // Also track in console for debugging
      console.log(`[Success] Purchase completed for variant ${variant}, session: ${sessionId}`)
    }
  }, [sessionId])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-black mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the Vibe Building Challenge! Check your email for access details.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-black mb-4">What Happens Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">1.</span>
              <p className="text-gray-700">Check your email for your login credentials and Discord invite</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">2.</span>
              <p className="text-gray-700">Join our Discord community and introduce yourself</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold">3.</span>
              <p className="text-gray-700">Mark your calendar for August 7th kickoff session</p>
            </div>
          </div>
        </div>
        
        <Link 
          href="/"
          className="text-gray-600 hover:text-gray-900 underline"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}