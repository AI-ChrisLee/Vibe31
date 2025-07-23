# Vibe31 Landing Page

Transform Your Agency in 31 Days - A comprehensive challenge to build and scale your digital agency.

## Features

- **Stripe Payment Integration**: Secure checkout with discount code support
- **Email Automation**: Order confirmation emails via Resend
- **Database**: Customer management with Supabase
- **Responsive Design**: Mobile-optimized with Tailwind CSS
- **Countdown Timer**: Live countdown to launch date
- **Smooth Animations**: Scroll animations and micro-interactions

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Stripe (Payment Processing)
- Supabase (Database)
- Resend (Email Service)
- Vercel (Deployment)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.local.example .env.local`
4. Update `.env.local` with your API keys
5. Run development server: `npm run dev`

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_PRICE_ID=

# Resend
RESEND_API_KEY=

# App
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Stripe Webhook Setup

1. Add webhook endpoint in Stripe Dashboard: `https://yourdomain.com/api/stripe/webhook`
2. Select event: `checkout.session.completed`
3. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

## Local Development

```bash
# Start dev server
npm run dev

# Test Stripe webhooks locally
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Remember to add all environment variables in Vercel dashboard.

## License

© 2025 Vibe31. All rights reserved.