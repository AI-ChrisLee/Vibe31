'use client';

import { Button } from "@/components/ui/button";

interface ScrollToPricingButtonProps {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  onClick?: () => void;
}

export function ScrollToPricingButton({ text, className, size = "lg", variant = "default", onClick }: ScrollToPricingButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      const yOffset = -60; // Account for fixed banner
      const y = pricingSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Button 
      size={size} 
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}