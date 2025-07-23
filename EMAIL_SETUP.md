# Email Deliverability Setup Guide

## Why Emails Go to Spam

Common reasons:
1. Unverified domain
2. Missing SPF/DKIM/DMARC records
3. Generic content that looks like spam
4. No proper sender name
5. Missing unsubscribe options

## Step 1: Domain Verification in Resend

1. **Login to Resend Dashboard**
2. **Add Your Domain**
   - Go to Domains → Add Domain
   - Enter: `vibe31.com` (or your domain)
   - Verify ownership

3. **Add DNS Records**
   Resend will show you records to add. Typically:
   ```
   Type: TXT
   Name: resend._domainkey
   Value: [provided by Resend]
   
   Type: TXT  
   Name: @
   Value: v=spf1 include:amazonses.com ~all
   ```

## Step 2: Configure Email Authentication

Add these DNS records to your domain:

### SPF Record
```
Type: TXT
Name: @
Value: v=spf1 include:amazonses.com include:_spf.resend.com ~all
```

### DMARC Record
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@vibe31.com
```

## Step 3: Update Email Configuration

1. **Update FROM_EMAIL in `/src/lib/resend.ts`:**
   ```typescript
   export const FROM_EMAIL = 'Vibe31 <noreply@vibe31.com>';
   export const REPLY_TO_EMAIL = 'support@vibe31.com';
   ```

2. **Use a subdomain for transactional emails:**
   ```typescript
   export const FROM_EMAIL = 'Vibe31 <noreply@mail.vibe31.com>';
   ```

## Step 4: Email Best Practices

### ✅ DO:
- Use a recognizable sender name
- Include company name in subject
- Add unsubscribe headers
- Use proper HTML/text versions
- Include physical address in footer

### ❌ DON'T:
- Use all caps in subject
- Include too many links
- Use spam trigger words
- Send from generic domains

## Step 5: Test Email Deliverability

1. **Use Mail-Tester**
   - Send test email to: test@mail-tester.com
   - Check your score at mail-tester.com

2. **Check Spam Score**
   - Should be above 8/10 for good deliverability

## Step 6: Monitor Performance

In Resend Dashboard:
- Check bounce rates
- Monitor spam complaints
- Track delivery rates

## Quick Fix for chris@get.vibe31.com

The domain `get.vibe31.com` might not be properly verified. Either:

1. **Option A: Use main domain**
   ```typescript
   export const FROM_EMAIL = 'Chris <chris@vibe31.com>';
   ```

2. **Option B: Verify subdomain**
   - Add `get.vibe31.com` in Resend
   - Add DNS records for subdomain

3. **Option C: Use noreply address**
   ```typescript
   export const FROM_EMAIL = 'Vibe31 <noreply@vibe31.com>';
   export const REPLY_TO_EMAIL = 'chris@vibe31.com';
   ```

## Email Template Improvements

Update your email template footer:
```html
<footer>
  <p>Vibe31 - Building Digital Products</p>
  <p>Vancouver, BC, Canada</p>
  <p>
    <a href="https://vibe31.com/unsubscribe">Unsubscribe</a> | 
    <a href="https://vibe31.com/privacy">Privacy Policy</a>
  </p>
</footer>
```

## Environment Variables

Make sure these are set in Vercel:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM_NAME="Vibe31"
EMAIL_FROM_ADDRESS="noreply@vibe31.com"
EMAIL_REPLY_TO="chris@vibe31.com"
```