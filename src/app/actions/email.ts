'use server';

import { resend, FROM_EMAIL } from '@/lib/resend';
import { OrderConfirmationEmail, OrderConfirmationEmailText } from '@/lib/email-templates/order-confirmation';

interface SendEmailOptions {
  orderId: string;
  email: string;
  name: string;
  amount: number;
  retryCount?: number;
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export async function sendOrderConfirmationEmail({
  orderId,
  email,
  name,
  amount,
  retryCount = 0
}: SendEmailOptions): Promise<{ success: boolean; error?: string }> {
  try {

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Order Confirmation - Vibe31',
      react: OrderConfirmationEmail({
        customerName: name,
        orderAmount: amount,
        orderId: orderId
      }),
      text: OrderConfirmationEmailText({
        customerName: name,
        orderAmount: amount,
        orderId: orderId
      })
    });

    if (error) {
      console.error('Error sending email:', error);
      
      // Retry logic
      if (retryCount < MAX_RETRIES) {
        console.log(`Retrying email send (attempt ${retryCount + 1}/${MAX_RETRIES})...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
        
        return sendOrderConfirmationEmail({
          orderId,
          email,
          name,
          amount,
          retryCount: retryCount + 1
        });
      }

      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true };

  } catch (error) {
    console.error('Unexpected error sending email:', error);
    
    // Retry logic for unexpected errors
    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying email send after error (attempt ${retryCount + 1}/${MAX_RETRIES})...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
      
      return sendOrderConfirmationEmail({
        orderId,
        email,
        name,
        amount,
        retryCount: retryCount + 1
      });
    }

    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

