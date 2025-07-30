"use client"

import Image from "next/image"
import { SimpleWaitlistForm } from "@/components/SimpleWaitlistForm"
import { useState, useRef, useEffect } from "react"

export default function WaitlistPage() {
  const [hasClickedVideo, setHasClickedVideo] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)

  const handleVideoClick = () => {
    setHasClickedVideo(true)
    // Scroll to CTA section smoothly
    setTimeout(() => {
      ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  useEffect(() => {
    if (hasClickedVideo && ctaRef.current) {
      // Trigger the form to show email step
      const button = ctaRef.current.querySelector('button')
      if (button) {
        button.click()
      }
    }
  }, [hasClickedVideo])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center">
          {/* Hero GIF Section */}
          <div className="mb-8">
            <div 
              className="relative w-[90vw] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={handleVideoClick}
            >
              <Image
                src="/hero-image.gif"
                alt="Building micro SaaS in 31 hours"
                width={500}
                height={333}
                className="w-full h-auto"
                priority
                unoptimized
              />
              {!hasClickedVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
            Get my Vibe 31<br />
            <span className="bg-yellow-300 px-2">Micro SaaS playbook</span><br />
            every Saturday.
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
            I build profitable micro SaaS in 31 hours. <span className="font-bold">Cursor + Claude + coffee.</span> No sprints, just shipping.
          </p>
          
          <div className="max-w-md mx-auto" ref={ctaRef}>
            <SimpleWaitlistForm />
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href="https://www.youtube.com/@aichrislee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            <a
              href="https://x.com/aichrislee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}