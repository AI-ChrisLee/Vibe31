'use client'

import { ScrollToPricingButton } from "@/components/ScrollToPricingButton"
import { heroA } from '../../variants/heroA.config'

// Define the config type
interface HeroConfig {
  videoId: string
  videoStart: number
  headline: string
  subheadline: string
  urgency: string
  urgencyClass: string
  ctaText: string
  trustSignals: string[]
  transformationBadge?: {
    text: string
    className: string
  }
  communityBadge?: {
    text: string
    className: string
  }
  methodBadge?: {
    text: string
    className: string
  }
  socialProof?: {
    text: string
    className: string
  }
  communityStats?: {
    members: string
    messages: string
    shipped: string
  }
}


export function HeroSection() {
  const config = heroA as HeroConfig
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Badge for all variants */}
          {config.transformationBadge && (
            <div className="text-center mb-4">
              <span className={config.transformationBadge.className}>
                {config.transformationBadge.text}
              </span>
            </div>
          )}
          {config.communityBadge && (
            <div className="text-center mb-4">
              <span className={config.communityBadge.className}>
                {config.communityBadge.text}
              </span>
            </div>
          )}
          {config.methodBadge && (
            <div className="text-center mb-4">
              <span className={config.methodBadge.className}>
                {config.methodBadge.text}
              </span>
            </div>
          )}
          
          {/* Demo Video */}
          <div className="relative max-w-4xl mx-auto mb-8 md:mb-10">
            <div className="relative pb-[56.25%] bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm ">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${config.videoId}?start=${config.videoStart}`}
                title="Watch Me Build a $10K Product in 48 Hours"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="mb-3 md:mb-4 text-[2rem] leading-[1.2] sm:text-4xl sm:leading-[1.15] md:text-5xl md:leading-[1.1] lg:text-6xl lg:leading-[1.1] xl:text-7xl xl:leading-[1.05] font-black tracking-tight text-gray-900" dangerouslySetInnerHTML={{ __html: config.headline }} />
            <p className="mb-6 md:mb-8 text-lg md:text-xl font-medium text-gray-600">
              {config.subheadline}
            </p>
            <p className={`${config.urgencyClass} mb-6`}>
              {config.urgency.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </p>
            
            {/* Community stats for variant B */}
            {config.communityStats && (
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">{config.communityStats.members}</p>
                  <p className="text-sm text-gray-600">Active Members</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">{config.communityStats.messages}</p>
                  <p className="text-sm text-gray-600">Community Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">{config.communityStats.shipped}</p>
                  <p className="text-sm text-gray-600">Products Shipped</p>
                </div>
              </div>
            )}
            
            <div>
              <ScrollToPricingButton 
                text={config.ctaText}
                className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-base sm:text-lg font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-md shadow-sm transition-all hover:shadow-md"
              />
              
              {/* Social proof for variants A and B */}
              {config.socialProof && (
                <p className={config.socialProof.className}>
                  {config.socialProof.text}
                </p>
              )}
              
              <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                {config.trustSignals.map((signal, index) => (
                  <p key={index} className="text-base font-medium text-gray-600">
                    {signal}
                  </p>
                ))}
                {config.trustSignals.length > 1 && (
                  <span className="hidden sm:inline text-gray-400">•</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}