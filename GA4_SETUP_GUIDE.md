# GA4 Setup Guide for A/B Test Tracking

## Overview
Your landing page is now set up to track the complete conversion funnel with hero variant A/B testing.

## Events Being Tracked

### 1. Page Views
- **Event**: `page_view` 
- **Parameters**: `hero_variant` (A, B, or C)
- **Purpose**: Track which variant each visitor sees

### 2. Hero Variant Views
- **Event**: `hero_variant_view`
- **Parameters**: `variant_id`, `experiment_name`
- **Purpose**: Specific tracking for A/B test analysis

### 3. CTA Clicks
- **Event**: `cta_click`
- **Parameters**: `hero_variant`, `button_location`, `button_text`
- **Purpose**: Track engagement with call-to-action buttons

### 4. Checkout Started
- **Event**: `begin_checkout`
- **Parameters**: `hero_variant`, `value`, `currency`, `product_name`
- **Purpose**: Track when users click checkout button

### 5. Purchase Completed
- **Event**: `purchase`
- **Parameters**: `hero_variant`, `transaction_id`, `value`, `currency`, `product_name`
- **Purpose**: Track successful Stripe payments

## Setting Up GA4 Dashboard

### 1. Create Custom Dimensions
Go to Admin > Custom definitions > Custom dimensions and create:
- **hero_variant** (Event scope)
- **variant_id** (Event scope)
- **button_location** (Event scope)
- **product_name** (Event scope)

### 2. Create Conversion Events
Go to Admin > Events > Mark as conversion:
- `begin_checkout`
- `purchase`
- `variant_conversion`

### 3. Build A/B Test Dashboard

#### Create a new Exploration:
1. Go to Explore > Create new exploration
2. Add these dimensions:
   - hero_variant
   - Event name
   - Page path

3. Add these metrics:
   - Event count
   - Conversions
   - Purchase revenue
   - Conversion rate

#### Key Reports to Create:

1. **Variant Performance Overview**
   - Dimension: hero_variant
   - Metrics: Users, Sessions, Conversions, Revenue
   - Visualization: Table

2. **Conversion Funnel by Variant**
   - Path: page_view → cta_click → begin_checkout → purchase
   - Breakdown by: hero_variant
   - Visualization: Funnel

3. **Revenue by Variant**
   - Dimension: hero_variant
   - Metric: Purchase revenue
   - Visualization: Bar chart

4. **CTA Click Rate by Variant**
   - Formula: cta_click events / page_view events
   - Breakdown by: hero_variant
   - Visualization: Scorecard

### 4. Real-time Monitoring
Create a real-time report:
- Dimension: hero_variant
- Metrics: Users in last 30 minutes
- Events: hero_variant_view, cta_click, begin_checkout

### 5. Audience Segments
Create audiences for retargeting:
- **High Intent - No Purchase**: Users who triggered begin_checkout but not purchase
- **Variant A Visitors**: Users with hero_variant = A
- **Variant B Visitors**: Users with hero_variant = B
- **Variant C Visitors**: Users with hero_variant = C

## Testing Your Setup

1. Open an incognito window
2. Visit your site and note which variant you see
3. Click the CTA button
4. Go to GA4 Real-time reports
5. Verify you see:
   - Your variant in the hero_variant dimension
   - cta_click event
   - begin_checkout event (if you clicked checkout)

## Analyzing Results

After collecting data for at least 1-2 weeks:

1. **Statistical Significance**: Ensure you have at least 100 conversions per variant
2. **Key Metrics to Compare**:
   - Conversion rate (purchases/users)
   - Average order value
   - CTA click-through rate
   - Time to conversion

3. **Winner Declaration**: Look for >95% confidence level before declaring a winner

## Debugging

If events aren't showing:
1. Check browser console for errors
2. Verify GA4 Measurement ID is correct
3. Use GA4 DebugView (Admin > DebugView)
4. Check middleware is setting cookies (DevTools > Application > Cookies)

## Next Steps

1. Let the test run for at least 2 weeks
2. Monitor daily for any technical issues
3. Once you have a winner, implement it for 100% of traffic
4. Consider testing other elements (pricing, tools section, etc.)