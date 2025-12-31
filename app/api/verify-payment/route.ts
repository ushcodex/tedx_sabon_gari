import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { reference } = await req.json();
    const secret = process.env.PAYSTACK_SECRET_KEY;

    if (!secret) return NextResponse.json({ status: 'error', message: 'Config Error' }, { status: 500 });

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${secret}` },
    });

    const data = await response.json();
    if (!response.ok || data.data.status !== 'success') {
        return NextResponse.json({ status: 'failed' }, { status: 400 });
    }

    return NextResponse.json({ status: 'success', data: data.data });
  } catch (error: any) {
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
  }
}
