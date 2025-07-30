import Image from "next/image"
import { SimpleWaitlistForm } from "@/components/SimpleWaitlistForm"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/founder-image.png"
                alt="Chris working on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Ship Your First<br />
              <span className="text-gray-600">Micro SaaS</span><br />
              in 48 Hours
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              I build micro SaaS products in 31 hours. Using Cursor + Claude + coffee. 
              No BS methodology, just results.
            </p>
            
            <SimpleWaitlistForm />
            
            <p className="text-sm text-gray-500 mt-6">
              — Chris
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}