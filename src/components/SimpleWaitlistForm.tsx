"use client"

import { useState } from "react"
import { joinWaitlistEmail } from "@/app/actions/waitlist"

export function SimpleWaitlistForm() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
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
      
      const result = await joinWaitlistEmail(formData)
      
      if (result.success) {
        setIsSuccess(true)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Welcome aboard! 🚀
        </h3>
        <p className="text-gray-700 mb-3">
          Thanks for joining!
        </p>
        <p className="text-sm text-gray-600">
          First drop in August: &quot;How I Built ProfilePicAI to $3K MRR in 31 Hours&quot;
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Joining..." : "Get the Playbook"}
        </button>
      </div>
      
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
          I agree to receive weekly emails about building micro SaaS products. Unsubscribe anytime.
        </label>
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </form>
  )
}