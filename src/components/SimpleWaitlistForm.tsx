"use client"

import { useState } from "react"
import { joinWaitlist } from "@/app/actions/waitlist"

export function SimpleWaitlistForm() {
  const [step, setStep] = useState<"email" | "details" | "success">("email")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!consent) {
      setError("Please agree to receive marketing emails")
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      const formData = new FormData()
      formData.set("email", email)
      formData.set("name", name)
      
      const result = await joinWaitlist(formData)
      
      if (result.success) {
        setStep("success")
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (step === "email") {
    return (
      <form onSubmit={(e) => { e.preventDefault(); setStep("details") }} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          autoFocus
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
        >
          Continue
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    )
  }

  if (step === "details") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          autoFocus
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:opacity-50"
        />
        
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
            disabled={isSubmitting}
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I agree to receive weekly emails. Unsubscribe anytime.
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
        
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    )
  }

  if (step === "success") {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-xl p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome aboard! 🚀
          </h3>
          <p className="text-gray-700 mb-4">
            Thanks for joining the waitlist!
          </p>
          <p className="text-sm text-gray-600 mb-6">
            First drop in August: &quot;How I Built ProfilePicAI to $3K MRR in 31 Hours&quot;
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return null
}