import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { sendOrderConfirmationEmail } from '@/app/actions/email';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Log environment check on startup
if (!process.env.STRIPE_WEBHOOK_SECRET) {
  console.error('STRIPE_WEBHOOK_SECRET is not set!');
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('SUPABASE_SERVICE_ROLE_KEY is not set!');
}

export async function POST(request: NextRequest) {
  console.log('=== Webhook received ===');
  console.log('Webhook secret exists:', !!webhookSecret);
  
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    console.log('Event type:', event.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }


  try {
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('Processing checkout.session.completed');
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Session ID:', session.id);
        console.log('Customer email (old field):', session.customer_email);
        console.log('Customer details email:', session.customer_details?.email);
        console.log('Payment status:', session.payment_status);
        
        const customerEmail = session.customer_details?.email || session.customer_email;
        
        if (session.payment_status === 'paid' && customerEmail) {
          console.log('Saving customer to database...');
          
          try {
            // Save customer to database
            const { data: customer, error } = await supabaseAdmin
              .from('customers')
              .upsert({
                email: customerEmail,
                name: session.customer_details?.name || 'Customer',
                stripe_customer_id: session.customer as string || null,
                stripe_subscription_id: session.subscription as string || null,
                subscription_status: 'active',
                updated_at: new Date().toISOString()
              }, {
                onConflict: 'email'
              })
              .select()
              .single();

            if (error) {
              console.error('Error saving customer:', error);
              console.error('Error details:', JSON.stringify(error, null, 2));
              throw error;
            }
            
            console.log('Customer saved successfully:', customer);

            // Send confirmation email
            const amount = session.amount_total ? session.amount_total / 100 : 799;
            const customerName = session.customer_details?.name || customer.name || 'there';
            
            console.log('Sending confirmation email...');
            console.log('Customer name:', customerName);
            try {
              await sendOrderConfirmationEmail({
                orderId: session.id,
                email: customerEmail,
                name: customerName,
                amount
              });
              console.log('✓ Confirmation email sent successfully to:', customerEmail);
            } catch (emailError) {
              console.error('Failed to send confirmation email:', emailError);
            }
          } catch (dbError) {
            console.error('Database operation failed:', dbError);
            throw dbError;
          }
        } else {
          console.log('Skipping - payment not completed or no email');
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}