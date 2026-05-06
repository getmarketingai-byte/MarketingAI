import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API = 'https://connect.mailerlite.com/api';

function getMailerLiteApiKey(): string {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) {
    throw new Error('MAILERLITE_API_KEY environment variable is not set');
  }
  return key;
}

export async function POST(request: NextRequest) {
  try {
    const MAILERLITE_API_KEY = getMailerLiteApiKey();
    const body = await request.json();
    const { email, industry, timeline } = body;

    if (!email || !industry || !timeline) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update subscriber fields: industry -> company, timeline -> state
    const mlResponse = await fetch(
      `${MAILERLITE_API}/subscribers/${encodeURIComponent(email)}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          fields: { company: industry, state: timeline }
        }),
      }
    );

    if (!mlResponse.ok) {
      console.error('MailerLite update failed:', mlResponse.status);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Checklist submit error:', error);
    return NextResponse.json({ success: true });
  }
}
