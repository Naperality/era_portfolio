import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const password = body.password

  if (password === process.env.STUDIO_SECRET) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('studio-auth', password, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid' }, { status: 401 })
}
