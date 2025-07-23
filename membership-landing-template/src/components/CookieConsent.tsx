'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  
  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])
  
  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Enable GA4 tracking
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted'
    })
  }
  
  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
    // Disable GA4 tracking
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied'
    })
  }
  
  if (!showBanner) return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          <p className="font-medium text-gray-900 mb-1">🍪 Cookie Notice</p>
          <p>
            We use cookies to analyze site traffic and optimize your experience. 
            By accepting, your data will be aggregated with all other user data.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}