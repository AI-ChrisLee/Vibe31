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
          The Vibe31 Team
        </p>
      </div>
      
      <div
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#9ca3af',
          marginTop: '20px',
        }}
      >
        <p>© 2025 Vibe31. All rights reserved.</p>
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

Thank you for your order! We're excited to confirm that we've received your payment.

Order Details:
- Order ID: ${orderId}
- Amount Paid: $${orderAmount.toFixed(2)}

If you have any questions about your order, please don't hesitate to contact us.

Best regards,
The Vibe31 Team

© 2025 Vibe31. All rights reserved.
  `.trim();
};