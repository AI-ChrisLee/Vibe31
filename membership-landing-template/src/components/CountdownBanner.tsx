'use client';

import { useState, useEffect } from 'react';
import { ScrollToPricingButton } from './ScrollToPricingButton';

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: August 7, 2025, 2PM PST
    const targetDate = new Date('2025-08-07T14:00:00-08:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 border-b border-red-800">
      <div className="container">
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2 px-4">
          {/* Date */}
          <span className="text-red-100 text-xs sm:text-sm font-medium">
            August 7, 2PM PST
          </span>
          
          {/* Countdown */}
          <div className="flex items-center text-white font-mono">
            <span className="text-sm sm:text-base md:text-lg font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-red-300 mx-0.5 sm:mx-1">:</span>
            <span className="text-sm sm:text-base md:text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-red-300 mx-0.5 sm:mx-1">:</span>
            <span className="text-sm sm:text-base md:text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-red-300 mx-0.5 sm:mx-1">:</span>
            <span className="text-sm sm:text-base md:text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          
          {/* CTA */}
          <ScrollToPricingButton 
            text="Join" 
            size="sm"
            className="bg-white hover:bg-red-50 text-red-700 font-bold px-3 sm:px-4 py-1 text-xs sm:text-sm rounded transition-colors shadow-sm" 
          />
        </div>
      </div>
    </div>
  );
}