import { NextRequest, NextResponse } from 'next/server';

// Simple email storage for testing
// eslint-disable-next-line prefer-const
let emailSubscribers: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store email for testing
    if (!emailSubscribers.includes(email)) {
      emailSubscribers.push(email);
    }

    console.log('Email subscribed:', email);
    console.log('Total subscribers:', emailSubscribers.length);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed!',
        totalSubscribers: emailSubscribers.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    subscribers: emailSubscribers,
    total: emailSubscribers.length
  });
} 