import { CheckoutButton } from "@/components/CheckoutButton"
import { ScrollToPricingButton } from "@/components/ScrollToPricingButton"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-6 md:mb-8 px-4">
              <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-3 md:mb-4">The Challenge</p>
              <h1 className="mb-6 md:mb-8 text-[1.75rem] leading-[1.2] sm:text-3xl sm:leading-[1.15] md:text-4xl md:leading-[1.1] lg:text-5xl lg:leading-[1.1] xl:text-5xl xl:leading-[1.05] font-black tracking-tight text-gray-900">
                Join Vibe Building Challenge. Make 31K+ Digital Product in 31 days.
              </h1>
            </div>
            
            {/* Demo Video */}
            <div className="relative max-w-4xl mx-auto mb-8 md:mb-10 px-4 sm:px-6 lg:px-0">
              <div className="relative pb-[56.25%] bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5JIvYFp4Qvw?start=161"
                  title="Watch Me Build a $10K Product in 48 Hours"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-3 md:mt-4 text-center text-xs sm:text-sm font-medium text-gray-600 px-2">
                Watch this 6min video to see how I build $31K products in 31 days
              </p>
            </div>
            
            <div className="text-center px-4 sm:px-0">
              <div>
                <ScrollToPricingButton 
                  text="Join Vibe 31 Challenge" 
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transform hover:scale-105 transition-all duration-300 text-base sm:text-lg lg:text-xl font-bold px-6 sm:px-8 lg:px-12 py-1.5 sm:py-2 lg:py-3.5 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl" 
                />
                <p className="mt-3 md:mt-4 text-xs sm:text-sm font-medium text-gray-600">
                  Limited to 30 founders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Bar */}
      <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-gray-100">
        <div className="container">
          <div className="text-center px-4 sm:px-0">
            <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-4">
              Master the Tools That Matter
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {/* Cursor */}
              <div className="group flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">Cursor</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Claude */}
              <div className="group flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <span className="text-white font-black text-xs sm:text-sm">A</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">Claude</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Supabase */}
              <div className="group flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">Supabase</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Vercel */}
              <div className="group flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">Vercel</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Resend */}
              <div className="group flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900">Resend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Problems Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 px-4">
            <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">You&apos;re Stuck in the Agency Trap</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Problem 1 */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">60+ Hour Weeks</h3>
                <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                  Trading time for money. Your income is capped by hours in a day.
                </p>
              </div>
            </div>
            
            {/* Problem 2 */}
            <div className="group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">Custom Everything</h3>
                <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                  Starting from zero every project. Zero leverage, maximum effort.
                </p>
              </div>
            </div>
            
            {/* Problem 3 */}
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">Revenue Ceiling</h3>
                <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                  More clients = more stress. Can&apos;t scale without hiring an army.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - 3 Step Transformation */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 px-4">
            <p className="text-xs sm:text-sm font-bold text-green-600 uppercase tracking-wider mb-3">The Journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">How Vibe 31 Works</h2>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8">
            {/* Step 1: Onboarding */}
            <div className="group">
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-green-600 uppercase tracking-wide">Day 1-3</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-gray-900">Quick Start Onboarding</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-medium text-gray-700">Secure your spot with payment</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-medium text-gray-700">Get Discord access 3 days before start</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-medium text-gray-700">Meet other founders, get pumped</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg className="w-24 h-24 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Process */}
            <div className="group">
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <span className="text-sm font-bold text-green-600 uppercase tracking-wide">31 Days</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">The Building Process</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">4 Course Modules</p>
                          <p className="text-sm text-gray-600">Landing pages, funnels, dashboards, AI tools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">Weekly Office Hours</p>
                          <p className="text-sm text-gray-600">Every Thursday: Q&A + preview next module</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">Templates with Source Code</p>
                          <p className="text-sm text-gray-600">Get all code when you follow guidelines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg className="w-24 h-24 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Results */}
            <div className="group">
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-sm">3</span>
                      </div>
                      <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Day 31+</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Your New Reality</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">$31K+ Ready Portfolio</p>
                          <p className="text-sm text-gray-600">4 production-ready products to sell</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">Build Anything with AI</p>
                          <p className="text-sm text-gray-600">Master the tools to create any digital product</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900">90% Profit Margins</p>
                          <p className="text-sm text-gray-600">Work once, sell forever model</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg className="w-24 h-24 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 px-4">
            <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-3">The Investment</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Simple, Transparent Pricing</h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 items-start px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8 text-center text-white">
                <h3 className="text-xl sm:text-2xl font-black mb-2">Vibe Building Challenge</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black">$799</span>
                </div>
                <p className="text-sm sm:text-base text-red-100">one-time (founding price)</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">4 Course Modules</p>
                      <p className="text-sm text-gray-600">Landing pages, funnels, dashboards, AI tools. One module per week.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Weekly Office Hours</p>
                      <p className="text-sm text-gray-600">Every Thursday: Q&A + preview next module. Course drops right after.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Templates with Source Code</p>
                      <p className="text-sm text-gray-600">Get all templates with source code when you follow our guidelines.</p>
                    </div>
                  </div>
                </div>
                
                <CheckoutButton 
                  text="Secure Your Spot" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transform hover:scale-105 transition-all duration-300 text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl" 
                />
                
                <div className="text-center space-y-2 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">Next price:</span> $1,997 (September). Then $2,997.
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    One product bundle = 39X your investment.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Calendar */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 lg:self-start">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-center mb-4 sm:mb-6">August - September 2025</h3>
              
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm">
                {/* Days of week */}
                <div className="font-bold text-gray-500 py-1 sm:py-2">Sun</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Mon</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Tue</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Wed</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Thu</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Fri</div>
                <div className="font-bold text-gray-500 py-1 sm:py-2">Sat</div>
                
                {/* August dates */}
                <div className="text-gray-400 py-1.5 sm:py-2 lg:py-3"></div>
                <div className="text-gray-400 py-1.5 sm:py-2 lg:py-3"></div>
                <div className="text-gray-400 py-1.5 sm:py-2 lg:py-3"></div>
                <div className="text-gray-400 py-1.5 sm:py-2 lg:py-3"></div>
                <div className="text-gray-400 py-1.5 sm:py-2 lg:py-3"></div>
                <div className="py-1.5 sm:py-2 lg:py-3">1</div>
                <div className="py-1.5 sm:py-2 lg:py-3">2</div>
                
                {/* Week 2 */}
                <div className="py-1.5 sm:py-2 lg:py-3">3</div>
                <div className="py-1.5 sm:py-2 lg:py-3">4</div>
                <div className="py-1.5 sm:py-2 lg:py-3">5</div>
                <div className="py-1.5 sm:py-2 lg:py-3">6</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-1.5 sm:py-2 lg:py-3 font-bold text-xs sm:text-sm">
                    7
                    <div className="text-[0.625rem] sm:text-xs font-medium">Start</div>
                  </div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">8</div>
                <div className="py-1.5 sm:py-2 lg:py-3">9</div>
                
                {/* Week 3 */}
                <div className="py-1.5 sm:py-2 lg:py-3">10</div>
                <div className="py-1.5 sm:py-2 lg:py-3">11</div>
                <div className="py-1.5 sm:py-2 lg:py-3">12</div>
                <div className="py-1.5 sm:py-2 lg:py-3">13</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-xs sm:text-sm">14</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">15</div>
                <div className="py-1.5 sm:py-2 lg:py-3">16</div>
                
                {/* Week 4 */}
                <div className="py-1.5 sm:py-2 lg:py-3">17</div>
                <div className="py-1.5 sm:py-2 lg:py-3">18</div>
                <div className="py-1.5 sm:py-2 lg:py-3">19</div>
                <div className="py-1.5 sm:py-2 lg:py-3">20</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-xs sm:text-sm">21</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">22</div>
                <div className="py-1.5 sm:py-2 lg:py-3">23</div>
                
                {/* Week 5 */}
                <div className="py-1.5 sm:py-2 lg:py-3">24</div>
                <div className="py-1.5 sm:py-2 lg:py-3">25</div>
                <div className="py-1.5 sm:py-2 lg:py-3">26</div>
                <div className="py-1.5 sm:py-2 lg:py-3">27</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-xs sm:text-sm">28</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">29</div>
                <div className="py-1.5 sm:py-2 lg:py-3">30</div>
                
                {/* September dates */}
                <div className="py-1.5 sm:py-2 lg:py-3">31</div>
                <div className="py-1.5 sm:py-2 lg:py-3">1</div>
                <div className="py-1.5 sm:py-2 lg:py-3">2</div>
                <div className="py-1.5 sm:py-2 lg:py-3">3</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-xs sm:text-sm">
                    4
                    <div className="text-[0.625rem] sm:text-xs font-medium">Grad</div>
                  </div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">5</div>
                <div className="py-1.5 sm:py-2 lg:py-3">6</div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-black rounded"></div>
                <span className="text-sm font-medium text-gray-600">Thursday Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-3">FAQs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Got Questions?</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {/* FAQ 1 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What exactly do I get for $799?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    You get 4 complete course modules (landing pages, funnels, dashboards, AI tools), 
                    weekly live office hours with me, all source code and templates, lifetime Discord access, 
                    and the exact system I use to build $31K+ products in days instead of months.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">Do I need to know how to code?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    Basic HTML/CSS understanding helps, but not required. We use AI tools (Cursor + Claude) 
                    that write 80% of the code for you. If you can follow instructions and aren&apos;t afraid 
                    to Google, you&apos;ll do fine. Many students start with minimal coding knowledge.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">How is this different from other courses?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    This isn&apos;t a course - it&apos;s a 31-day implementation sprint. While others teach theory, 
                    you&apos;ll build 4 real products worth $31K+. I&apos;m not in Dubai making courses; I&apos;m in 
                    Vancouver building daily. You learn by doing, not watching.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What if I can&apos;t attend live sessions?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    All Thursday office hours are recorded with lifetime access. Course modules drop right 
                    after each session, so you can watch and build on your schedule. Most students watch 
                    recordings anyway due to timezone differences.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">Is the price really going up?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    Yes. $799 is the founding price for August only. September cohort pays $1,997, 
                    October pays $2,997. Early adopters get the same content for 60% less because 
                    they&apos;re helping me refine the program.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What&apos;s your refund policy?</h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                    Show up, do the work, build the products. If you complete all 4 modules and can&apos;t 
                    use what you built to make money, I&apos;ll refund you. But honestly, one landing page 
                    sale covers 39X your investment.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-black py-16 sm:py-20">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-red-500"></span>
              <p className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Final Call</p>
              <span className="h-px w-8 sm:w-12 bg-red-500"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white">
              Your Gurus Are Still Talking.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                I&apos;m Building.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Join 30 agency owners who are done with theory and ready to ship. 
              Transform your agency in 31 days or stay stuck forever.
            </p>
            
            <div className="space-y-6">
              <ScrollToPricingButton 
                text="Join Vibe 31 Challenge - $799" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transform hover:scale-105 transition-all duration-300 text-base sm:text-lg lg:text-xl font-bold px-6 sm:px-8 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-red-900/50" 
              />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Starts August 7th</span>
                </div>
                <span className="hidden sm:inline text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Limited to 30 founders</span>
                </div>
                <span className="hidden sm:inline text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Price triples in September</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 font-medium">
                <span className="text-gray-400">Built with</span>{" "}
                <span className="text-red-500">❤️</span>{" "}
                <span className="text-gray-400">in Vancouver by Chris</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}