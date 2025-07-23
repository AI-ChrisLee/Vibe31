import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Update this with your verified domain email
// Format: "Your Name <noreply@yourdomain.com>"
export const FROM_EMAIL = 'Vibe31 <noreply@vibe31.com>';
export const REPLY_TO_EMAIL = 'support@vibe31.com';