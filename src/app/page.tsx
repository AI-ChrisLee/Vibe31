import { CheckoutButton } from "@/components/CheckoutButton"
import { ScrollToPricingButton } from "@/components/ScrollToPricingButton"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Demo Video */}
            <div className="relative max-w-4xl mx-auto mb-8 md:mb-10">
              <div className="relative pb-[56.25%] bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm ">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5JIvYFp4Qvw?start=161"
                  title="Watch Me Build a $10K Product in 48 Hours"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="mb-3 md:mb-4 text-[1.75rem] leading-[1.2] sm:text-3xl sm:leading-[1.15] md:text-4xl md:leading-[1.1] lg:text-5xl lg:leading-[1.1] xl:text-5xl xl:leading-[1.05] font-black tracking-tight text-gray-900">
                Turn Your Agency Skills Into $31K Products in 31 Days Using Vibe Coding
              </h1>
              <p className="mb-6 md:mb-8 text-lg md:text-xl font-medium text-gray-600">
                Limited August cohort <span className="text-red-600 font-bold">(only 3 spots left)</span>
              </p>
              
              <div>
                <ScrollToPricingButton 
                  text="Claim Your Spot Now →" 
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-md transition-all hover:shadow-lg animate-pulse-subtle" 
                />
                <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <p className="text-base font-medium text-gray-600">
                    🔒 100% Secure Checkout
                  </p>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <p className="text-base font-medium text-gray-600">
                    ✓ 30-Day Money Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Bar */}
      <section className="bg-white py-8 sm:py-10 md:py-12 border-b border-gray-100">
        <div className="container">
          <div className="text-center ">
            <p className="text-base font-bold text-red-600 uppercase tracking-wider mb-4">
              Master the Tools That Matter
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {/* Cursor */}
              <div className="flex items-center gap-1.5 sm:gap-2 ">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shadow-sm ">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                  </svg>
                </div>
                <span className="text-base font-bold text-gray-900">Cursor</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Claude */}
              <div className="flex items-center gap-1.5 sm:gap-2 ">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm ">
                  <span className="text-white font-black text-base">A</span>
                </div>
                <span className="text-base font-bold text-gray-900">Claude</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Supabase */}
              <div className="flex items-center gap-1.5 sm:gap-2 ">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm ">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="text-base font-bold text-gray-900">Supabase</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Vercel */}
              <div className="flex items-center gap-1.5 sm:gap-2 ">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shadow-sm ">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                </div>
                <span className="text-base font-bold text-gray-900">Vercel</span>
              </div>
              
              <span className="text-gray-200 hidden sm:inline">•</span>
              
              {/* Resend */}
              <div className="flex items-center gap-1.5 sm:gap-2 ">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-sm ">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-base font-bold text-gray-900">Resend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Problems Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 ">
            <p className="text-base font-bold text-red-600 uppercase tracking-wider mb-3">Is This You?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">You&apos;re Stuck in the Agency Trap</h2>
            
            {/* Qualifier Checklist */}
            <div className="max-w-2xl mx-auto text-left bg-white rounded-xl p-6 sm:p-8 shadow-sm mb-12">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-base font-medium text-gray-700">You run an agency with $10K+ monthly revenue</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-base font-medium text-gray-700">You're tired of trading time for money</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-base font-medium text-gray-700">You want to build products but don't know where to start</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-base font-medium text-gray-700">You're NOT looking for get-rich-quick schemes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Problem 1 */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 ">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">Working Weekends While Friends Party</h3>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  It's Saturday night. You're debugging client code while course creators make $30K selling templates.
                </p>
              </div>
            </div>
            
            {/* Problem 2 */}
            <div className="group">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 ">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">Copy-Pasting Your Own Code... Again</h3>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  You could package this as a $2K template, but instead you're ctrl+c ctrl+v for hourly pay.
                </p>
              </div>
            </div>
            
            {/* Problem 3 */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-sm h-full relative border-2 border-red-200 animate-pulse-border">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 ">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">URGENT</div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-gray-900">Can't Afford That Dream Setup</h3>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  Still saving for that MacBook Pro while product creators your age drive Teslas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - 3 Step Transformation */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 ">
            <p className="text-base font-bold text-green-600 uppercase tracking-wider mb-3">Your Transformation</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">From Overworked Agency to Product Empire</h2>
            <p className="text-lg text-gray-600">Watch your income transform from hourly to passive in just 31 days</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Week 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-black text-lg">1</span>
              </div>
              <span className="text-sm font-bold text-green-600 uppercase">Week 1</span>
              <h3 className="text-lg font-black mb-2 text-gray-900">$10K CRO Package</h3>
              <p className="text-sm text-gray-600 mb-4">High-converting landing pages that sell</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Master conversion psychology</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Ship by Day 7</span>
                </li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-black text-lg">2</span>
              </div>
              <span className="text-sm font-bold text-green-600 uppercase">Week 2</span>
              <h3 className="text-lg font-black mb-2 text-gray-900">$12K AI Dashboard</h3>
              <p className="text-sm text-gray-600 mb-4">Enterprise dashboards with AI features</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">AI-powered analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">First sale expected</span>
                </li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-black text-lg">3</span>
              </div>
              <span className="text-sm font-bold text-green-600 uppercase">Week 3</span>
              <h3 className="text-lg font-black mb-2 text-gray-900">$9K Micro SaaS</h3>
              <p className="text-sm text-gray-600 mb-4">Recurring revenue product</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Monthly recurring revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Complete $31K portfolio</span>
                </li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-black text-lg">4</span>
              </div>
              <span className="text-sm font-bold text-blue-600 uppercase">Week 4</span>
              <h3 className="text-lg font-black mb-2 text-gray-900">Lead Gen Sprint</h3>
              <p className="text-sm text-gray-600 mb-4">Get clients fast with cold outreach</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">10 clients in 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Proven DM templates</span>
                </li>
              </ul>
            </div>

            {/* Week 5 - Graduation */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="text-sm font-bold uppercase opacity-90">Week 5</span>
                <h3 className="text-lg font-black mb-2">Graduation Day</h3>
                <p className="text-sm mb-4 opacity-90">Win $1,000 Cash Prize!</p>
                <div className="space-y-1 text-sm">
                  <p className="font-bold">Scoring:</p>
                  <p className="opacity-90">50% Community</p>
                  <p className="opacity-90">30% Revenue</p>
                  <p className="opacity-90">20% Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 ">
            <p className="text-base font-bold text-red-600 uppercase tracking-wider mb-3">The Investment</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Simple, Transparent Pricing</h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8 text-center text-white">
                <h3 className="text-xl sm:text-2xl font-black mb-2">Vibe Building Challenge</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl line-through text-red-200">$2,997</span>
                  <span className="text-4xl sm:text-5xl font-black">$799</span>
                </div>
                <p className="text-base text-red-100">Save $2,198 (73% OFF) - Founding price</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">3 Power Products = $31K Portfolio</p>
                      <p className="text-base text-gray-600">$10K CRO Package + $12K AI Dashboard + $9K Micro SaaS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Weekly Office Hours + $1,000 Prize</p>
                      <p className="text-base text-gray-600">Every Thursday live support. Top student wins $1,000 on graduation day!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">All Source Code + Lifetime Updates</p>
                      <p className="text-base text-gray-600">Clone my exact systems. Use them forever. Sell them as your own.</p>
                    </div>
                  </div>
                </div>
                
                <CheckoutButton 
                  text="Secure Your Spot Before Price Triples →" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-md transition-all hover:shadow-lg animate-pulse-subtle" 
                />
                
                <div className="text-center space-y-2 pt-4 border-t border-gray-100">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-base font-bold text-green-700">
                      39X ROI from just one sale
                    </p>
                  </div>
                  <p className="text-base text-gray-600 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    100% Secure Payment via Stripe
                  </p>
                </div>
              </div>
            </div>
            
            {/* Calendar */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:self-start">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-center mb-4 sm:mb-6">August - September 2025</h3>
              
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-base">
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
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-1.5 sm:py-2 lg:py-3 font-bold text-base">
                    7
                    <div className="text-base font-medium">Start</div>
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
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-base">14</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">15</div>
                <div className="py-1.5 sm:py-2 lg:py-3">16</div>
                
                {/* Week 4 */}
                <div className="py-1.5 sm:py-2 lg:py-3">17</div>
                <div className="py-1.5 sm:py-2 lg:py-3">18</div>
                <div className="py-1.5 sm:py-2 lg:py-3">19</div>
                <div className="py-1.5 sm:py-2 lg:py-3">20</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-base">21</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">22</div>
                <div className="py-1.5 sm:py-2 lg:py-3">23</div>
                
                {/* Week 5 */}
                <div className="py-1.5 sm:py-2 lg:py-3">24</div>
                <div className="py-1.5 sm:py-2 lg:py-3">25</div>
                <div className="py-1.5 sm:py-2 lg:py-3">26</div>
                <div className="py-1.5 sm:py-2 lg:py-3">27</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-base">28</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">29</div>
                <div className="py-1.5 sm:py-2 lg:py-3">30</div>
                
                {/* September dates */}
                <div className="py-1.5 sm:py-2 lg:py-3">31</div>
                <div className="py-1.5 sm:py-2 lg:py-3">1</div>
                <div className="py-1.5 sm:py-2 lg:py-3">2</div>
                <div className="py-1.5 sm:py-2 lg:py-3">3</div>
                <div className="relative">
                  <div className="bg-black text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-bold text-base">
                    4
                    <div className="text-base font-medium">Grad</div>
                  </div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">5</div>
                <div className="py-1.5 sm:py-2 lg:py-3">6</div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-black rounded"></div>
                <span className="text-base font-medium text-gray-600">Thursday Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base font-bold text-red-600 uppercase tracking-wider mb-3">FAQs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Got Questions?</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {/* FAQ 1 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What exactly do I get for $799?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    You get 4 complete course modules (landing pages, funnels, dashboards, AI tools), 
                    weekly live office hours with me, all source code and templates, lifetime Discord access, 
                    and the exact system I use to build $31K+ products in days instead of months.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">Do I need to know how to code?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    Basic HTML/CSS understanding helps, but not required. We use AI tools (Cursor + Claude) 
                    that write 80% of the code for you. If you can follow instructions and aren&apos;t afraid 
                    to Google, you&apos;ll do fine. Many students start with minimal coding knowledge.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">How is this different from other courses?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    This isn&apos;t a course - it&apos;s a 31-day implementation sprint. While others teach theory, 
                    you&apos;ll build 4 real products worth $31K+. I&apos;m not in Dubai making courses; I&apos;m in 
                    Vancouver building daily. You learn by doing, not watching.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What if I can&apos;t attend live sessions?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    All Thursday office hours are recorded with lifetime access. Course modules drop right 
                    after each session, so you can watch and build on your schedule. Most students watch 
                    recordings anyway due to timezone differences.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">Is the price really going up?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    Yes. $799 is the founding price for August only. September cohort pays $1,997, 
                    October pays $2,997. Early adopters get the same content for 60% less because 
                    they&apos;re helping me refine the program.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 pr-6 sm:pr-8">What&apos;s your refund policy?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-red-500"></span>
              <p className="text-base font-bold text-red-500 uppercase tracking-wider">Final Call</p>
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
                text="Get Instant Access - Only 3 Spots Left →" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-md transition-all hover:shadow-lg animate-pulse-subtle" 
              />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Starts August 7th</span>
                </div>
                <span className="hidden sm:inline text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>$1,000 prize for top student</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-base text-gray-500 font-medium mb-4">
                <span className="text-gray-400">Built with</span>{" "}
                <a href="https://vibe31.com" className="text-red-500 hover:text-red-400 transition-colors">Vibe31.com</a>{" "}
                <span className="text-gray-400">by Chris Lee</span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-base text-gray-400">
                <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                <span className="text-gray-600">•</span>
                <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}