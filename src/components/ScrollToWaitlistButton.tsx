'use client'

import { cn } from '@/lib/utils'

interface ScrollToWaitlistButtonProps {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function ScrollToWaitlistButton({ text, className, size = 'md' }: ScrollToWaitlistButtonProps) {
  const scrollToWaitlist = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToWaitlist}
      className={cn(className)}
    >
      {text}
    </button>
  )
}