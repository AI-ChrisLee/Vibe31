# Membership Landing Page Template

A high-converting landing page template for membership sites, courses, and coaching programs. Built with Next.js 15, TypeScript, Tailwind CSS, and includes A/B testing with GA4 tracking.

## 🚀 Features

- **3 Hero Variations** for A/B testing (Transformation, Community, Method-focused)
- **GA4 Integration** with conversion tracking
- **Stripe Payment** integration
- **GDPR Compliant** cookie consent
- **Mobile Responsive** design
- **High Performance** - optimized for Core Web Vitals
- **Countdown Timer** for urgency
- **FAQ Section** with collapsible items
- **Social Proof** elements throughout

## 📋 Prerequisites

- Node.js 18+ installed
- Stripe account for payments
- Google Analytics 4 property
- Supabase account (for database/auth)
- Vercel account (recommended for hosting)

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
# Clone the repository
git clone [your-repo-url]
cd membership-landing-template

# Install dependencies
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Configure Your Content

Edit the configuration files:

1. **Hero Variants** (`/variants/`):
   - `heroA.config.ts` - Transformation-focused
   - `heroB.config.ts` - Community-focused
   - `heroC.config.ts` - Method-focused

2. **Site Content** (`/src/config/site.config.ts`):
   - Update product name, pricing, features
   - Customize problems, journey, and FAQs
   - Add your tools/features

3. **Metadata** (`/src/app/layout.tsx`):
   - Update title, description, keywords

### 4. Stripe Setup

1. Create a product in Stripe Dashboard
2. Create a price for your product
3. Copy the price ID to `STRIPE_PRICE_ID`
4. Set up webhook endpoint:
   - URL: `https://your-domain.com/api/stripe/webhook`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 🤖 Using Claude to Generate Variations

Use the `claude-prompt.md` file to generate content variations:

1. Copy the prompt template
2. Fill in your specific details
3. Ask Claude to generate:
   - Different hero headlines
   - Problem statements
   - Transformation journeys
   - FAQ answers
   - Social proof elements

Example:
```
"Generate 3 hero headline variations for a [your niche] membership site that helps [target audience] achieve [desired outcome]"
```

## 📊 A/B Testing Setup

The template includes automatic A/B testing:

1. **Variants**: Users are randomly assigned to variant A, B, or C
2. **Tracking**: All conversions are tracked with variant info
3. **Analysis**: Use GA4 to analyze performance

### GA4 Dashboard Setup

1. Create custom dimensions:
   - `hero_variant` (Event scope)
   - `button_location` (Event scope)

2. Create conversion events:
   - `begin_checkout`
   - `purchase`
   - `cta_click`

3. Build reports:
   - Variant Performance (conversions by variant)
   - Conversion Funnel by Variant
   - Revenue by Variant

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fmembership-landing-template&env=NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY,STRIPE_PRICE_ID,STRIPE_WEBHOOK_SECRET,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,NEXT_PUBLIC_GA_MEASUREMENT_ID,NEXT_PUBLIC_APP_URL&envDescription=Required%20environment%20variables&project-name=my-membership-site&repository-name=my-membership-site)

1. Click the button above
2. Fill in environment variables
3. Deploy!

## 📁 Project Structure

```
membership-landing-template/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── config/          # Site configuration
│   └── lib/             # Utilities and helpers
├── variants/            # A/B test variations
├── public/             # Static assets
├── middleware.ts       # A/B test assignment
└── .env.example       # Environment variables template
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Fonts
Update `src/app/layout.tsx` to change fonts.

### Components
All components are in `src/components/` and use shadcn/ui.

## 📈 Analytics Events

The template tracks:
- Page views with variant info
- CTA button clicks
- Checkout initiations
- Successful purchases
- Time on page
- Scroll depth

## 🔒 Security

- GDPR compliant cookie consent
- Secure payment processing with Stripe
- Environment variables for sensitive data
- CSRF protection built-in

## 🆘 Troubleshooting

### Middleware not working
- Ensure `middleware.ts` is in the root directory
- Check Vercel Function logs

### Payments not processing
- Verify Stripe keys are correct
- Check webhook configuration
- Ensure price ID matches

### A/B test not showing variants
- Clear cookies and try incognito mode
- Check browser console for errors
- Verify middleware is running

## 📝 License

MIT License - feel free to use for your projects!

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the claude-prompt.md for content help
3. Open an issue on GitHub

---

Built with ❤️ using Next.js, Tailwind CSS, and Stripe