import Image from "next/image"
import { SimpleWaitlistForm } from "@/components/SimpleWaitlistForm"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          {/* Image */}
          <div className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl mb-8">
            <Image
              src="/founder-image.png"
              alt="Chris working on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Ship Your First<br />
            <span className="bg-yellow-300 px-2">Micro SaaS</span><br />
            in 48 Hours
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
            I build micro SaaS products in 31 hours. Using Cursor + Claude + coffee. 
            No BS methodology, just results.
          </p>
          
          <div className="max-w-md mx-auto">
            <SimpleWaitlistForm />
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            — Chris
          </p>
        </div>
      </div>
    </div>
  )
}