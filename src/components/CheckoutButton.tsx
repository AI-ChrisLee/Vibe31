'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { trackConversion, type VariantType } from '@/lib/analytics';

interface CheckoutButtonProps {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

// Helper to get variant from cookie
function getVariantFromCookie(): VariantType {
  if (typeof window === 'undefined') return 'C'
  
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === 'hero-variant' && ['A', 'B', 'C'].includes(value)) {
      return value as VariantType
    }
  }
  return 'C' // Default to original
}

export function CheckoutButton({ text, className, size = "lg", variant = "default" }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    
    // Track conversion
    const heroVariant = getVariantFromCookie();
    trackConversion(heroVariant, 'checkout_button_clicked');
    
    try {
      const response = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setError('Something went wrong. Please try again.');
      setLoading(false);
      
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <div className="relative">
      <Button 
        size={size} 
        variant={variant}
        className={`${className} ${loading ? 'opacity-90' : ''}`}
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          text
        )}
      </Button>
      
      {error && (
        <p className="absolute top-full mt-2 text-sm text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
}