import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Update this with your verified subdomain email
// Using subdomain for transactional emails is best practice
// Format: "Your Name <noreply@subdomain.yourdomain.com>"
export const FROM_EMAIL = 'Vibe31 <noreply@mail.vibe31.com>';
export const REPLY_TO_EMAIL = 'chris@vibe31.com';