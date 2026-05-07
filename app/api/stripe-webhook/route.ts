import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { generateMarketingSystems, ClientData } from '@/lib/generate-systems';

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
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function formatSystemsEmailHtml(
  client: ClientData,
  contentCalendar: string,
  outreachSequence: string,
  emailNurture: string
): string {
  const firstName = client.name?.split(' ')[0] || 'there';
  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const section = (title: string, content: string, icon: string) =>
    `<div style="margin: 32px 0; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0070f3, #7928ca); padding: 16px 24px;">
        <h2 style="color: white; margin: 0; font-size: 18px;">${icon} ${title}</h2>
      </div>
      <div style="padding: 24px; background: #fafafa;">
        <pre style="white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.7; color: #333; margin: 0;">${escape(content)}</pre>
      </div>
    </div>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 680px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #0070f3, #7928ca); padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">Your 3 Marketing Systems Are Ready</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 16px;">Built for ${escape(client.company || client.name)}</p>
  </div>
  <p style="font-size: 16px; line-height: 1.6;">Hi ${escape(firstName)},</p>
  <p style="font-size: 15px; line-height: 1.6;">Your 3 custom marketing systems are ready to deploy. Copy, customise, and start using them immediately.</p>
  ${section('System 1: 30-Day LinkedIn Content Calendar', contentCalendar, '📅')}
  ${section('System 2: LinkedIn Outreach Sequence', outreachSequence, '🤝')}
  ${section('System 3: Email Nurture Sequence', emailNurture, '📧')}
  <div style="background: #f0f7ff; border-radius: 8px; padding: 20px; margin: 32px 0;">
    <h3 style="margin: 0 0 8px; color: #0070f3; font-size: 16px;">What to do next</h3>
    <ol style="font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
      <li>Pick your favourite post from System 1 and publish it today</li>
      <li>Send 5 to 10 LinkedIn connection requests using System 2</li>
      <li>Set up System 3 in your email tool and activate it</li>
    </ol>
  </div>
  <p style="font-size: 15px; line-height: 1.6;">Questions or want us to customise anything? Just reply to this email.</p>
  <p style="font-size: 15px;">Talk soon,<br><strong>The MarketingAI Team</strong></p>
  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0;">
  <p style="font-size: 12px; color: #888; text-align: center;">
    MarketingAI · Australian Marketing Automation<br>
    <a href="https://marketing-ai-psi-nine.vercel.app" style="color: #888;">marketing-ai-psi-nine.vercel.app</a>
  </p>
</body>
</html>`;
}

async function sendDeliveryEmail(
  client: ClientData,
  contentCalendar: string,
  outreachSequence: string,
  emailNurture: string
) {
  const transporter = getTransporter();
  const html = formatSystemsEmailHtml(client, contentCalendar, outreachSequence, emailNurture);
  const firstName = client.name?.split(' ')[0] || 'there';

  const text = `Hi ${firstName},

Your 3 custom marketing systems are ready.

===== SYSTEM 1: 30-DAY LINKEDIN CONTENT CALENDAR =====
${contentCalendar}

===== SYSTEM 2: LINKEDIN OUTREACH SEQUENCE =====
${outreachSequence}

===== SYSTEM 3: EMAIL NURTURE SEQUENCE =====
${emailNurture}

What to do next:
1. Pick your favourite post from System 1 and publish it today
2. Send 5-10 LinkedIn connection requests using System 2
3. Set up System 3 in your email tool and activate it

Questions? Reply to this email.

The MarketingAI Team`;

  await transporter.sendMail({
    from: '"MarketingAI" <getmarketingai@gmail.com>',
    to: client.email,
    subject: 'Your 3 Marketing Systems Are Ready — MarketingAI',
    html,
    text,
  });
}

async function sendFallbackWelcomeEmail(customerEmail: string, customerName: string) {
  const transporter = getTransporter();
  const firstName = customerName?.split(' ')[0] || 'there';

  await transporter.sendMail({
    from: '"MarketingAI" <getmarketingai@gmail.com>',
    to: customerEmail,
    subject: 'Welcome to MarketingAI — your systems are being built',
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #0070f3, #7928ca); padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to MarketingAI</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">Payment received. Your systems are being built.</p>
  </div>
  <p style="font-size: 16px;">Hi ${firstName},</p>
  <p style="font-size: 15px; line-height: 1.6;">Thanks for your payment. Your 3-system marketing package will be delivered within 24 hours.</p>
  <p style="font-size: 15px; line-height: 1.6;">If you haven't already, please fill out our <a href="https://marketingai-intake-form.vercel.app" style="color: #0070f3;">intake form</a> so we can personalise everything for your business.</p>
  <p style="font-size: 15px;">Talk soon,<br><strong>The MarketingAI Team</strong></p>
</body>
</html>`,
    text: `Hi ${firstName},\n\nThanks for your payment. Your 3-system marketing package will be delivered within 24 hours.\n\nFill out your intake form: https://marketingai-intake-form.vercel.app\n\nThe MarketingAI Team`,
  });
}

async function sendAdminNotification(
  customerEmail: string,
  customerName: string,
  amountAud: number,
  sessionId: string,
  deliveryStatus: 'delivered' | 'fallback' | 'failed'
) {
  const transporter = getTransporter();
  const statusEmoji = { delivered: '✅', fallback: '⚠️', failed: '❌' }[deliveryStatus];
  const statusMsg = {
    delivered: 'Systems auto-generated and delivered to client',
    fallback: 'Auto-generation failed — manual delivery required within 24h',
    failed: 'Delivery failed — urgent manual follow-up required',
  }[deliveryStatus];

  await transporter.sendMail({
    from: '"MarketingAI Webhook" <getmarketingai@gmail.com>',
    to: 'getmarketingai@gmail.com',
    subject: `${statusEmoji} New client: ${customerName} ($${(amountAud / 100).toFixed(2)} AUD)`,
    html: `<h2>New client payment</h2>
<p><strong>${statusEmoji} ${statusMsg}</strong></p>
<table style="border-collapse: collapse; width: 100%;">
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${customerName}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${customerEmail}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Amount</strong></td><td style="padding: 8px; border: 1px solid #ddd;">$${(amountAud / 100).toFixed(2)} AUD</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Session</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sessionId}</td></tr>
  <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Time</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${new Date().toISOString()}</td></tr>
</table>
${deliveryStatus !== 'delivered' ? '<p><strong>Action:</strong> Manually deliver systems to client. Check intake form at <a href="https://marketingai-intake-form.vercel.app">marketingai-intake-form.vercel.app</a></p>' : ''}`,
    text: `New client: ${customerName} (${customerEmail})\nAmount: $${(amountAud / 100).toFixed(2)} AUD\nStatus: ${statusMsg}`,
  });
}

// ---- AUDIT PRODUCT ($49) ----

async function sendAuditAdminNotification(
  customerEmail: string,
  customerName: string,
  sessionId: string,
  metadata: Record<string, string>
) {
  const transporter = getTransporter();

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; white-space: nowrap;">${label}</td><td style="padding: 8px; border: 1px solid #ddd;">${value || '—'}</td></tr>`;

  await transporter.sendMail({
    from: '"MarketingAI Webhook" <getmarketingai@gmail.com>',
    to: 'getmarketingai@gmail.com',
    subject: `💰 New AI Audit purchase: ${customerName} ($49 AUD)`,
    html: `<h2>New AI Marketing Audit purchase</h2>
<p>Deliver a 3-page audit within 24 hours to: <strong>${customerEmail}</strong></p>
<table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
  ${row('Name', customerName)}
  ${row('Email', customerEmail)}
  ${row('Business', metadata.business_name)}
  ${row('Industry', metadata.industry)}
  ${row('Marketing channels', metadata.marketing_channels)}
  ${row('Challenge', metadata.challenge)}
  ${row('Website', metadata.website_url)}
  ${row('Session ID', sessionId)}
  ${row('Time', new Date().toISOString())}
</table>
<p style="background: #fff3cd; padding: 12px; border-radius: 6px;">
  <strong>Action required:</strong> Generate and email the 3-page audit to ${customerEmail} within 24 hours.
  Include: (1) Marketing gaps analysis, (2) 3 actionable recommendations, (3) 30-day priority roadmap.
</p>`,
    text: `New AI Audit: ${customerName} (${customerEmail}) - $49 AUD\n\nBusiness: ${metadata.business_name}\nIndustry: ${metadata.industry}\nChannels: ${metadata.marketing_channels}\nChallenge: ${metadata.challenge}\nWebsite: ${metadata.website_url}\n\nDeliver audit within 24 hours.`,
  });
}

async function sendAuditClientConfirmation(customerEmail: string, customerName: string) {
  const transporter = getTransporter();
  const firstName = customerName?.split(' ')[0] || 'there';

  await transporter.sendMail({
    from: '"MarketingAI" <getmarketingai@gmail.com>',
    to: customerEmail,
    subject: 'Your AI Marketing Audit is being prepared — MarketingAI',
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
  <div style="background: linear-gradient(135deg, #0070f3, #7928ca); padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
    <h1 style="color: white; margin: 0; font-size: 26px;">Your AI Marketing Audit</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">Payment confirmed. Audit incoming within 24 hours.</p>
  </div>
  <p style="font-size: 16px;">Hi ${firstName},</p>
  <p style="font-size: 15px; line-height: 1.6;">Thanks for your payment — we&rsquo;ve received your business details and are preparing your personalised AI Marketing Audit.</p>
  <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 24px 0;">
    <h3 style="margin: 0 0 12px; font-size: 15px;">Your audit will include:</h3>
    <ul style="font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
      <li><strong>Marketing gaps analysis</strong> — specific to your business</li>
      <li><strong>3 actionable recommendations</strong> — concrete steps you can take this week</li>
      <li><strong>30-day priority roadmap</strong> — what to do and when</li>
    </ul>
  </div>
  <p style="font-size: 15px; line-height: 1.6;">Expect your audit in this inbox within 24 hours.</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">
    <strong>Want the full marketing system built for you?</strong> Reply to this email and we&rsquo;ll apply your $49 as credit toward the $149 full setup.
  </p>
  <p style="font-size: 15px;">Talk soon,<br><strong>The MarketingAI Team</strong></p>
  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0;">
  <p style="font-size: 12px; color: #888; text-align: center;">
    MarketingAI · Australian Marketing Automation<br>
    <a href="https://marketing-ai-psi-nine.vercel.app" style="color: #888;">marketing-ai-psi-nine.vercel.app</a>
  </p>
</body>
</html>`,
    text: `Hi ${firstName},\n\nThanks for your payment. Your AI Marketing Audit is being prepared and will be in your inbox within 24 hours.\n\nYour audit includes:\n- Marketing gaps analysis\n- 3 actionable recommendations\n- 30-day priority roadmap\n\nWant the full system built? Reply and we'll apply your $49 as credit.\n\nThe MarketingAI Team`,
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
      metadata?: Record<string, string>;
      amount_total?: number;
      currency?: string;
    };

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || 'New Client';
    const amountTotal = session.amount_total || 0;
    const productType = session.metadata?.product_type;

    console.log(`New payment: ${customerName} <${customerEmail}> — $${(amountTotal / 100).toFixed(2)} AUD — product: ${productType || 'setup'}`);

    if (!customerEmail) {
      console.warn('No customer email in session:', session.id);
      return NextResponse.json({ received: true });
    }

    // Branch: $49 AI Marketing Audit vs $149 full setup
    if (productType === 'audit' || amountTotal === 4900) {
      // Handle AI Marketing Audit purchase
      try {
        await sendAuditClientConfirmation(customerEmail, customerName);
        console.log(`Audit confirmation sent to ${customerEmail}`);
      } catch (err) {
        console.error('Failed to send audit client confirmation:', err);
      }

      try {
        await sendAuditAdminNotification(
          customerEmail,
          customerName,
          session.id,
          session.metadata || {}
        );
        console.log('Audit admin notification sent');
      } catch (err) {
        console.error('Failed to send audit admin notification:', err);
      }
    } else {
      // Handle full marketing system setup ($149)
      const client: ClientData = {
        email: customerEmail,
        name: customerName,
        industry: session.metadata?.industry,
        challenge: session.metadata?.challenge,
        company: session.metadata?.company,
      };

      let deliveryStatus: 'delivered' | 'fallback' | 'failed' = 'fallback';

      try {
        console.log('Generating marketing systems for:', customerEmail);
        const systems = await generateMarketingSystems(client);
        await sendDeliveryEmail(client, systems.contentCalendar, systems.outreachSequence, systems.emailNurture);
        deliveryStatus = 'delivered';
        console.log(`Systems delivered to ${customerEmail}`);
      } catch (genErr) {
        console.error('Generation/delivery failed, sending fallback:', genErr);
        try {
          await sendFallbackWelcomeEmail(customerEmail, customerName);
        } catch (fallbackErr) {
          console.error('Fallback email also failed:', fallbackErr);
          deliveryStatus = 'failed';
        }
      }

      try {
        await sendAdminNotification(customerEmail, customerName, amountTotal, session.id, deliveryStatus);
      } catch (adminErr) {
        console.error('Admin notification failed:', adminErr);
      }
    }
  }

  return NextResponse.json({ received: true });
}
