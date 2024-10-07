import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const res = await fetch('192.168.88.39:7000/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const characters = await res.json();

  return NextResponse.json({
    message: 'GET: Hello from Next.js!',
    characters,
  }, { status: 200 });
}