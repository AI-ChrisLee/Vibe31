import { WaitlistForm } from "@/components/WaitlistForm"

export function WaitlistHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-gray-300"></span>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Coming Soon</p>
              <span className="h-px w-8 bg-gray-300"></span>
            </div>
            
            <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
              Build <span className="bg-yellow-200 px-2">3 AI Apps</span>
              <br />
              in 1 Month
            </h1>
            
            <p className="mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto">
              Master the AI tools that are replacing $300K developers. Clone viral apps, ship fast, and get paid.
            </p>
            
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-6 sm:p-8 max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Join the Waitlist
              </h2>
              
              <WaitlistForm />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900 mb-1">$799</p>
                <p className="text-sm text-gray-600">Founding Price</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900 mb-1">30</p>
                <p className="text-sm text-gray-600">Spots Available</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900 mb-1">Aug 7</p>
                <p className="text-sm text-gray-600">Start Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}