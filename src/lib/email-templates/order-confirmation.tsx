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
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '40px',
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '900',
            marginBottom: '20px',
            color: '#000',
          }}
        >
          Order Confirmation
        </h1>
        
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>
          Hi {customerName},
        </p>
        
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          Thank you for your order! We&apos;re excited to confirm that we&apos;ve received your payment.
        </p>
        
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '6px',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid #e5e7eb',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#000',
            }}
          >
            Order Details
          </h2>
          
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: '500' }}>Order ID:</span>{' '}
            <span style={{ color: '#6b7280' }}>{orderId}</span>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: '500' }}>Amount Paid:</span>{' '}
            <span style={{ fontSize: '18px', fontWeight: '700', color: '#059669' }}>
              ${orderAmount.toFixed(2)}
            </span>
          </div>
        </div>
        
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
          If you have any questions about your order, please don&apos;t hesitate to contact us.
        </p>
        
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Best regards,<br />
          Chris Lee<br />
          Founder, Vibe31
        </p>
        
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
          <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#000' }}>
            What happens next?
          </p>
          <ul style={{ fontSize: '14px', color: '#6b7280', paddingLeft: '20px', margin: '0' }}>
            <li>Discord invite coming 3 days before start (Aug 4)</li>
            <li>First live session: August 7, 2PM PST</li>
            <li>Check your email for important updates</li>
          </ul>
        </div>
      </div>
      
      <div
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#9ca3af',
          marginTop: '30px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '20px',
        }}
      >
        <p style={{ margin: '0 0 5px 0' }}>Vibe31 - Transform Your Agency in 31 Days</p>
        <p style={{ margin: '0 0 5px 0' }}>Vancouver, BC, Canada</p>
        <p style={{ margin: '0 0 10px 0' }}>© 2025 Vibe31. All rights reserved.</p>
        <p style={{ margin: '0' }}>
          <a href="https://vibe31.com" style={{ color: '#6b7280', textDecoration: 'none' }}>vibe31.com</a>
          {' | '}
          <a href="mailto:support@vibe31.com" style={{ color: '#6b7280', textDecoration: 'none' }}>support@vibe31.com</a>
        </p>
      </div>
    </div>
  );
};

export const OrderConfirmationEmailText = ({
  customerName,
  orderAmount,
  orderId,
}: OrderConfirmationEmailProps) => {
  return `
Order Confirmation

Hi ${customerName},

Thank you for joining the Vibe Building Challenge! We're excited to confirm that we've received your payment.

Order Details:
- Order ID: ${orderId}
- Amount Paid: $${orderAmount.toFixed(2)}

What happens next?
- Discord invite coming 3 days before start (Aug 4)
- First live session: August 7, 2PM PST
- Check your email for important updates

If you have any questions, please don't hesitate to contact us at support@vibe31.com.

Best regards,
Chris Lee
Founder, Vibe31

--
Vibe31 - Transform Your Agency in 31 Days
Vancouver, BC, Canada
https://vibe31.com

© 2025 Vibe31. All rights reserved.
  `.trim();
};