'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Calendar, Users } from 'lucide-react';

export default function SuccessPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className={`max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-700 ${
        showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Success Icon with Animation */}
        <div className={`w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-700 delay-200 ${
          showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}>
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        
        <h1 className={`text-3xl sm:text-4xl font-black mb-3 text-gray-900 transition-all duration-700 delay-300 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          Welcome to Vibe31!
        </h1>
        
        <p className={`text-lg text-gray-600 mb-8 transition-all duration-700 delay-400 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          Your payment was successful. Get ready to transform your agency!
        </p>
        
        {/* Next Steps */}
        <div className={`space-y-4 text-left mb-8 transition-all duration-700 delay-500 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Check Your Email</p>
              <p className="text-sm text-gray-600">Confirmation and welcome details sent</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Mark Your Calendar</p>
              <p className="text-sm text-gray-600">August 7, 2PM PST - We begin!</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Join Discord</p>
              <p className="text-sm text-gray-600">3 days before start (link in email)</p>
            </div>
          </div>
        </div>
        
        <Link href="/" className={`block transition-all duration-700 delay-600 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}