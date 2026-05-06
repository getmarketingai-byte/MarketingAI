import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API = 'https://connect.mailerlite.com/api';
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZjRhMDY4NzExZjYxZGQzNmQ3MTMwM2E0ZDQ1ZGI5NzYwNmI4MzA0NDEzYmE0Mzk3MDVmZmMxYmIwZmE4NjcyZWNjM2Q3NWM0NWVlNWYxODUiLCJpYXQiOjE3NzY3NzEzNjcuMjQ1ODUzLCJuYmYiOjE3NzY3NzEzNjcuMjQ1ODU4LCJleHAiOjQ5MzI0NDQ5NjcuMjQwODExLCJzdWIiOiIyMzAxNjA3Iiwic2NvcGVzIjpbXX0.GHtbr1uuShv6cl0RplMwYCC1ap7Nyv87K6sPDCEBoVG32pSLlaab01hh_CqvUkNYAjTImGGONoVDweIKY8VEXdpxroxesnrGJ43kWvmHJ9RgMdJ8aQQKO0RHf2ToRNeHMz6U2WTa3XAj1rT8M-MO977O28-k6BvvkkI3SQa-4D-QguPkGAw3dV8zpKu0EK3pOTKd00_qyGXqCCjcCOtmxOJ5trseLMd1RDFeqHtMVt3elPLJD-dPfHiJ5ZLnrDXTZjmb5xOWixi_7o-DkGTmk_6sw0gJLJoD7QJxehAlQCoC1P9NZBfO2EiD6fkMT08h-za_LQ8ZQbDe5v_kYXK1IiPvwN9mHiY2r_6WDOGNrqD5Iksl2NZdW58Gntit8Ir9KoUBeh-JT6z1APcqJYSU6ndinIUVvmdVnunAU1inw0VtDUY1ssYGRJysot9liuG0as1ct19dDEu8gPJAAOWO6qpCsBRTTcwmzM3cx6pjHJ58qX7SEQSJzP9ZgIvH6U9tQp1cm9_42k34JF8UKJqxztQNCYXrce-aY-sDJ-byJKhBwuCrSI3XsFK7UM85wMxmznOFHxw273lGlJ2EOFf4sbW3otVmCnoY_TZXHv2HaxUtpCkx2jHzYW7IPAQ0IZiyELOnp_a-Y82z3KJteNpM3Tghi6vo81COXzzocYobYPM';

export async function POST(request: NextRequest) {
  try {
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
