// Analytics and conversion tracking utilities

export type VariantType = 'A' | 'B' | 'C'

// Global gtag function type
declare global {
  interface Window {
    gtag: (
      command: string,
      ...args: any[]
    ) => void
  }
}

// GA4 Event names
export const GA4_EVENTS = {
  // Page view events
  PAGE_VIEW: 'page_view',
  VARIANT_VIEW: 'hero_variant_view',
  
  // Engagement events
  CTA_CLICK: 'cta_click',
  VIDEO_PLAY: 'video_play',
  SCROLL_TO_PRICING: 'scroll_to_pricing',
  
  // Conversion funnel
  BEGIN_CHECKOUT: 'begin_checkout',
  ADD_PAYMENT_INFO: 'add_payment_info',
  PURCHASE: 'purchase',
  
  // Custom events
  VARIANT_CONVERSION: 'variant_conversion',
} as const

// Track page views with variant info
export function trackPageView(variant: VariantType, path: string = '/') {
  if (typeof window !== 'undefined' && window.gtag) {
    // Send enhanced page view with variant info
    window.gtag('event', GA4_EVENTS.PAGE_VIEW, {
      page_path: path,
      hero_variant: variant,
      custom_parameter: {
        experiment_name: 'hero_ab_test',
        variant_id: variant
      }
    })
    
    // Also track specific variant view
    window.gtag('event', GA4_EVENTS.VARIANT_VIEW, {
      variant_id: variant,
      experiment_name: 'hero_ab_test'
    })
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Page view tracked for variant ${variant}`)
  }
}

// Track conversion events
export function trackConversion(variant: VariantType, eventName: string = 'begin_checkout') {
  // Set conversion cookie
  if (typeof window !== 'undefined') {
    document.cookie = `hero-converted=true;path=/;max-age=${60 * 60 * 24 * 30}`
    document.cookie = `conversion-variant=${variant};path=/;max-age=${60 * 60 * 24 * 30}`
  }
  
  // Google Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    // Track the conversion event
    window.gtag('event', eventName, {
      hero_variant: variant,
      currency: 'USD',
      value: 799,
      product_name: 'Vibe Building Challenge',
      product_id: 'vibe31-challenge'
    })
    
    // Also track as variant conversion for A/B test analysis
    window.gtag('event', GA4_EVENTS.VARIANT_CONVERSION, {
      variant_id: variant,
      conversion_type: eventName,
      value: 799
    })
  }
  
  // Log for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Conversion tracked: ${eventName} for variant ${variant}`)
  }
}

// Track CTA clicks
export function trackCTAClick(variant: VariantType, buttonLocation: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA4_EVENTS.CTA_CLICK, {
      hero_variant: variant,
      button_location: buttonLocation,
      button_text: getButtonTextForVariant(variant)
    })
  }
}

// Track successful purchase (Stripe payment success)
export function trackPurchase(variant: VariantType, sessionId: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA4_EVENTS.PURCHASE, {
      transaction_id: sessionId,
      hero_variant: variant,
      currency: 'USD',
      value: 799,
      product_name: 'Vibe Building Challenge',
      product_id: 'vibe31-challenge',
      payment_method: 'stripe'
    })
  }
}

// Helper function
function getButtonTextForVariant(variant: VariantType): string {
  switch(variant) {
    case 'A': return 'Start Your Transformation →'
    case 'B': return 'Join the Community Now →'
    case 'C': return 'Claim Your Spot Now →'
    default: return 'Get Started →'
  }
}

// Get conversion rate data (for internal dashboard)
export function getConversionData() {
  // This would typically fetch from your analytics backend
  // For now, returning mock data structure
  return {
    variantA: {
      views: 0,
      conversions: 0,
      rate: 0
    },
    variantB: {
      views: 0,
      conversions: 0,
      rate: 0
    },
    variantC: {
      views: 0,
      conversions: 0,
      rate: 0
    }
  }
}