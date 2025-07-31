"use client"

import { useEffect, useState } from 'react'

interface EmojiParticle {
  id: number
  emoji: string
  x: number
  delay: number
  duration: number
  size: number
}

const emojis = ['🎉', '🚀', '✨', '💫', '🎊', '🔥', '💪', '🎯', '🌟', '🎈']

export function EmojiRain({ isActive }: { isActive: boolean }) {
  const [particles, setParticles] = useState<EmojiParticle[]>([])

  useEffect(() => {
    if (isActive) {
      // Generate particles
      const newParticles: EmojiParticle[] = []
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: Date.now() + i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          x: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 2,
          size: 20 + Math.random() * 20
        })
      }
      setParticles(newParticles)

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([])
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [isActive])

  if (!isActive || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall"
          style={{
            left: `${particle.x}%`,
            top: '-50px',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      {/* Congratulations message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-6xl md:text-8xl font-black text-gray-900 animate-bounce-in"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Nice! 🎉
        </div>
      </div>
    </div>
  )
}