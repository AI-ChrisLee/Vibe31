import * as React from 'react';

interface OrderConfirmationEmailProps {
  customerName: string;
  orderAmount: number;
  orderId: string;
}

export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  orderAmount,
  orderId,
}) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#000',
      }}
    >
      <p>Hey {customerName},</p>
      
      <p>Just wanted to let you know we got your payment for Vibe31! Super excited to have you join us.</p>
      
      <p>Here&apos;s your order info:<br />
      Order ID: {orderId}<br />
      Amount: ${orderAmount.toFixed(2)}</p>
      
      <p>What&apos;s next:</p>
      <p>• I&apos;ll send you the Discord invite on Aug 4 (3 days before we start)<br />
      • Our first live session is Aug 7 at 2PM PST<br />
      • Keep an eye on your email - I&apos;ll be sending updates</p>
      
      <p>If you have any questions, just reply to this email.</p>
      
      <p>Looking forward to working with you!</p>
      
      <p>Chris<br />
      Founder, Vibe31</p>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '40px' }}>
        --<br />
        Vibe31 - Transform Your Agency in 31 Days<br />
        Vancouver, BC, Canada<br />
        <a href="https://vibe31.com" style={{ color: '#666' }}>vibe31.com</a>
      </p>
    </div>
  );
};

export const OrderConfirmationEmailText = ({
  customerName,
  orderAmount,
  orderId,
}: OrderConfirmationEmailProps) => {
  return `Hey ${customerName},

Just wanted to let you know we got your payment for Vibe31! Super excited to have you join us.

Here's your order info:
Order ID: ${orderId}
Amount: $${orderAmount.toFixed(2)}

What's next:
• I'll send you the Discord invite on Aug 4 (3 days before we start)
• Our first live session is Aug 7 at 2PM PST
• Keep an eye on your email - I'll be sending updates

If you have any questions, just reply to this email.

Looking forward to working with you!

Chris
Founder, Vibe31

--
Vibe31 - Transform Your Agency in 31 Days
Vancouver, BC, Canada
vibe31.com`;
};