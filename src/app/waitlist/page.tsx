import Image from "next/image"
import { SimpleWaitlistForm } from "@/components/SimpleWaitlistForm"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          {/* Profile Section */}
          <div className="mb-8">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full shadow-lg mb-4">
              <Image
                src="/founder-image.png"
                alt="Chris Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@aichrislee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">YouTube</span>
              </a>
              
              <a
                href="https://x.com/aichrislee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">X</span>
              </a>
            </div>
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