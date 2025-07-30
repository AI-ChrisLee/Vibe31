# Vibe31 Landing Page Development Plan

## Project Overview
Build a high-converting B2B SaaS landing page for Vibe31 - The Vibe Building Challenge, following the proven 6-section pattern that generates $10M-$833M+ MRR for top companies.

## Major Checkpoints

### Phase 1: Project Setup & Basic Structure
- [ ] Project Setup & Environment Configuration
  - [ ] Initialize Next.js app with TypeScript
  - [ ] Configure shadcn/ui components
  - [ ] Set up Tailwind CSS with custom typography (font-weight 900 for titles, 500 for body)
  - [ ] Create base layout component
  - [ ] Set up responsive breakpoints

### Phase 2: Hero Section Implementation
- [ ] Hero Section - Hook & CTA
  - [ ] Create hero title: "Build $10K products in 48 hours"
  - [ ] Add subtitle expanding the promise
  - [ ] Design product screenshot/interface preview mockup
  - [ ] Implement "Start Your Journey - $799" CTA button
  - [ ] Add responsive design for mobile/desktop

### Phase 3: Trust & Problem Sections
- [ ] Trust Bar - Social Proof
  - [ ] Add "100+ agencies transformed" metric
  - [ ] Display "40K+ YouTube subscribers" badge
  - [ ] Include "$600K agency built" achievement
  - [ ] Create horizontal scrolling logo bar

- [ ] Three Problems Section
  - [ ] Problem 1: "You're trading time for money" (60+ hour weeks)
  - [ ] Problem 2: "Following gurus who don't build" (theory vs practice)
  - [ ] Problem 3: "Can't scale beyond custom work" (agency ceiling)
  - [ ] Use "you" language throughout
  - [ ] Add pain point icons/visuals

### Phase 4: Solution & Transformation
- [ ] Solution - 3 Step Transformation
  - [ ] Step 1: Reverse Engineering
    - [ ] Left: Current chaos description
    - [ ] Right: Visual showing PRD process
  - [ ] Step 2: Build Process
    - [ ] Left: Old 200-hour process
    - [ ] Right: New 48-hour sprint visual
  - [ ] Step 3: Productize Outcome
    - [ ] Left: Results text (90% margins)
    - [ ] Right: Success dashboard mockup
  - [ ] Implement 2-column card layout for each step

### Phase 5: Pricing & FAQ
- [ ] Pricing Section with 3 Tiers
  - [ ] Founding Price: $799 (highlighted)
  - [ ] September Launch: $1,997
  - [ ] October Launch: $2,997
  - [ ] Add "First 100 only" urgency
  - [ ] Include ROI calculator showing 1,277% return

- [ ] FAQ Section - Sales Objections
  - [ ] "What happens after the 29 days?"
  - [ ] "Can I really build in 48 hours?"
  - [ ] "Is this just another course?"
  - [ ] "Do I need coding experience?"
  - [ ] "What if I can't make the Thursday calls?"

### Phase 6: Database Schema
- [ ] Design Supabase Tables & Relationships
  - [ ] Create `orders` table
    - [ ] id (UUID primary key)
    - [ ] email (text)
    - [ ] name (text)
    - [ ] payment_status (enum: pending, completed, failed)
    - [ ] amount (numeric)
    - [ ] stripe_payment_intent_id (text)
    - [ ] created_at (timestamp)
    - [ ] updated_at (timestamp)
  - [ ] Create `email_logs` table
    - [ ] id (UUID primary key)
    - [ ] order_id (foreign key to orders)
    - [ ] email_type (enum: confirmation, reminder, receipt)
    - [ ] sent_at (timestamp)
    - [ ] status (enum: sent, failed, pending)
  - [ ] Set up Row Level Security (RLS) policies
  - [ ] Create database triggers for updated_at timestamps

### Phase 7: Backend Logic
- [x] Payment Processing
  - [x] Set up Stripe integration
    - [x] Configure Stripe webhook endpoint
    - [x] Create payment intent API route
    - [x] Handle successful payment webhook
    - [x] Update order status on payment completion
  - [x] Create server actions for form submission
    - [x] Validate form data
    - [x] Create order record
    - [x] Initialize Stripe payment
- [x] Email Confirmation System
  - [x] Set up Resend email service
    - [x] Configure API keys in environment variables
    - [x] Create email templates (HTML + Text)
    - [x] Design confirmation email with order details
  - [x] Implement email sending logic
    - [x] Send confirmation on successful payment
    - [x] Log email status to database
    - [x] Handle email failures with retry logic

### Phase 8: UI Enhancement
  - [ ] Add loading states during payment processing
  - [ ] Implement error handling with user-friendly messages
  - [ ] Add success animation after payment
  - [ ] Create order confirmation page
- [ ] Visual Polish
  - [ ] Add smooth scroll animations
  - [ ] Implement hover effects on CTAs
  - [ ] Add micro-interactions for engagement
  - [ ] Optimize images and assets
  - [ ] Ensure consistent spacing and typography

### Phase 9: Deployment
- [ ] Vercel Configuration
  - [ ] Set up Vercel project
  - [ ] Configure environment variables
    - [ ] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    - [ ] STRIPE_SECRET_KEY
    - [ ] STRIPE_WEBHOOK_SECRET
    - [ ] RESEND_API_KEY
    - [ ] NEXT_PUBLIC_SUPABASE_URL
    - [ ] SUPABASE_SERVICE_ROLE_KEY
  - [ ] Set up production domains
  - [ ] Configure SSL certificates
- [ ] Production Testing
  - [ ] Test complete payment flow
  - [ ] Verify email delivery
  - [ ] Check mobile responsiveness
  - [ ] Run performance audits
  - [ ] Set up error monitoring

## Success Metrics
- Page load under 3 seconds
- Mobile-first responsive design
- Clear value proposition in hero
- Smooth scroll experience through 6 sections
- All CTAs lead to application form

## Copywriting Notes
Based on vibe31.md, maintain:
- Anti-guru positioning
- Direct, no-BS tone
- Focus on building vs talking
- Emphasize speed and results
- Young agency owner language

## Technical Requirements
- Next.js 15 with App Router
- shadcn/ui components
- Tailwind CSS styling
- Font weights: 900 for headings, 500 for body
- Minimal complexity per CLAUDE.md guidelines

---

**Ready for approval to begin implementation.**