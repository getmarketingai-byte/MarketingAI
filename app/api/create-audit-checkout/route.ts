import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, industry, marketingChannels, challenge, websiteUrl, email } = body;

    if (!businessName || !industry || !marketingChannels || !challenge || !email) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY not configured');
      return NextResponse.json({ error: 'Payment configuration error.' }, { status: 500 });
    }

    const baseUrl = 'https://marketing-ai-psi-nine.vercel.app';

    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('payment_method_types[0]', 'card');
    params.append('line_items[0][price_data][currency]', 'aud');
    params.append('line_items[0][price_data][product_data][name]', 'AI Marketing Audit');
    params.append(
      'line_items[0][price_data][product_data][description]',
      'Personalised 3-page marketing audit: gaps analysis, 3 actionable recommendations, and 30-day roadmap. Delivered within 24 hours.'
    );
    params.append('line_items[0][price_data][unit_amount]', '4900');
    params.append('line_items[0][quantity]', '1');
    params.append('metadata[product_type]', 'audit');
    params.append('metadata[business_name]', businessName.slice(0, 500));
    params.append('metadata[industry]', industry.slice(0, 500));
    params.append('metadata[marketing_channels]', marketingChannels.slice(0, 500));
    params.append('metadata[challenge]', challenge.slice(0, 500));
    params.append('metadata[website_url]', (websiteUrl || '').slice(0, 500));
    params.append('customer_email', email);
    params.append('success_url', `${baseUrl}/audit/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append('cancel_url', `${baseUrl}/audit`);

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const stripeError = await response.json();
      console.error('Stripe error creating checkout session:', stripeError);
      return NextResponse.json(
        { error: stripeError?.error?.message || 'Payment setup failed. Please try again.' },
        { status: 500 }
      );
    }

    const session = await response.json();
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('create-audit-checkout error:', err);
    return NextResponse.json({ error: 'Internal error. Please try again.' }, { status: 500 });
  }
}
