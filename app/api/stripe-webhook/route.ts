import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Stripe webhook signature verification (manual — avoids stripe package dependency)
function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const parts = signature.split(',');
  const timestamp = parts.find((p) => p.startsWith('t='))?.split('=')[1];
  const v1 = parts.find((p) => p.startsWith('v1='))?.split('=')[1];

  if (!timestamp || !v1) return false;

  // Reject events older than 5 minutes
  const tooOld = Math.abs(Date.now() / 1000 - parseInt(timestamp)) > 300;
  if (tooOld) return false;

  const signedPayload = `${timestamp}.${payload}`;
  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(signedPayload, 'utf8')
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(v1, 'hex'), Buffer.from(expectedSig, 'hex'));
}

function getTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'getmarketingai@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'aoeg qisu hzye aqtd',
    },
  });
}

async function sendWelcomeEmail(customerEmail: string, customerName: string) {
  const transporter = getTransporter();

  const firstName = customerName?.split(' ')[0] || 'there';

  await transporter.sendMail({
    from: '"MarketingAI" <getmarketingai@gmail.com>',
    to: customerEmail,
    subject: "Welcome to MarketingAI — here's what happens next",
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #0070f3, #7928ca); padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to MarketingAI</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 16px;">You're in. Let's get your marketing systems built.</p>
  </div>

  <p style="font-size: 16px;">Hi ${firstName},</p>

  <p style="font-size: 16px; line-height: 1.6;">Thanks for your payment — you're now a MarketingAI client. Here's exactly what's happening next:</p>

  <div style="background: #f8f9fa; border-radius: 8px; padding: 24px; margin: 24px 0;">
    <h2 style="margin-top: 0; font-size: 18px; color: #0070f3;">Your 3-System Marketing Package</h2>
    <ol style="font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
      <li><strong>Content Calendar</strong> — 30 days of content planned and ready to post</li>
      <li><strong>Outreach Sequence</strong> — LinkedIn connection + DM sequence to reach your target clients</li>
      <li><strong>Email Nurture</strong> — Automated email follow-up for your leads</li>
    </ol>
  </div>

  <h3 style="font-size: 17px;">What happens now</h3>
  <ol style="font-size: 15px; line-height: 1.8;">
    <li>We'll review your intake form (if you haven't filled it out yet, <a href="https://marketingai-intake-form.vercel.app" style="color: #0070f3;">do it here</a>)</li>
    <li>We'll build your 3 custom marketing systems within 48 hours</li>
    <li>You'll receive them via email, ready to deploy immediately</li>
  </ol>

  <p style="font-size: 15px; line-height: 1.6;">Any questions? Reply directly to this email — we read and respond to everything.</p>

  <p style="font-size: 15px;">Talk soon,<br><strong>The MarketingAI Team</strong></p>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0;">
  <p style="font-size: 12px; color: #888; text-align: center;">
    MarketingAI · Australian Marketing Automation<br>
    <a href="https://marketing-ai-psi-nine.vercel.app" style="color: #888;">marketing-ai-psi-nine.vercel.app</a>
  </p>
</body>
</html>
    `,
    text: `Hi ${firstName},

Thanks for your payment — you're now a MarketingAI client.

Your 3-System Marketing Package includes:
1. Content Calendar — 30 days of content planned and ready to post
2. Outreach Sequence — LinkedIn connection + DM sequence to reach your target clients
3. Email Nurture — Automated email follow-up for your leads

What happens now:
- We'll review your intake form (fill it out at https://marketingai-intake-form.vercel.app if you haven't already)
- We'll build your 3 custom marketing systems within 48 hours
- You'll receive them via email, ready to deploy immediately

Any questions? Reply to this email.

The MarketingAI Team`,
  });
}

async function sendAdminNotification(
  customerEmail: string,
  customerName: string,
  amountAud: number,
  sessionId: string
) {
  const transporter = getTransporter();

  await transporter.sendMail({
    from: '"MarketingAI Webhook" <getmarketingai@gmail.com>',
    to: 'getmarketingai@gmail.com',
    subject: `New client payment: ${customerName} ($${(amountAud / 100).toFixed(2)} AUD)`,
    html: `
<h2>New client payment received</h2>
<table style="border-collapse: collapse; width: 100%; font-family: monospace;">
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${customerName}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${customerEmail}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Amount</strong></td><td style="padding: 8px; border: 1px solid #ddd;">$${(amountAud / 100).toFixed(2)} AUD</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Session ID</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sessionId}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Time</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${new Date().toISOString()}</td></tr>
</table>
<p><strong>Action required:</strong> Deliver the 3-system marketing package to the client within 48 hours.</p>
<p>Check intake form submissions at <a href="https://marketingai-intake-form.vercel.app">marketingai-intake-form.vercel.app</a></p>
    `,
    text: `New client payment received

Name: ${customerName}
Email: ${customerEmail}
Amount: $${(amountAud / 100).toFixed(2)} AUD
Session: ${sessionId}
Time: ${new Date().toISOString()}

Action: Deliver 3-system marketing package within 48 hours.`,
  });
}

// GET — health check
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: '/api/stripe-webhook' });
}

// POST — Stripe webhook
export async function POST(request: NextRequest) {
  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: 'Failed to read body' }, { status: 400 });
  }

  const signature = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Verify signature if secret is configured
  if (webhookSecret) {
    if (!signature) {
      return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
    }
    try {
      const valid = verifyStripeSignature(rawBody, signature, webhookSecret);
      if (!valid) {
        console.error('Stripe signature verification failed');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
      }
    } catch (err) {
      console.error('Signature verification error:', err);
      return NextResponse.json({ error: 'Signature error' }, { status: 400 });
    }
  } else {
    console.warn('STRIPE_WEBHOOK_SECRET not set — skipping signature verification');
  }

  let event: { type: string; data: { object: Record<string, unknown> } };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  console.log(`Stripe webhook received: ${event.type}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as {
      id: string;
      customer_details?: { email?: string; name?: string };
      amount_total?: number;
      currency?: string;
    };

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'New Client';
    const amountTotal = session.amount_total || 14900; // default $149 AUD in cents

    console.log(`New payment: ${customerName} <${customerEmail}> — ${amountTotal} ${session.currency}`);

    if (customerEmail) {
      try {
        await Promise.all([
          sendWelcomeEmail(customerEmail, customerName),
          sendAdminNotification(customerEmail, customerName, amountTotal, session.id),
        ]);
        console.log(`Welcome email sent to ${customerEmail}`);
      } catch (emailErr) {
        console.error('Email sending failed:', emailErr);
        // Don't return error — Stripe would retry and cause duplicate emails
        // Log the failure and return 200 to acknowledge the event
      }
    } else {
      console.warn('No customer email in session:', session.id);
    }
  }

  return NextResponse.json({ received: true });
}
