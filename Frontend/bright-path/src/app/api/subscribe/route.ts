import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // Simulate a delay and response
  await new Promise((res) => setTimeout(res, 1000));

  return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
}
