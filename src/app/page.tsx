import { CheckoutButton } from "@/components/CheckoutButton"
import { ScrollToPricingButton } from "@/components/ScrollToPricingButton"
import { HeroSection } from "@/components/HeroSection"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Tools Bar */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 border-y border-gray-200">
        <div className="container">
          <div className="text-center ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              The AI Stack That Builds Everything
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">AI writes <span className="bg-yellow-200 px-1">80% of your code</span></p>
            <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {/* Cursor */}
              <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-700">Cursor</span>
              </div>
              
              <span className="text-gray-500 text-lg font-medium hidden sm:inline">+</span>
              
              {/* Claude */}
              <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
                  <span className="text-gray-700 font-semibold text-lg">A</span>
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-700">Claude</span>
              </div>
              
              <span className="text-gray-500 text-lg font-medium hidden sm:inline">+</span>
              
              {/* Supabase */}
              <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-700">Supabase</span>
              </div>
              
              <span className="text-gray-500 text-lg font-medium hidden sm:inline">+</span>
              
              {/* Vercel */}
              <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-700">Vercel</span>
              </div>
              
              <span className="text-gray-500 text-lg font-medium hidden sm:inline">+</span>
              
              {/* Stripe */}
              <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-gray-300 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-700">Stripe</span>
              </div>
            </div>
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-gray-900 font-medium">
                No complexity. No BS. Just tools that work.
              </p>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                This exact stack has built 50+ live AI apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">The Problem</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-gray-900">Still Following Tutorial Hell?</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                You watch coding YouTubers. Buy courses. Join bootcamps.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                But while they&apos;re teaching theory, <span className="bg-yellow-200 px-1">real builders are shipping AI apps that go viral overnight</span>.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="font-black text-xl text-gray-900 mb-6">The brutal truth:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700"><strong className="text-gray-900">They teach concepts.</strong> We clone winners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700"><strong className="text-gray-900">They promise skills.</strong> We promise shipped apps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-700"><strong className="text-gray-900">They talk about AI.</strong> We use AI to build.</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-8 mb-12">
              <h3 className="font-black text-xl text-gray-900 mb-4">Here&apos;s what actually works:</h3>
              <p className="text-lg text-gray-700 mb-4">
                Find viral apps → Reverse engineer → <span className="bg-yellow-200 px-1">Clone in 48 hours</span> → Ship and iterate
              </p>
              <p className="text-lg font-bold text-gray-900">
                No inventing. Just proven formulas that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Build Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16 ">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">What You&apos;ll Build</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-gray-900">Real Apps, Real Results</h2>
            <p className="text-xl text-gray-600">Three viral AI apps in 31 days. Each worth <span className="bg-yellow-200 px-1">$20-40K</span>.</p>
          </div>
          <div className="max-w-6xl mx-auto space-y-16">
            {/* App 1 - AI Headshot Generator */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-semibold text-gray-700">1</span>
                  <span>Days 1-7</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">AI Headshot Generator</h3>
                <p className="text-gray-600 mb-6">Clone HeadshotPro or ProfilePicture.ai. Everyone needs professional headshots - charge $29-49 per set.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Upload 10-15 selfies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>AI generates 40+ professional headshots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Multiple style options (corporate, casual, creative)</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500">Target clone:</p>
                  <p className="text-lg font-semibold text-gray-900">$40K+ MRR</p>
                </div>
              </div>
              <div className="order-2 bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Mock UI */}
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional AI Headshots</h4>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <button className="px-3 py-1 bg-gray-900 text-white text-sm rounded-md">Corporate</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Casual</button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">Creative</button>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium">Generate Headshots</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App 2 - AI Viral Shorts Generator */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Mock UI */}
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Viral Shorts Creator</h4>
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <div className="aspect-video bg-gray-300 rounded mb-3 animate-pulse"></div>
                      <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">AI Clip Detection</span>
                        <span className="text-sm text-green-600">✓ 5 clips found</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Auto Captions</span>
                        <span className="text-sm text-green-600">✓ Ready</span>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium">Generate Viral Clips</button>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-semibold text-gray-700">2</span>
                  <span>Days 8-14</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">AI Viral Shorts Generator</h3>
                <p className="text-gray-600 mb-6">Clone OpusClip or Vidyo.ai. Turn long videos into viral shorts automatically.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Video upload and processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>AI-powered clip selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Auto-generated captions and viral hooks</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500">Target clone:</p>
                  <p className="text-lg font-semibold text-gray-900">$1M+ ARR</p>
                </div>
              </div>
            </div>
            
            {/* App 3 - AI Voice Note Transcriber */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-semibold text-gray-700">3</span>
                  <span>Days 15-21</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">AI Voice Note Transcriber</h3>
                <p className="text-gray-600 mb-6">Clone Whisper Transcription or TurboScribe. Everyone hates typing - charge $10-20/month.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Record or upload audio files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Instant accurate transcription</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">✓</span>
                    <span>Export to Notion, Google Docs, or plain text</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-4">
                  <p className="text-sm font-medium text-gray-500">Target clone:</p>
                  <p className="text-lg font-semibold text-gray-900">$20K+ MRR</p>
                </div>
              </div>
              <div className="order-2 bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Mock UI */}
                <div className="bg-gray-900 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Voice to Text AI</h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 text-center">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <p className="text-sm text-gray-600">Drop audio files or click to record</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3 mb-4">
                      <p className="text-sm text-gray-700 line-clamp-3">&quot;This is a sample transcription of your voice note with perfect accuracy...&quot;</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-md text-sm font-medium">Export to Notion</button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md text-sm font-medium">Copy Text</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 ">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Challenge Overview</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900">31 Days to <span className="bg-yellow-200 px-1">3 AI Apps</span></h2>
            <p className="text-xl text-gray-600 mb-8">A 31-day intensive where you&apos;ll build 3 proven AI apps that companies pay $50K for - using nothing but AI tools.</p>
            
            {/* Key Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Dates</p>
                <p className="font-black text-gray-900">Aug 7 - Aug 28</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Format</p>
                <p className="font-black text-gray-900">Live Thursdays 2PM PST</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Investment</p>
                <p className="font-black text-gray-900">$799</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Community</p>
                <p className="font-black text-gray-900">Daily Support</p>
              </div>
            </div>
            
            <div className="text-left bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">What You Get:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span>Live Thursdays at 2PM PST</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span>Course modules after each live session</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span>Daily Whop community access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span>Direct DM access to Chris</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">✓</span>
                  <span>All source code included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">The Founder</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900">Why Listen to Me?</h2>
            
            {/* Founder Image */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/founder-image.png" 
                alt="Chris Lee - Founder" 
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
              />
            </div>
            
            <div className="text-left bg-white rounded-xl p-8 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                Built a <strong>$600K dev agency</strong>. Hit <strong>$40K/month</strong>. Had <strong>40K YouTube subscribers</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Then I discovered something game-changing:
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Using AI, I could build in <span className="bg-yellow-200 px-1">2 days</span> what my team built in 2 months.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                So I quit everything. Moved to Vancouver. Now I clone viral apps daily.
              </p>
              <p className="text-lg text-gray-700">
                <strong>The difference?</strong> I turned chaos into system. Random ideas into proven clones.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                That&apos;s what I teach. Not theory. The exact reverse engineering system that works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="section bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-12 md:mb-16 ">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Investment</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900">Only <span className="bg-yellow-200 px-1">30 Founding Members</span></h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gray-900 p-6 sm:p-8 text-center text-white">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Founding Member Price</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-semibold">$799</span>
                  <span className="text-base text-gray-400 line-through">$1,299</span>
                </div>
                <p className="text-base text-gray-400">Goes to $1,299 after 30 members</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Direct DM Access to Chris</p>
                      <p className="text-base text-gray-600">Get help directly when you&apos;re stuck</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Weekly Build Competitions</p>
                      <p className="text-base text-gray-600">Compete and learn from other builders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Weekly Course Drops</p>
                      <p className="text-base text-gray-600">New modules every Thursday after live sessions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Client Acquisition Course ($297 value)</p>
                      <p className="text-base text-gray-600">Get your first client in the first week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-gray-900">Money-Back Guarantee</p>
                      <p className="text-base text-gray-600">Build 1 app or get full refund</p>
                    </div>
                  </div>
                </div>
                
                <CheckoutButton 
                  text="Claim Your Spot →" 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium px-8 py-4 rounded-lg shadow-md transition-all hover:shadow-lg" 
                />
                
                <div className="text-center space-y-2 pt-4 border-t border-gray-100">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-base font-bold text-green-700">
                      Build 1 App or Money Back
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
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-center mb-4 sm:mb-6">August 2025</h3>
              
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
                
                {/* Week 2 - Aug 11-17 */}
                <div className="py-1.5 sm:py-2 lg:py-3">3</div>
                <div className="py-1.5 sm:py-2 lg:py-3">4</div>
                <div className="py-1.5 sm:py-2 lg:py-3">5</div>
                <div className="py-1.5 sm:py-2 lg:py-3">6</div>
                <div className="relative">
                  <div className="bg-gray-900 text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-1.5 sm:py-2 lg:py-3 font-medium text-base">
                    7
                    <div className="text-xs font-medium">Start</div>
                  </div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">8</div>
                <div className="py-1.5 sm:py-2 lg:py-3">9</div>
                
                {/* Week 3 - Aug 18-24 */}
                <div className="py-1.5 sm:py-2 lg:py-3">10</div>
                <div className="py-1.5 sm:py-2 lg:py-3">11</div>
                <div className="py-1.5 sm:py-2 lg:py-3">12</div>
                <div className="py-1.5 sm:py-2 lg:py-3">13</div>
                <div className="relative">
                  <div className="bg-gray-900 text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-medium text-base">14</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">15</div>
                <div className="py-1.5 sm:py-2 lg:py-3">16</div>
                
                {/* Week 4 - Aug 25-28 */}
                <div className="py-1.5 sm:py-2 lg:py-3">17</div>
                <div className="py-1.5 sm:py-2 lg:py-3">18</div>
                <div className="py-1.5 sm:py-2 lg:py-3">19</div>
                <div className="py-1.5 sm:py-2 lg:py-3">20</div>
                <div className="relative">
                  <div className="bg-gray-900 text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-medium text-base">21</div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">22</div>
                <div className="py-1.5 sm:py-2 lg:py-3">23</div>
                
                {/* Final days */}
                <div className="py-1.5 sm:py-2 lg:py-3">24</div>
                <div className="py-1.5 sm:py-2 lg:py-3">25</div>
                <div className="py-1.5 sm:py-2 lg:py-3">26</div>
                <div className="py-1.5 sm:py-2 lg:py-3">27</div>
                <div className="relative">
                  <div className="bg-gray-900 text-white rounded sm:rounded-lg py-1.5 sm:py-2 lg:py-3 font-medium text-base">
                    28
                    <div className="text-xs font-medium">Grad</div>
                  </div>
                </div>
                <div className="py-1.5 sm:py-2 lg:py-3">29</div>
                <div className="py-1.5 sm:py-2 lg:py-3">30</div>
                
                {/* Last days of August */}
                <div className="py-1.5 sm:py-2 lg:py-3">31</div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-4 h-4 bg-gray-900 rounded"></div>
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
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">FAQs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {/* FAQ 1 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">I&apos;m too busy. How much time does this really take?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    10-15 hours per week. That&apos;s 2 hours a day. AI does 80% of the coding, so you&apos;re mostly guiding and learning. 
                    Many members build while commuting or during lunch breaks. If you can scroll social media for 2 hours, 
                    you can build AI apps that actually make money.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">Do I need to know how to code?</h3>
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
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">$799 seems expensive. Is it worth it?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    One AI app can make $5-20K/month. You&apos;re building 3. Compare to bootcamps at $15K or courses at $3K 
                    that only teach theory. You get direct DM access to me, all source code, and a money-back guarantee 
                    if you don&apos;t ship at least one app. The real question: can you afford NOT to learn this?
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">What if AI tools can&apos;t actually build real apps?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    I&apos;ve built 50+ live AI apps using this exact method. Companies are paying $10-50K for these apps right now. 
                    The difference is knowing HOW to use AI tools properly. That&apos;s what I teach - the exact prompts, workflows, 
                    and patterns that turn AI into your personal dev team.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">I&apos;ve tried courses before and never finished. Why is this different?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    This isn&apos;t a course - it&apos;s a build-along challenge. You&apos;re shipping real apps every week with daily 
                    accountability in our Whop community. Direct DM access to me means you never get stuck. Plus, 
                    you&apos;re building apps people actually pay for, not todo lists. Money is the best motivator.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer bg-gradient-to-b from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 ">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">What if I fail? What&apos;s your refund policy?</h3>
                  <svg className="w-5 h-5 text-gray-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:pb-6 pt-2">
                  <p className="text-base font-medium text-gray-600 leading-relaxed">
                    Simple: Build 1 working AI app or get your full $799 back. Show up to sessions, submit weekly builds, 
                    and follow the system. If you still can&apos;t ship one app, I&apos;ll refund everything. No risk, only results. 
                    I&apos;m that confident in this system because it works.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-20">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-8 sm:w-12 bg-gray-600"></span>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Final CTA</p>
              <span className="h-px w-8 sm:w-12 bg-gray-600"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white">
              Ready to Build<br />
              <span className="bg-yellow-200 text-gray-900 px-2">
                3 AI Apps in 31 Days?
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
              <ol className="text-left inline-block space-y-3 text-lg text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium">1.</span>
                  <span>Click &quot;Apply for Vibe31&quot; below</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium">2.</span>
                  <span>Complete payment ($799 founding price)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium">3.</span>
                  <span>Receive Whop community link 3 days before start</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium">4.</span>
                  <span>Start building August 7</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-500 font-medium">5.</span>
                  <span>Graduate with 3 live AI apps</span>
                </li>
              </ol>
            </div>
            
            <div className="space-y-6">
              <ScrollToPricingButton 
                text="Apply for Vibe31 →" 
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 text-base sm:text-lg font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-md transition-all hover:shadow-lg" 
              />
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-base text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>August 7 - August 28</span>
                </div>
                <span className="hidden sm:inline text-gray-700">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Founding price: $799</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-500 mt-8">
              <em>After 30 members: Price goes to $1,299. No direct access. Don&apos;t wait.</em>
            </p>
            <div className="mt-16 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap items-center justify-center gap-4 text-base text-gray-500">
                <a href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                <span className="text-gray-700">•</span>
                <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}