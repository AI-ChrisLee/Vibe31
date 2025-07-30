"use server"

import { createClient } from "@/lib/supabase/server"

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const fullName = formData.get("name") as string

  if (!email || !fullName) {
    return {
      success: false,
      error: "Please fill in all fields"
    }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("waitlist")
    .insert({
      email: email.toLowerCase().trim(),
      full_name: fullName.trim()
    })

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        error: "This email is already on the waitlist"
      }
    }
    
    console.error("Waitlist submission error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again."
    }
  }

  return {
    success: true
  }
}