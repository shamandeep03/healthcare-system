import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Protect admin routes
    if (req.nextUrl.pathname.startsWith('/dashboard/admin') && decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Protect doctor routes
    if (req.nextUrl.pathname.startsWith('/dashboard/doctor') && decoded.role !== 'doctor') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Protect patient routes
    if (req.nextUrl.pathname.startsWith('/dashboard/patient') && decoded.role !== 'patient') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
