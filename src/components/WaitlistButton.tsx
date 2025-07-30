"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaitlistModal } from "./WaitlistModal"

interface WaitlistButtonProps {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function WaitlistButton({ text, className, size = 'md' }: WaitlistButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={cn(className)}
      >
        {text}
      </button>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}