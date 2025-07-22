import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { sendOrderConfirmationEmail } from '@/app/actions/email';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        
        if (session.payment_status === 'paid' && session.customer_email) {
          // Save customer to database
          const { data: customer, error } = await supabase
            .from('customers')
            .upsert({
              email: session.customer_email,
              stripe_customer_id: session.customer as string
            }, {
              onConflict: 'email'
            })
            .select()
            .single();

          if (error) {
            console.error('Error saving customer:', error);
          } else {
            // Send confirmation email
            const amount = session.amount_total ? session.amount_total / 100 : 799;
            
            sendOrderConfirmationEmail({
              orderId: session.id,
              email: session.customer_email,
              name: session.customer_details?.name || 'Customer',
              amount
            }).catch(error => {
              console.error('Failed to send confirmation email:', error);
            });
          }
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