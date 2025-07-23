import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID!;

export async function POST(_request: NextRequest) {
  try {
    // Check if required environment variables are set
    if (!STRIPE_PRICE_ID) {
      throw new Error('STRIPE_PRICE_ID is not configured');
    }
    
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      throw new Error('NEXT_PUBLIC_APP_URL is not configured');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      // Stripe will collect email during checkout
      customer_email: undefined,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    // More detailed error message for debugging
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}