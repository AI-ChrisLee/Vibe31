'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-71QWKC07MP'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            // Debug log
            console.log('[GA4] Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}