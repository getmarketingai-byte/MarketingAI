import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2282416/forms/185339817098216933/subscribe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, type } = body;

    if (!email || !name || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();
    params.append('fields[email]', email);
    params.append('fields[name]', name);
    params.append('fields[last_name]', type);
    params.append('ml-submit', '1');
    params.append('anticsrf', 'true');

    const response = await fetch(MAILERLITE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error('MailerLite API error:', response.status);
      return NextResponse.json(
        { error: 'Failed to submit to MailerLite' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}