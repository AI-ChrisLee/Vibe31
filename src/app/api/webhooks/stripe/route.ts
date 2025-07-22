import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import { sendOrderConfirmationEmail } from '@/app/actions/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err}`)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = await createClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        if (session.payment_status === 'paid') {
          const customerId = session.customer as string
          const customerEmail = session.customer_email || session.customer_details?.email
          const subscriptionId = session.subscription as string
          
          if (!customerEmail) {
            console.error('No customer email found in session')
            return NextResponse.json({ error: 'No customer email' }, { status: 400 })
          }
          
          // First, try to update existing customer or create new one
          const { data: existingCustomer } = await supabase
            .from('customers')
            .select('id')
            .eq('email', customerEmail)
            .single()
          
          if (existingCustomer) {
            // Update existing customer
            const { error } = await supabase
              .from('customers')
              .update({
                stripe_customer_id: customerId,
                stripe_subscription_id: subscriptionId,
                subscription_status: 'active',
                updated_at: new Date().toISOString()
              })
              .eq('email', customerEmail)
              
            if (error) {
              console.error('Error updating customer:', error)
              throw error
            }
          } else {
            // Create new customer
            const { error } = await supabase
              .from('customers')
              .insert({
                email: customerEmail,
                stripe_customer_id: customerId,
                stripe_subscription_id: subscriptionId,
                subscription_status: 'active'
              })
              
            if (error) {
              console.error('Error creating customer:', error)
              throw error
            }
          }

          console.log(`Payment successful for ${customerEmail}`)
          
          // Send confirmation email
          const emailResult = await sendOrderConfirmationEmail({
            orderId: session.id,
            email: customerEmail,
            name: session.customer_details?.name || 'Customer',
            amount: (session.amount_total || 0) / 100 // Convert from cents to dollars
          })
          
          if (!emailResult.success) {
            console.error('Failed to send confirmation email:', emailResult.error)
            // Don't throw error - we don't want to fail the webhook if email fails
          } else {
            console.log('Confirmation email sent successfully')
          }
        }
        break
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Get customer email from Stripe
        const customer = await stripe.customers.retrieve(customerId)
        const customerEmail = (customer as Stripe.Customer).email

        // Update subscription status in Supabase
        const status = subscription.status === 'active' ? 'active' : 'inactive'
        
        const { error } = await supabase
          .from('customers')
          .update({
            subscription_status: status,
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating subscription status:', error)
          throw error
        }

        console.log(`Subscription ${status} for ${customerEmail}`)
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        console.log(`Invoice payment succeeded: ${invoice.id}`)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string
        
        // Update subscription status to 'past_due'
        const { error } = await supabase
          .from('customers')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString()
          })
          .eq('stripe_customer_id', customerId)

        if (error) {
          console.error('Error updating payment failed status:', error)
        }
        
        console.log(`Invoice payment failed: ${invoice.id}`)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}