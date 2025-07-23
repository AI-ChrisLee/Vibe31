# Deployment Guide for Vibe31 Landing Page

## Prerequisites
1. Vercel account
2. Stripe account (with live keys)
3. Supabase project
4. Resend account

## Environment Variables

Add these to your Vercel project settings:

### Stripe Configuration
```
STRIPE_SECRET_KEY=sk_live_... (your live secret key)
STRIPE_WEBHOOK_SECRET=whsec_... (from Stripe webhook settings)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... (your live publishable key)
STRIPE_PRICE_ID=price_... (your product price ID)
```

### App Configuration
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Email Configuration
```
RESEND_API_KEY=your-resend-api-key
```

## Stripe Webhook Setup

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
4. Copy the webhook secret and add it as `STRIPE_WEBHOOK_SECRET`

## Deployment Steps

1. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add Environment Variables:**
   - Go to Vercel dashboard → Your project → Settings → Environment Variables
   - Add all variables listed above

3. **Configure Domain:**
   - Add your custom domain in Vercel settings
   - Update `NEXT_PUBLIC_APP_URL` with your domain

4. **Test Payment Flow:**
   - Use Stripe test mode first
   - Switch to live keys when ready

## Troubleshooting

### 500 Error on Checkout
- Check all environment variables are set
- Verify Stripe price ID exists
- Ensure you're using matching test/live keys

### Webhook Not Working
- Verify webhook secret is correct
- Check webhook endpoint URL
- Look at Stripe webhook logs for errors

### Email Not Sending
- Verify Resend API key
- Check email domain is verified in Resend